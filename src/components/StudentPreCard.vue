<template>
<v-content>
        <v-list-item-content>
          <v-container>
          <DatePicker :identity="'student'" :header="'Presentation Time'" :groupID="teamID" :name="'Group'+teamID"/>
          <div v-if="upload==false">
            <v-row justify="center">
                <v-col sm="6" md="6">
                <v-text-field
                :rules="locationRules"
                    label="Place"
                    v-model="location"
                ></v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center">
              <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          :disabled="!location"
        >
          Submit
        </v-btn>
      </template>
            <!-- <v-btn
          @click="setLocation"
        >
          Submit
        </v-btn> -->
        <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Comfirmation
        </v-card-title>

        <v-card-text>
            You set {{location}} as your presentation location.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="setLocation"
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
      dialog: false,
      locationRules: [
        v => !!v || 'Location is required',
      ],
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