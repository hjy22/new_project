<template>
  <div id="app">
  <!-- <v-app id="inspire"> -->
    <v-card
      color="grey lighten-4"
      flat
      height="auto"
      tile
    >
    <!-- <p>{{userCurrentView}}</p> -->
      <!-- <v-toolbar v-if="this.$store.getters.getCurrentView === 'Lecturer'"> -->
        <v-toolbar>
  
        <!-- <v-toolbar-title>Title</v-toolbar-title> -->
        <v-spacer/>
        <v-btn @click="jump('LecturerHome','Lecturer')" text>HOME</v-btn>
        <v-spacer/>
        <v-btn @click="jump('LecturerCalendar','Lecturer')" text>Calendar</v-btn>
        <v-spacer/>
        <v-btn @click="jump('LecturerCourse','Lecturer')" text>COURSE</v-btn>
         <v-spacer/>
        <v-btn @click="jump('LecturerInfo','Lecturer')" text>INFO</v-btn>
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

        <v-btn @click="jump('chooseUser','choose')" icon>
          <v-icon>mdi-account-switch</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
  <!-- </v-app> -->
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  methods: {
    jump(name,indentity) {
      this.$store.dispatch("toggleUserView",{status: indentity});
      this.$router.push(name);
      // update state in Vuex
    },
    },
    computed: {
    ...mapGetters(["getCurrentView"])
  }
}
</script>

<style>
</style>

