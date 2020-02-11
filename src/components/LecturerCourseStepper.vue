
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
          Set Deadline
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          complete
          editable
          step="2"
        >
          Send Email to All Students
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          complete
          editable
          step="3"
        >
          Check Submit
        </v-stepper-step>
      </v-stepper-header>

    <v-stepper-content step="1">
    <v-card color="grey lighten-1" class="mb-12" height="200px">
      <DatePicker/>
      
    </v-card>
    </v-stepper-content>

    <v-stepper-content step="2">
    <!-- <v-card color="grey lighten-1" class="mb-12" height="200px"> -->
      <v-file-input accept="PDF/*" label="File input"></v-file-input>
    <!-- </v-card> -->
    </v-stepper-content>

    <v-stepper-content step="3">
    <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
    </v-stepper-content>

    </v-stepper>
  </div>
</template>
  
<script>
import DatePicker from "./DatePicker";
export default {
  components:{
    DatePicker
  }
}
</script>
  