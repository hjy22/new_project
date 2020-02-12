
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

    <v-stepper-content  step="2">
      <v-form v-model = "valid">
      <v-text-field
        v-model="subject"
        filled
        clearable
        color="deep-purple"
        label="Subject"
        style="min-height: 96px"
        :rules="emailRules"
      ></v-text-field>
      <v-textarea
        v-model="body"
        auto-grow
        clearable
        filled
        color="deep-purple"
        label="Body"
        rows="5"
        :rules="emailRules"
      ></v-textarea>
      <!-- <div class="mt-12 text-center">
        Value: {{ subject }}
      </div> -->
      <!-- <v-btn class="ma-2" color="primary" dark>Upload
                <v-icon dark right >Sending Emailmdi-email</v-icon>
            </v-btn> -->
      <!-- <a href="mailto:youemail@mail.com?subject={subject}&body=body">Sending Email</a> -->
      <v-btn :href=sendingEmail() :disabled="!valid">Sending</v-btn>
      <!-- <v-btn :href=sendingEmail() @click="submit" :disabled="!valid">Sending</v-btn> -->
      </v-form>
    </v-stepper-content>

    <v-stepper-content step="3">
      
    </v-stepper-content>

    </v-stepper>
  </div>
</template>
  
<script>
import DatePicker from "./DatePicker";
export default {
  data: () => ({
    valid : true,
    subject: '',
    body: '',
    emailRules: [
      v => !!v || 'Cannot empty',
    ],
  }),
  components:{
    DatePicker
  },
  methods:{
    sendingEmail(){
      // const url = "static/"+this.code+".json"
      // fetch(static/COMP107.json)
      // console.log(item)
      const url = "mailto:youemail@mail.com;sgjhua13@gmail.com?subject="+this.subject+"&body="+this.body
      return url
    },
    //  submit() {
    //     if (this.$refs.form.submit()) {
    //       this.snackbar = true
    //     }
    //   },
  }
}
</script>
  