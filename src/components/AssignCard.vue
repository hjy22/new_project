
<template>
  <v-card
    class="mx-auto"
    max-width="450"
  >
    <v-card-title>
      <div class="display-1 mb-2">COMP107</div>
      <div class="title font-weight-regular grey--text text-no-wrap">Designing Systems For The Digital Society</div>
      <div class="title font-weight-regular grey--text">Deadline: 2nd April, 12:30 PM</div>
    </v-card-title>

    <v-divider class="mt-6 mx-4"></v-divider>

    <v-card-text>
      <v-chip
        class="mr-2"
        @click="lights"
      >
        <v-icon left>mdi-email</v-icon>
        Email
      </v-chip>
      <v-chip
        class="mr-2"
        @click="alarm"
      >
        <v-icon left>mdi-file-check</v-icon>
         Feedback
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
      lights () {
        alert('Toggling lights...')
      },
    },
  }
</script>