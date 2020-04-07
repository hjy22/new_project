<template>
<v-content>
        <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" md="4">
            <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
            >
            <template v-slot:activator="{ on }">
                <v-text-field
                v-model="date"
                label="Pick deadline"
                readonly
                v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
            </v-date-picker>

            
            
            </v-dialog>
            <!-- <v-file-input accept="PDF/*" label="Upload Assignment Detail File"></v-file-input>
            <v-btn class="ma-2" color="primary" dark>Upload
                <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
            </v-btn> -->
        </v-col>
        
        <v-spacer></v-spacer>
        </v-row>
         <v-row justify="center">
         <v-btn color="primary" @click="uploadDDL">UPLOAD deadline</v-btn>
         </v-row>
</v-content>
</template>

<script>
export default {
    data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
  methods:{
      uploadDDL() {
      // axios.post('/', {})
      this.$http.post('/api/uploadDDL', {
        date: this.date+" 17:00", code: "COMP107"
      }).then( (res) => {
        console.log('res', res);
      })
    },
  }
}
</script>