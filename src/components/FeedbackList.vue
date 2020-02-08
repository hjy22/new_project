<template>
<div id="app">
  <v-app id="inspire">
    <v-container v-for="(courses, id) in getLecturerFeedbackPageCourseList" :key="id">
    <v-card :id="courses.code">
      <v-card-title>
        {{ courses.code }} Feedback
        <v-spacer></v-spacer>
        <v-text-field
          v-model="courses.search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-icon left>mdi-magnify</v-icon>
      </v-card-title>
      <v-data-table
      :headers="courses.headers"
      :items="courses.groupInfo"
      :search="courses.search"
      :single-expand="true"
      :expanded.sync="courses.expanded"
      item-key="GroupID"
      show-expand
      hide-default-footer
      class="elevation-1"
    >
      <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
         <v-btn a href="index.html" text>{{item.expanded}}</v-btn>
      </td>
    </template>
    </v-data-table>
    </v-card>
    </v-container>
  </v-app>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data () {
      return {
      }
  },
  computed: {
    ...mapGetters(['getLecturerFeedbackPageCourseList'])
  },
}
</script>