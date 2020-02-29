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
                <v-form ref="form2">
                <v-text-field
                    label="Name"
                ></v-text-field>
                <v-text-field
                    label="Email"
                ></v-text-field>
                <v-text-field 
                    v-model="teamNum"
                    label="ID"
                    :rules="teamNumRules"
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
import Vue from 'vue'
  export default {
    data () {
      return {
        teamNum:null,
        tabs: null,
        teamNumRules: [
        v => !!v || 'Team number is required',
        v => (v && v <= 9 && v > 0) || 'Team number does not valid',
        //要把team10输入时，marker的组改成1
      ],
      }
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
      if (this.$refs.form2.validate()) {
        this.jump('StudentHome','Student','HOME',this.teamNum)
      }
    }
    // pass(){
    //   this.$router.replace({name:'StudentHome',query:{
    //     index: this.teamNum
    //   }
    //   })
    // }
    },
  }
</script>