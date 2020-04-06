<template>
<v-content>
  <v-simple-table fixed-header height="600px">
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
  </v-simple-table>
</v-content>
</template>

<script>
  export default {
    data () {
      return {
        groupInfo:[],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
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