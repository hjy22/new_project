<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    fixed
    color="teal"
  >
    <v-btn @click="jump('LecturerHome','Lecturer','HOME')">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn @click="jump('LecturerCalendar','Lecturer','CALENDAR')">
      <span>Calendar</span>
      <v-icon>mdi-calendar-text</v-icon>
    </v-btn>

    <v-btn @click="jump('LecturerCourse','Lecturer','COURSE')">
      <span>Course</span>
      <v-icon>mdi-book-open</v-icon>
    </v-btn>

    <v-btn @click="jump('LecturerInfo','Lecturer','INFO')">
      <span>Info</span>
      <v-icon>mdi-account-box-multiple</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
import { mapGetters } from "vuex";
  export default {
    data () {
      return {
        activeBtn: 0,
      }
    },
    methods: {
    jump(page,identity,name) {
      this.$store.dispatch("toggleUserIdentity", { status: identity });
      this.$store.dispatch("toggleUserView",{status: name});
      this.$router.push(page);
    },
    },
    computed: {
    ...mapGetters(["getCurrentIdentity"])
  }

  }
</script>