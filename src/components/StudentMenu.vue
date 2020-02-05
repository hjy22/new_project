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
        <v-btn a href="StudentHomePage.html" text>HOME</v-btn>
        <v-spacer/>
        <v-btn a href="feedback.html" text>FEEDBACK</v-btn>
        <v-spacer/>
        <v-btn a href="LecturerCoursePage.html" text>COURSE</v-btn>
         <v-spacer/>
        <v-btn text>Button</v-btn>
  
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
  

        <v-btn a href="index.html" icon>
          <v-icon>mdi-account-convert</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
  <!-- </v-app> -->
</div>
</template>

<script>
export default {

}
</script>

<style>
</style>

