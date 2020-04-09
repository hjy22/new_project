<template>
<v-content>
        <v-list-item-content>
          <v-container>
          <DatePicker :identity="'student'" :header="'Presentation Time'" :groupID="teamID" :name="'Group'+teamID"/>
  <div v-if="upload==false">
            
            <v-row justify="center">
                <v-col sm="6" md="6">
                <v-text-field
                    label="Place"
                    v-model="location"
                ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center">
            <v-btn
          color="red lighten-2"
          dark
          @click="setLocation"
        >
          Submit
        </v-btn>
            </v-row>
            </div>
      <div v-else>
        <div class="headline text-center">You have uploaded the presentation location already</div>
      </div>
          </v-container>
        </v-list-item-content>
        
</v-content>
</template>

<script>
import DatePicker from "./DatePicker";
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      teamID:"",
      location:"",
      upload:false,
    }
  },
  components: {
      // LecturerCourseStepper,
      DatePicker,
    },
    created () {
      this.getTeamIndex()
      this.getPreLocation(this.teamID)
    },
    methods:{
      getPreLocation(groupID){
      this.$http.get('/api/getMarking', {
          params: {name: groupID}
        }).then( (res) => {
          console.log('res', res);
          console.log(res.data[0].PreLocation)
          if(res.data[0].PreLocation!=null){
            this.upload = true
          }
        })
    },
      getTeamIndex(){
        this.teamID = this.$store.getters.getStudentGroup
      },
    setLocation() {
      this.$http.post('/api/setLocation', {
        location: this.location, name: this.teamID
      }).then( (res) => {
        console.log('res', res);
        this.setMarkingLocation()
        this.upload=true
      })
    },
    setMarkingLocation() {
      this.$http.post('/api/setMarkingLocation', {
        location: this.location, name: this.teamID
      }).then( (res) => {
        console.log('res', res);
      })
    },
    },
    computed: {
      ...mapGetters(["getStudentGroup"])
    },
}
</script>