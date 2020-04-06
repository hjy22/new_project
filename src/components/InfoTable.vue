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
  </v-data-table>
</v-content>
</template>

<script>
  export default {
    data () {
      return {
        groupInfo:[],
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
        ],
      }
    },
    created(){
      this.getGroupInfo()
    },
    methods:{
      getGroupInfo(){
           this.$http.get('/api/getGroupInfo', {
            // params: {}
          }).then( (res) => {
            console.log('res', res);
            // console.log(res.data)
            this.groupInfo = res.data
          })
        },
    }
  }
</script>