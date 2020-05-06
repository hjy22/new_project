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
                <v-form ref="form1"  v-model="valid1">
                <v-text-field
                  :rules="[ lecturerIDRules ]"
                    label="ID"
                ></v-text-field>
                </v-form>
            </v-col>
            </v-row>

            <v-row justify="center">
            <v-chip
                class="mr-2"
            >
            <v-btn 
            :disabled="!valid1" 
            @click="form1Validate" 
            text><v-icon >mdi-check</v-icon>
                Submit</v-btn>
                
            </v-chip>
            </v-row>
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
                <v-form ref="form2"  v-model="valid2">
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

              <v-row justify="center">
            <v-chip
                class="mr-2"
            >
                <v-btn 
                @click="form2Validate()"
                :disabled="!valid2" 
                text>
                <v-icon >mdi-check</v-icon>
                Submit</v-btn>
            </v-chip>
            </v-row>
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
        valid1:true,
        valid2: true,
        lecturerID:"",
      }
    },
    mounted(){
      this.getLecturerID()
      this.getGroupInfo()
    },
    methods: {
      jump(page,identity,name,teamID) {
        this.$store.dispatch("toggleUserIdentity", { status: identity });
        this.$store.dispatch("toggleUserView",{status: name});
        this.$store.dispatch("toggleStudentGroup",{status: teamID});
        this.$router.push(page);
      },
    form1Validate () {
        this.jump('LecturerHome','Lecturer','HOME')
    },
    form2Validate () {
        this.jump('StudentHome','Student','HOME',this.teamNum)
    },
    lecturerIDRules(value){
      if(value == this.lecturerID){
        return true
      }else{
        return "Your ID is invalid"
      }
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
    getLecturerID(){
      this.$http.get('/api/getDDL', {
        params: {code:"COMP107"}
      }).then( (res) => {
        this.lecturerID = res.data[0].lecturerID
      })
    },
      getGroupInfo() {
        this.$http.get('/api/getGroupInfo', {
      }).then( (res) => {
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
        for(var i=0;i<res.data.length;i++){
            this.memberID[i]=res.data[i].id
        }
      })
    },
    


    }
  }
</script>