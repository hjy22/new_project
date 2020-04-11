<template>
<v-container>
  <v-card>
    <v-toolbar flat>

      <v-toolbar-title>Select Your Identity</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          fixed-tabs
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            href="#mobile-tabs-5-1"
            class="primary--text"
          >
            <v-icon>mdi-account-tie</v-icon> Lecturer
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-2"
            class="primary--text"
          >
            <v-icon>mdi-face</v-icon> Student
          </v-tab>

        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item
        value="mobile-tabs-5-1"
      >
        <v-card flat>
            <v-container>
            <v-row justify="center">
            <v-col
                cols="12"
                md="4"
            >
                <v-form ref="form1">
                <v-text-field
                    label="Name"
                ></v-text-field>
                <v-text-field
                    label="Email"
                ></v-text-field>
                </v-form>
            </v-col>
            </v-row>

            <v-row justify="center">
            <!-- <v-card-text> -->
            <v-chip
                class="mr-2"
            >
            <v-btn @click="jump('LecturerHome','Lecturer','HOME')" text><v-icon >mdi-check</v-icon>
                Submit</v-btn>
                
            </v-chip>
            <!-- </v-card-text> -->
            </v-row>
        <!-- </v-card> -->
            </v-container>
        </v-card>
      </v-tab-item>

      <v-tab-item
        value="mobile-tabs-5-2"
      >
        <v-card flat>
            <v-container>
            <v-row justify="center">
            <v-col
                cols="12"
                md="4"
            >
                <v-form ref="form2"  v-model="valid">
                <v-text-field 
                    v-model="teamNum"
                    label="Team ID"
                    :rules="[ teamNumRules ]"
                ></v-text-field>
                <v-text-field
                  v-model="studentID"
                    label="Your ID"
                    :rules="[ studentIDRules ]"
                ></v-text-field>
                </v-form>
            </v-col>
            </v-row>
            <!-- <v-divider class="mt-6 mx-4"></v-divider> -->

            <!-- <v-card-text> -->
              <v-row justify="center">
            <v-chip
                class="mr-2"
            >
                <!-- <v-btn 
                @click="validate;jump('StudentHome','Student','HOME',teamNum)" 
                text> -->
                <v-btn 
                @click="validate()"
                :disabled="!valid" 
                text>
                <v-icon >mdi-check</v-icon>
                Submit</v-btn>
            </v-chip>
            </v-row>
            <!-- </v-card-text> -->
        <!-- </v-card> -->
            </v-container>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</v-container>
</template>

<script>
import { mapGetters } from "vuex";
import axios from 'axios'
  export default {
    data () {
      return {
        teamNum:null,
        studentID:null,
        tabs: null,
        groupName:[],
        memberID:[],
        valid: true,
      //   teamNumRules: [
      //   v => !!v || 'Team number is required',
      //   v => (v && v <= 9 && v > 0) || 'Team number does not valid',
      // ],
      }
    },
    created(){
      this.getGroupInfo()
    },
    methods: {
      jump(page,identity,name,teamID) {
        // console.log(this.$store.getters.getCurrentIdentity)
        // console.log(this.$store.getters.getStudentGroup)
      this.$store.dispatch("toggleUserIdentity", { status: identity });
      this.$store.dispatch("toggleUserView",{status: name});
      this.$store.dispatch("toggleStudentGroup",{status: teamID});
      // console.log(this.$store.getters.getCurrentIdentity)
      this.$router.push(page);
    },
    validate () {
      // if (this.$refs.form2.validate()) {
        this.jump('StudentHome','Student','HOME',this.teamNum)
      // }
    },
    teamNumRules (value) {
    for(var i=0;i<this.groupName.length;i++){
      if(value==this.groupName[i].name){
        this.getStudentID()
        return true
      }
    }
     return "Team number does not valid";  
    },
    studentIDRules(value){
      for(var i=0;i<this.memberID.length;i++){
      if(value==this.memberID[i]){
        return true
      }
    }
     return "Your ID does not valid";  
    },
      getGroupInfo() {
        this.$http.get('/api/getGroupInfo', {
      }).then( (res) => {
        // console.log('res', res);
        for(var i=0;i<res.data.length;i++){
            this.groupName.push({
            name: res.data[i].Name
        })
        }
      })
    },
    getStudentID() {
      this.memberID.length=0
        this.$http.get('/api/getStudentID', {
          params: {name: this.teamNum}
      }).then( (res) => {
        // console.log('res', res);
        for(var i=0;i<res.data.length;i++){
            this.memberID[i]=res.data[i].id
        }
      })
    },
    


    }
  }
</script>