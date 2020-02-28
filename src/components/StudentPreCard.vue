<template>
<v-content>
 
  <v-container>
    <!-- <v-card max-height="344">
      <v-card-text> -->
        <!-- <v-list-item> -->
        <v-list-item-content>
          <v-container>
          <DatePicker/>
            <v-row justify="center">
                <v-col sm="6" md="6">
                <v-text-field
                    label="Place"
                ></v-text-field>
                </v-col>
            </v-row>
            <!-- <v-row justify="center">
                <v-btn color="primary">SUBMIT</v-btn>
            </v-row> -->
          </v-container>
          
        </v-list-item-content>
        <!-- </v-list-item> -->
      <!-- </v-card-text>
    </v-card> -->
  </v-container>

</v-content>
</template>

<script>
import axios from 'axios'
import DatePicker from "./DatePicker";

export default {
  data () {
    return {
    }
  },
  components: {
      // LecturerCourseStepper,
      DatePicker,
    },
}
</script>