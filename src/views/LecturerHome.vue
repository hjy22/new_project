<template>
  <v-content>
    <v-container>
    <v-layout>
        <InfoCard :name="'Anna'"  :character="'Lecturer'"/>
      </v-layout>
    </v-container>
    <v-row
      justify='space-around'
    >
      <v-col >
        <AssignCard :code="courseInfo.code" :name="courseInfo.name" :ddl="courseInfo.ddl" offset-sm5/>
      </v-col>
    </v-row>
    <v-row
      justify='space-around'
    >
      <v-col >
        <div v-if="upload==true">
      <div class="headline text-center">You have uploaded the student information already</div>
      </div>
      <div v-else>
        
        <UploadFile/>
        <br/>
      </div>
      </v-col>
    </v-row>
    
  </v-content>
</template>

<script>
import axios from 'axios'
import UploadFile from "@/components/UploadFile";
import InfoCard from "@/components/InfoCard";
import AssignCard from "@/components/AssignCard";

export default {
  data () {
    return {
      courseInfo:[],
      upload:"false",
    }
  },
  components: {
    UploadFile,
    InfoCard,
    AssignCard,
  },
  created () {
      this.getCourseInfo() 
      this.getEventsInfo()
    },
    
    methods: {
     getCourseInfo() {
        this.$http.get('/api/getDDL', {
           params: {code: "COMP107"}
          }).then( (res) => {
            // console.log('res', res);
            this.courseInfo = res.data[0]
          })
    },
    
    getEventsInfo(){
           this.$http.get('/api/getGroupInfo', {
          }).then( (res) => {
            // console.log('res', res);
            if(res.data.length!=0){
              this.upload = true
            }
          })
        },
    }
}
</script>

