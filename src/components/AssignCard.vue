<template>
<v-container>
  <v-card
    class="mx-auto"
    max-width="400px"
  >
   <v-layout xs7>
    <v-card-title primary-title>
      <div class="text--primary headline mb-2 text-left">Code: {{ code }}</div>
      <div class="title headline font-weight-regular grey--text">Name: {{ name }}</div>
      <!-- <div class="title headline font-weight-regular grey--text">Deadline: {{ ddl }} </div> -->
    </v-card-title>
  </v-layout>
  </v-card>
</v-container>
</template>

<script>
  export default {
    props: ['code', 'name', 'ddl'],
  }
</script>

