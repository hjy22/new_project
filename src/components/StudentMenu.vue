<template>
  <div id="app">
    <v-card
      color="grey lighten-4"
      flat
      height="auto"
      tile
    >
      <v-toolbar >
        <v-spacer/>
        <v-btn @click="jump('StudentHome','Student','HOME')" text>HOME</v-btn>
        <v-spacer/>
        <v-btn @click="jump('StudentPre','Student','PRESENTATION')" text>PRESENTATION</v-btn>
        <v-spacer/>
        <v-btn @click="jump('StudentMark','Student','MARKING')" text>MARKING</v-btn>
  
        <v-spacer/>
        <v-chip
      class="ma-2"
      color="indigo"
      text-color="white"
    >
      <v-avatar left>
        <v-icon>mdi-face</v-icon>
      </v-avatar>
      Student
    </v-chip>
  

        <v-btn @click="jump('chooseUser','Chosen','CHOSEN')" icon>
          <v-icon>mdi-account-switch</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
</div>
</template>

<script>
export default {
  methods: {
    jump(page,identity,name) {
      this.$store.dispatch("toggleUserIdentity", { status: identity });
      this.$store.dispatch("toggleUserView",{status: name});
      this.$router.push(page);
    },
    },
}
</script>

<style>
</style>

