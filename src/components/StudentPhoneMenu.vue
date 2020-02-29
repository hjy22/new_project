<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    fixed
    color="teal"
  >
    <v-btn @click="jump('StudentHome','Student','HOME')">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn @click="jump('StudentPre','Student','PRESENTATION')">
      <span>Presentation</span>
      <v-icon>mdi-account-tie-voice</v-icon>
    </v-btn>

    <v-btn @click="jump('StudentMark','Student','MARKING')">
      <span>Marking</span>
      <v-icon>mdi-fountain-pen-tip</v-icon>
    </v-btn>

    <!-- <v-btn @click="jump('LecturerInfo','Student','INFO')">
      <span>Info</span>
      <v-icon>mdi-account-box-multiple</v-icon>
    </v-btn> -->

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