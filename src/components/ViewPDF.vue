<template>
<v-container>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">VIEW FEEDBACK</v-btn>
      </template>
      <!-- <v-card> -->
        <v-toolbar dark color="primary">
          <!-- <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn> -->
          <v-toolbar-title>Team 1 Feedback</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">
                <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
        <iframe
    :src="url"
    type="application/x-google-chrome-pdf"
    width="100%"
    height="100%" />
      <!-- </v-card> -->
    </v-dialog>
  </v-row>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        url: ``,
      }
    },
    mounted() {
        this.url=`/static/file/aa.pdf`;
    }
  }
</script>