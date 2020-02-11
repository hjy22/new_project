<template>
  <v-card>
    <v-card-title class="indigo white--text headline">
      {{code}}
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
              <v-avatar
                v-if="avatar"
                size="88"
              >
                <v-img
                  :src="selected.img"
                  class="mb-6"
                ></v-img>
              </v-avatar>
              <h3 class="headline mb-2">
                {{ selected.name }}
              </h3>
              <!-- <div class="blue--text subheading font-weight-bold">{{ selected.identity }}</div> -->
            </v-card-text>
            <v-divider></v-divider>
            <v-row
              class="text-left"
              tag="v-card-text"
            >
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">GroupID:</v-col>
              <v-col>{{ selected.groupID }}</v-col>
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">Email:</v-col>
              <v-col>
                <a :href="`//${selected.email}`" target="_blank">{{ selected.email }}</a>
              </v-col>
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">Members:</v-col>
              <!-- <v-col>{{ selected.phone }}</v-col> -->
              <!-- <v-col>
                <v-row no-gutters>
                  <v-col>
                    {{ selected.company.name }}
                  </v-col>
                  <v-col>
                    {{ selected.company.bs }}
                  </v-col>
                </v-row>
              </v-col> -->
              <v-row>
          <v-col
            v-for="item in selected.members"
            :key="item.name"
            cols="12"
            sm="2"
            md="6"
            lg="6"
          >
            <v-card>
              <v-card-title class="subtitle-1">{{ item.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <!-- <v-list-item-content>Email:</v-list-item-content> -->
                  <v-list-item-content class="align-end">
                    <a :href="`//${item.email}`">{{ item.email }}</a>
                    </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>

            </v-row>
          </v-card>
        </v-scroll-y-transition>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

  const avatars = [
    '?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
    '?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
    '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
    '?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
    '?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly',
  ]

  const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

  export default {
    props: ['code'],
    data: () => ({
      search: null,
      active: [],
      avatar: null,
      open: [],
      users: [],
    }),

    computed: {
      items () {
        return [
          {
            name: this.code+' Leaders',
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

    watch: {
      selected: 'randomAvatar',
    },

    methods: {
      async fetchUsers (item) {
        // Remove in 6 months and say
        // you've made optimizations! :)
        await pause(500)
        const url = "static/"+this.code+".json"
        return fetch(url)
          .then(res => res.json())
          .then(json => (item.children.push(...json)))
          .catch(err => console.warn(err))
      },
      randomAvatar () {
        this.avatar = avatars[Math.floor(Math.random() * avatars.length)]
      },
    },
  }
</script>