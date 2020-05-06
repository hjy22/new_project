<template>
  <div id="app">
    <v-card
      color="grey lighten-4"
      flat
      height="auto"
      tile
    >
        <v-toolbar>
  
         <v-toolbar-title>{{this.$store.getters.getUserCurrentView}}</v-toolbar-title>
        <v-spacer/>
        <v-btn @click="jump('LecturerHome','Lecturer', 'HOME')" text>HOME</v-btn>
        <v-spacer/>
        <v-btn @click="jump('LecturerCalendar','Lecturer', 'CALENDAR')" text>CALENDAR</v-btn>
        <v-spacer/>
        <v-btn @click="jump('LecturerCourse','Lecturer', 'COURSE')" text>COURSE</v-btn>
         <v-spacer/>
        <v-btn @click="jump('LecturerInfo','Lecturer', 'INFO')" text>INFO</v-btn>
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

        <v-btn @click="jump('chooseUser','Chosen','CHOSEN')" icon>
          <v-icon>mdi-account-switch</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
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
    jump(page,identity,name) {
      this.$store.dispatch("toggleUserIdentity", { status: identity });
      this.$store.dispatch("toggleUserView",{status: name});
      this.$router.push(page);
    },
    },
    computed: {
    ...mapGetters(["getUserCurrentView"])
  }
}
</script>

<style>
</style>

