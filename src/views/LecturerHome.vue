<template>
<!-- <v-app> -->
  <v-content>
    <!-- <LecturerMenu/> -->
    <v-container>
    <v-layout>
      <!-- <v-flex v-for="(Info, id) in getLecturerHomePageInfoList" :key="id" xs12 sm8 md4 offset-md4> -->
        <InfoCard :name="'Anna'" :ID="'0001'" :character="'Lecturer'"/>
      <!-- </v-flex> -->
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
      </div>
      </v-col>
    </v-row>
    
    <!-- <Footer/> -->
  </v-content>
 <!-- </v-app> -->
</template>

<script>
import axios from 'axios'
import LecturerMenu from "@/components/LecturerMenu";
import UploadFile from "@/components/UploadFile";
import InfoCard from "@/components/InfoCard";
import AssignCard from "@/components/AssignCard";
import Footer from "@/components/Footer";

export default {
  data () {
    return {
      courseInfo:[],
      upload:"false",
    }
  },
  components: {
    LecturerMenu,
    UploadFile,
    InfoCard,
    AssignCard,
    Footer,
  },
  created () {
      this.getCourseInfo() 
      this.getEventsInfo()
    },
    
    methods: {
      // 本地json获取商品数据
     getCourseInfo() {
        axios.get('../static/CourseInfo.json').then(response => {
            
            this.courseInfo = response.data[0];
        }, response => {
            console.log("error");
        });
    },
    getEventsInfo(){
           this.$http.get('/api/getGroupInfo', {
          }).then( (res) => {
            console.log('res', res);
            if(res.data.length!=0){
              this.upload = true
            }
          })
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
