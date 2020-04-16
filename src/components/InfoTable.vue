<template>
<v-content>
  <!-- <v-simple-table fixed-header sortable height="600px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">PreTime</th>
          <th class="text-left">PreLocation</th>
          <th class="text-left">AssessingGroup</th>
          <th class="text-left">MarkingTime</th>
          <th class="text-left">MarkingLocation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in groupInfo" :key="item.name">
          <td>{{ item.Name }}</td>
          <td>{{ item.PreTime }}</td>
          <td>{{ item.PreLocation }}</td>
          <td>{{ item.AssessingGroup }}</td>
          <td>{{ item.MarkingTime }}</td>
          <td>{{ item.MarkingLocation }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table> -->
   <v-data-table
    :headers="headers"
    :items="groupInfo"
    disable-pagination
    hide-default-footer
    item-key="name"
    class="elevation-1"
  >
   <template v-slot:item.Feedback="{ item }">
     <div v-if="item.Feedback=='true'">
       <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">VIEW</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Team{{item.Name}} Feedback</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-divider></v-divider>
        <ViewFeedback :teamID="item.Name"/>
        </v-card>
    </v-dialog>
        <!-- <v-btn @click="test" v-model="item.Feedback" >VIEW </v-btn> -->
        </div>
      </template>
  </v-data-table>
</v-content>
</template>

<script>
import ViewFeedback from "@/components/ViewFeedback";
  export default {
    data () {
      return {
        dialog:"",
        groupInfo:[],
        feedbackInfo:[],
        feedback:"",
        headers: [
          {
            text: 'Name',
            align: 'start',
            value: 'Name',
          },
          { text: 'PreTime', value: 'PreTime' },
          { text: 'PreLocation', value: 'PreLocation' },
          { text: 'AssessingGroup', value: 'AssessingGroup' },
          { text: 'MarkingTime', value: 'MarkingTime' },
          { text: 'MarkingLocation', value: 'MarkingLocation' },
          { text: 'Feedback', value: 'Feedback' },
        ],
      }
    },
    components:{
      ViewFeedback
    },
    created(){
      this.getGroupInfo()
    },
    methods:{
      getGroupInfo(){
           this.$http.get('/api/getGroupInfo', {
            // params: {}
          }).then( (res) => {
            // console.log('res', res);
            this.groupInfo = res.data
          })
        },
        test(a){
      // console.log("a"+a)
    }
    },
    
  }
</script>