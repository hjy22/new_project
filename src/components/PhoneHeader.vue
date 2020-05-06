<template>
  <div id="app">
    <v-card
        v-if="this.$store.getters.getCurrentIdentity === 'Lecturer'||this.$store.getters.getCurrentIdentity === 'Student'"
      color="grey lighten-4"
      flat
      height="auto"
      tile
    >
        <v-toolbar>
  
        <v-toolbar-title>{{this.$store.getters.getUserCurrentView}}</v-toolbar-title>
        <v-spacer/>
        <v-chip
        class="ma-2"
        color="indigo"
        text-color="white"
        >
        <v-avatar>
          <v-icon v-if="this.$store.getters.getCurrentIdentity === 'Lecturer'" >mdi-account-tie</v-icon>
          <v-icon v-else-if="this.$store.getters.getCurrentIdentity === 'Student'">mdi-face</v-icon>
        </v-avatar>
        {{this.$store.getters.getCurrentIdentity}}
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
    ...mapGetters(["getUserCurrentView","getCurrentIdentity"])
  }
}
</script>

<style>
</style>

