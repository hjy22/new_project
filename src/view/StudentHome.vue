<template>
<v-app>
<v-content>
  <!-- <StudentMenu/> -->
  <InfoCard name="aaaa" ID="1111" character="student"/>
  <!-- <v-container> -->
    <v-container>
    <!-- <v-flex md6 justify-content-center> -->
    <v-row
      justify='center'
    >
    <v-flex md3>
    
      <GroupCard index="0"/>
      <EmailDialog index="0" :containsLeader="false"/>
      </v-flex>
    </v-row>
    <!-- </v-flex> -->
    </v-container>
  <!-- </v-container> -->
<!-- <h1>aaaaaaaa</h1> -->
<!-- <Footer/> -->
</v-content>
</v-app>
</template>

<script>
import axios from 'axios'
import StudentMenu from "@/components/StudentMenu";
import GroupCard from "@/components/GroupCard";
import EmailDialog from "@/components/EmailDialog";
import InfoCard from "@/components/InfoCard";
import Footer from "@/components/Footer";

export default {
  components: {
    StudentMenu,
    Footer,
    InfoCard,
    GroupCard,
    EmailDialog,
  },
  data () {
      return {
        Info: [],
      }
    },
  created () {
      this.getMemberInfo() // 本地JSON
    },
    
    methods: {
      // 本地json获取商品数据
     getMemberInfo() {
        axios.get('../static/COMP107.json').then(response => {
            
            this.Info = response.data;
            // console.log(this.group[0].name);
        }, response => {
            // console.log("error");
        });
    },
      getJsonLength(jsonData){
          var jsonLength = 0;
          for(var item in jsonData){
            jsonLength++;
          }
          return jsonLength;
      },   
    },
}
</script>

<style > 
</style>