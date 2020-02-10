
<template>
  <div>
    <v-stepper
      class="mt-12"
      non-linear
      value="3"
    >
      <v-stepper-header>
        <v-stepper-step
          complete
          editable
          step="1"
        >
          Select campaign settings
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          complete
          editable
          step="2"
        >
          Create an ad group
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          complete
          editable
          step="3"
        >
          Create an ad
        </v-stepper-step>
      </v-stepper-header>

    <v-stepper-content step="1">
    <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
    </v-stepper-content>

    <v-stepper-content step="2">
    <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
    </v-stepper-content>

    <v-stepper-content step="3">
    <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
    </v-stepper-content>

    </v-stepper>
  </div>