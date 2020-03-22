<template>
  <v-card>
    <v-card-title class="indigo white--text headline">
      COMP107
      <v-spacer/>
      <v-text-field
        v-model="search"
        label="Search Student"
        dark
        flat
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
      ></v-text-field>
    </v-card-title>
    <v-row
      class="pa-4"
      justify="space-between"
    >
      <v-col cols="5">
        <v-treeview
        :search="search"
          :active.sync="active"
          :items="items"
          :load-children="fetchUsers"
          :open.sync="open"
          activatable
          color="warning"
          open-all
          open-on-click
          transition
        >
          <template v-slot:prepend="{ item }">
            <v-icon v-if="!item.children">mdi-account</v-icon>
          </template>
        </v-treeview>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col
        class="d-flex text-center"
      >
        <v-scroll-y-transition mode="out-in">
          <div
            v-if="!selected"
            class="title grey--text text--lighten-1 font-weight-light"
            style="align-self: center;"
          >
            Select a Student
          </div>
          <v-card
            v-else
            :key="selected.id"
            class="pt-0 mx-auto"
            flat
            max-width="auto"
          >
            <v-card-text>
              <h3 class="headline mb-2">
                {{ selected.name }}
              </h3>
              <div class="blue--text subheading font-weight-bold">{{ selected.groupID }}</div>
              <div>Marker: {{ selected.marker }}</div>
            </v-card-text>
            <v-divider/>
            <v-row>
              <v-col>
                <EmailDialog :index="selected.id-1" :containsLeader="true"/>
                </v-col>
                  <v-col>
                    <ViewPDF />
                    </v-col>
              </v-row>
              <!-- <v-row>
                <ViewPDF />
              </v-row> -->
              
              <v-row justify='center'>
                <LecturerRoomCard :index="selected.id-1"/>
              </v-row>
            <v-row justify='center'>
              <v-col>
                <GroupCard :index="selected.id-1" title="Members"/>
              </v-col>
            </v-row>
          </v-card>
        </v-scroll-y-transition>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  import GroupCard from "../components/GroupCard";
  import EmailDialog from "../components/EmailDialog";
  import LecturerRoomCard from "../components/LecturerRoomCard";
  import ViewPDF from "../components/ViewPDF";

  const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

  export default {
    data: () => ({
      search: null,
      active: [],
      avatar: null,
      open: [],
      users: [],
    }),
    components:{
      GroupCard,
      EmailDialog,
      LecturerRoomCard,
      ViewPDF
    },

    computed: {
      items () {
        return [
          {
            name: 'Team',
            children: this.users,
          },
        ]
      },
      selected () {
        if (!this.active.length) return undefined

        const id = this.active[0]

        return this.users.find(user => user.id === id)
      },
    },
    methods: {
      async fetchUsers (item) {
        // Remove in 6 months and say
        // you've made optimizations! :)
        await pause(500)
        const url = "static/COMP107.json"
        return fetch(url)
          .then(res => res.json())
          .then(json => (item.children.push(...json)))
          .catch(err => console.warn(err))
      },
    },
  }
</script>