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
        <v-btn a href="LecturerHomePage.html" text>HOME</v-btn>
        <v-spacer/>
        <v-btn a href="LecturerFeedbackPage.html" text>Calendar</v-btn>
        <v-spacer/>
        <v-btn a href="LecturerCoursePage.html" text>COURSE</v-btn>
         <v-spacer/>
        <v-btn a href="LecturerInfoPage.html" text>INFO</v-btn>
  
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

        <v-btn a href="index.html" icon>
          <v-icon>mdi-account-switch</v-icon>
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

