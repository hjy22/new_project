<template>
<v-row>
  <v-col>
    <v-list two-line subheader>
      <v-subheader>Leader</v-subheader>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Profile photo</v-list-item-title>
          <v-list-item-subtitle>Change your Google+ profile photo</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-col>
  <v-col>
  <v-card
    max-width="250"
    class="mx-auto"
  >

    <v-list two-line>
      <v-subheader>Members</v-subheader>
        <template v-for="(member, index) in items">
          <v-list-item :key="member.title">
            <!-- <template> -->
              <v-list-item-content>
                <v-list-item-title v-text="member.name"></v-list-item-title>
                <v-list-item-subtitle v-text="member.email"></v-list-item-subtitle>
              </v-list-item-content>
            <!-- </template> -->
          </v-list-item>

          <v-divider
            v-if="index + 1 < items.length"
            :key="index"
          ></v-divider>
        </template>
    </v-list>
  </v-card>
  </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      leader:[
        {
          name:"Daniel",
          email:"Daniel@liverpool.ac.uk"
        }
      ],
      items: [
      {
        name:"Chelsey Dietrich",
        email:"Chelsey@jasper.info"
      },
      {
        name:"Anna",
        email:"Anna@jasper.info"
      },
      {
        name:"Ben",
        email:"Ben@jasper.info"
      },
      {
        name:"Carol",
        email:"Carol@jasper.info"
      }
    ]
    }),
  }
</script>