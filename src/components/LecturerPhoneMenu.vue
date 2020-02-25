<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    fixed
    color="teal"
  >
    <v-btn @click="jump('LecturerHome','Lecturer')">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn @click="jump('LecturerCalendar','Lecturer')">
      <span>Calendar</span>
      <v-icon>mdi-calendar-text</v-icon>
    </v-btn>

    <v-btn @click="jump('LecturerCourse','Lecturer')">
      <span>Course</span>
      <v-icon>mdi-book-open</v-icon>
    </v-btn>

    <v-btn @click="jump('LecturerInfo','Lecturer')">
      <span>Info</span>
      <v-icon>mdi-account-box-multiple</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {
        activeBtn: 1,
      }
    },
    methods: {
    jump(name,indentity) {
      this.$store.dispatch("toggleUserView",{status: indentity});
      this.$router.push(name);
      // update state in Vuex
    },
    },

  }
</script>