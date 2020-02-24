<template>
  <div id="app">
  <!-- <v-app id="inspire"> -->
    <v-card
      color="grey lighten-4"
      flat
      height="auto"
      tile
    >
      <v-toolbar >
  
        <!-- <v-toolbar-title>Title</v-toolbar-title> -->
        <v-spacer/>
        <v-btn @click="jump('LecturerHome')" text>HOME</v-btn>
        <v-spacer/>
        <v-btn @click="jump('LecturerCalendar')" text>Calendar</v-btn>
        <v-spacer/>
        <v-btn @click="jump('LecturerCourse')" text>COURSE</v-btn>
         <v-spacer/>
        <v-btn @click="jump('LecturerInfo')" text>INFO</v-btn>
  
        <v-spacer/>

        <v-chip
        class="ma-2"
        color="indigo"
        text-color="white"
        >
        <v-avatar left>
          <v-icon>mdi-account-tie</v-icon>
        </v-avatar>
        Lecturer
      </v-chip>

        <v-btn @click="jump('chooseUser')" icon>
          <v-icon>mdi-account-switch</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
  <!-- </v-app> -->
</div>
</template>

<script>
export default {
  methods: {
      jump(name) {
      // this.$store.dispatch("toggleUserView",{status: name});
      this.$router.push(name);
      // update state in Vuex
      
    },
    },
}
</script>

<style>
</style>

