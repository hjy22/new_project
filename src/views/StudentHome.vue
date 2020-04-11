<template>
<!-- <v-app> -->
<v-content>
  <!-- <StudentMenu/> -->
  <InfoCard name="aaaa" ID="1111" character="student"/>
    <!-- <v-container>
    <v-row
      justify='center'
    >
    <v-flex md8>
      <v-row class="text-center">
        <v-col>
          <v-card>
      <GroupCard :index="presenter" title="My Members"/>
      <EmailDialog :index="presenter" containsLeader="false"/>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
      <GroupCard :index="marker" title="My Makers"/>
      <EmailDialog  :index="marker" containsLeader="true"/>
      </v-card>
        </v-col>
        </v-row>
      </v-flex>
    </v-row>
    </v-container> -->
  <!-- </v-container> -->
<!-- <h1>aaaaaaaa</h1> -->
<!-- <Footer/> -->
</v-content>
<!-- </v-app> -->
</template>

<script>
// import axios from 'axios'
// import { mapGetters } from "vuex";
// import StudentMenu from "@/components/StudentMenu";
// import GroupCard from "@/components/GroupCard";
// import EmailDialog from "@/components/EmailDialog";
import InfoCard from "@/components/InfoCard";
// import Footer from "@/components/Footer";

export default {
  name:"StudentHome",
  components: {
    // StudentMenu,
    // Footer,
    InfoCard,
    // GroupCard,
    // EmailDialog,
  },
  data () {
      return {
        // Info: [],
        // marker:null,
        // presenter:null,
      }
    },
  created () {
      // this.getMemberInfo() // 本地JSON
      // this.getTeamNum()
    },
    methods: {
      // 本地json获取商品数据
    //  getMemberInfo() {
    //     axios.get('../static/COMP107.json').then(response => {
            
    //         this.Info = response.data;
    //     }, response => {
    //     });
    // },
      // getJsonLength(jsonData){
      //     var jsonLength = 0;
      //     for(var item in jsonData){
      //       jsonLength++;
      //     }
      //     return jsonLength;
      // },   
      // getTeamNum(){
      //   this.marker = this.$store.getters.getStudentGroup
      //   this.presenter = Number(this.marker)-1
      // }
    },
  //   computed: {
  //   ...mapGetters(["getStudentGroup"])
  // }
}
</script>

<style > 
</style>