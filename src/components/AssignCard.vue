
<template>
  <v-card
    class="mx-auto"
    max-width="450"
  >
    <v-card-title>
      <div class="display-1 mb-2">COMP107</div>
      <div class="title font-weight-regular grey--text">Deadline: 2nd April, 12:30 PM</div>
    </v-card-title>

    <v-divider class="mt-6 mx-4"></v-divider>

    <v-card-text>
      <v-chip
        class="mr-2"
        @click="lights"
      >
        <v-icon left>mdi-brightness-5</v-icon>
        Send Email
      </v-chip>
      <v-chip
        class="mr-2"
        @click="alarm"
      >
        <v-icon left>mdi-alarm-check</v-icon>
        xxxxx
      </v-chip>
      <v-chip @click="blinds">
        <v-icon left>mdi-blinds</v-icon>
        xxxxx
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    methods: {
      alarm () {
        alert('Turning on alarm...')
      },
      blinds () {
        alert('Toggling Blinds...')
      },
      lights () {
        alert('Toggling lights...')
      },
    },
  }
</script>