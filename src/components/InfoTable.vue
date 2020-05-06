<template>
<v-content>
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
         <ViewFeedback :teamID="item.Name"/>
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
          }).then( (res) => {
            this.groupInfo = res.data
          })
        },
        a(){
          console.log("ok")
        }
    },
    
  }
</script>