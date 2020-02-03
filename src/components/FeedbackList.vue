<template>
<div id="app">
  <v-app id="inspire">
    <v-card>
      <v-card-title>
        COMP107 Feedback
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-icon left>mdi-magnify</v-icon>
      </v-card-title>
      <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="GroupID"
      show-expand
      hide-default-footer
      class="elevation-1"
    >
    <!-- <template v-slot:items="props">
      <td>{{ props.item.GroupID }}</td>
      <td class="text-xs-right">{{ props.item.Leader }}</td>
      <td class="text-xs-right">{{ props.item.Members }}</td>
      <td class="text-xs-right">{{ props.item.Scores }}</td>
      <td class="text-xs-right">{{ props.item.FeedbackID }}</td>
    </template> -->
      <!-- <template v-slot:expanded-item="{ headers }">
        <td :colspan="headers.length">
            <v-btn a href="index.html" text>URL</v-btn>
        </td>
      </template> -->
      <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <!-- <pre>{{item.expanded}}</pre> -->
         <v-btn a href="index.html" text>{{item.expanded}}</v-btn>
      </td>
    </template>
    </v-data-table>
    </v-card>
  </v-app>
</div>
</template>

<script>
export default {
    data () {
        return {
        // props: ['expanded', 'search', 'headers', 'desserts'],
        expanded: [],
        search: '',
        singleExpand: true,
      headers: [
        {
          text: 'Group ID',
          align: 'left',
          sortable: true,
          value: 'GroupID',
        },
        { text: 'Leader', value: 'Leader' },
        { text: 'Members', value: 'Members' },
        { text: 'Scores', value: 'Scores' },
        { text: 'Feedback ID', value: 'FeedbackID' },
        { text: '', value: 'data-table-expand' },
      ],
      desserts: [
        {
          GroupID: 'Frozen Yogurt',
          Leader: 159,
          Members: 6.0,
          Scores: 24,
          FeedbackID: 4.0,
          expanded:"aaa"
        },
        {
          GroupID: 'Ice cream sandwich',
          Leader: 237,
          Members: 9.0,
          Scores: 37,
          FeedbackID: 4.3,
          expanded:"ccc"
        },
        {
          GroupID: 'Eclair',
          Leader: 262,
          Members: 16.0,
          Scores: 23,
          FeedbackID: 6.0,
          expanded:"kkk"
        },
        {
          GroupID: 'Cupcake',
          Leader: 305,
          Members: 3.7,
          Scores: 67,
          FeedbackID: 4.3,
          expanded:"bbb"
        },
        {
          GroupID: 'Gingerbread',
          Leader: 356,
          Members: 16.0,
          Scores: 49,
          FeedbackID: 3.9,
          expanded:"ccc"
        },
        {
          GroupID: 'Jelly bean',
          Leader: 375,
          Members: 0.0,
          Scores: 94,
          FeedbackID: 0.0,
          expanded:"ddd"
        },
      ],
        }
    }
}
</script>