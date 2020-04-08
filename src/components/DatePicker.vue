<template>
<v-content>
    <div v-if="upload==false">
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
        <v-col cols="12" sm="6" md="3">
            Deadline: {{date}}
          <v-text-field
          v-model="time"
            label="Time"
          ></v-text-field>
        </v-col>
         </v-row>

         <v-row justify="center">
         <!-- <v-btn color="primary" @click="uploadDDL">UPLOAD deadline</v-btn> -->
         
         <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
            COMP107 Deadline is {{date}} {{time}}.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="uploadDDL"
          >
            Yes
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="dialog == false"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-row>
      </div>
      <div v-else>
        <div class="headline text-center">You have uploaded the Deadline already</div>
      </div>
        
</v-content>
</template>

<script>
export default {
    data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    dialog: false,
    time:"",
    upload:false,
  }),
  created(){
      this.getDDL()
  },
  methods:{
      uploadDDL() {
          this.dialog = false
      // axios.post('/', {})
      this.$http.post('/api/uploadDDL', {
        date: this.date+" "+this.time, code: "COMP107"
      }).then( (res) => {
        console.log('res', res);
      })
    },
    getDDL(){
        this.$http.get('/api/getDDL', {
            params: {code: "COMP107"}
          }).then( (res) => {
            console.log('res', res);
            if(res.data[0].ddl!=null){
              this.upload = true
            }
          })
    }
  }
}
</script>