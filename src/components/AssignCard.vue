<template>
  <v-card
    class="mx-auto"
    max-width="400px"
  >
   <v-layout xs7>
    <v-card-title primary-title>
      <div class="text--primary display-1 mb-2 text-left">Code: {{ code }}</div>
      <div class="title font-weight-regular grey--text">Name: {{ name }}</div>
      <div class="title font-weight-regular grey--text">Deadline: {{ ddl }} </div>
    </v-card-title>
  </v-layout>
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
    props: ['code', 'name', 'ddl'],
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

