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
              <p>Pick {{header}}</p>
                <v-text-field
                v-model="date"
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
            {{header}}: {{date}}
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
          Submit
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Comfirmation
        </v-card-title>

        <v-card-text>
            {{name}} {{header}} is {{date}} {{time}}.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="uploadTime"
          >
            Yes
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="dialog=false"
          >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-row>
      </div>
      <div v-else>
        <div class="headline text-center">You have uploaded the {{header}} already</div>
      </div>
        
</v-content>
</template>

<script>
export default {
  props: ['identity','header','groupID','name'],
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
    if(this.identity=='lecturer'){
      this.getDDL(this.identity)
    }else if(this.identity=='student'){
      this.getPreTime(this.groupID)
    }
  },
  methods:{
    uploadTime(){
      if(this.identity=='lecturer'){
        this.uploadDDL()
      }else if(this.identity=='student'){
        this.setPreTime()
      }
    },
      uploadDDL() {
          this.dialog = false
      // axios.post('/', {})
      this.$http.post('/api/uploadDDL', {
        date: this.date+" "+this.time, code: "COMP107"
      }).then( (res) => {
        console.log('res', res);
        this.upload=true
      })
    },
    getDDL(identity){
      this.$http.get('/api/getDDL', {
          params: {code: "COMP107"}
        }).then( (res) => {
          console.log('res', res);
          if(res.data[0].ddl!=""){
            this.upload = true
          }
        })
    },
    getPreTime(groupID){
      this.$http.get('/api/getMarking', {
          params: {name: groupID}
        }).then( (res) => {
          console.log('res', res);
          if(res.data[0].PreTime!=null){
            this.upload = true
          }
        })
    },
    setPreTime() {
      this.$http.post('/api/setPreTime', {
        PreTime: this.date+" "+this.time, name: this.groupID
      }).then( (res) => {
        console.log('res', res);
        this.setMarkingTime()
        this.upload=true
      })
    },
    setMarkingTime(){
      this.$http.post('/api/setMarkingTime', {
        markingTime: this.date+" "+this.time, name: this.groupID
      }).then( (res) => {
        console.log('res', res);
      })
    }
  }
}
</script>