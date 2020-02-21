<template>
    <div id="app">
  <v-app id="inspire">
    <v-row class="fill-height">
      <v-col>
        <v-sheet height="64">
          <v-toolbar flat color="white">
            <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
              Today
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom right>
              <template v-slot:activator="{ on }">
                <v-btn
                  outlined
                  color="grey darken-2"
                  v-on="on"
                >
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>mdi-menu-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title>4 days</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="events"
            :event-color="getEventColor"
            :now="today"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card
              color="grey lighten-4"
              min-width="350px"
              flat
            >
              <v-toolbar
                :color="selectedEvent.color"
                dark
              >
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  :color="selectedEvent.color"
                  @click="selectedOpen = false"
                >
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </v-app>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
    teamEvents:[],
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
    today:null,
    start: null,
    end: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events:[],
    // events: [
    //     {
    //       name: 'Group2 Presentation',
    //       start: '2020-02-07 09:00',
    //       end: '2020-02-07 10:00',
    //       details:'Leader',
    //       color:"primary"
    //     },
    //     {
    //       name: 'Group10 Presentation',
    //       start: '2020-02-10 09:00',
    //       end: '2020-02-10 10:00',
    //       details:'Leader',
    //       color:"primary"
    //     },
    //     {
    //       name: 'Group3 Presentation',
    //       start: '2020-02-09 12:30',
    //       end: '2020-02-09 15:30',
    //       details:'Leader',
    //       color:"primary"
    //     },
    //     {
    //       name: 'Deadline',
    //       start: '2020-02-28 17:00',
    //       end: '2020-02-28 17:00',
    //       details:'aaa',
    //       color:"red"
    //     },
    //   ],
    // colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    // names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  }),
  computed: {
    title () {
      const { start, end } = this
      if (!start || !end) {
        return ''
      }

      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? '' : endMonth

      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? '' : endYear

      const startDay = start.day + this.nth(start.day)
      const endDay = end.day + this.nth(end.day)

      switch (this.type) {
        case 'month':
          return `${startMonth} ${startYear}`
        case 'week':
        case '4day':
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
        case 'day':
          return `${startMonth} ${startDay} ${startYear}`
      }
      return ''
    },
    monthFormatter () {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC', month: 'long',
      })
    },
  },
  created () {
      // if(!this.isEmpty(this.teamEvents)){
        this.getEventsInfo() // 本地JSON
        // this.getEvents()
      // }
    },
  mounted () {
    this.$refs.calendar.checkChange()
  },
  methods: {
    getEventsInfo() {
      axios.get('../static/COMP107.json').then(response => {
          this.teamEvents = response.data;
          // console.log(this.teamEvents)
          this.setDDL()
          this.getEvents()
      }, response => {
          console.log("error");
      });
    },
    isEmpty(array){
        if(this.getJsonLength(array)==0){
          return true
        }else{
          return false
        }
      },
    getJsonLength(jsonData){
      var jsonLength = 0;
      for(var item in jsonData){
        jsonLength++;
      }
      return jsonLength;
    },
    getEvents() {
      var teamLength = this.getJsonLength(this.teamEvents);
      for (let i = 0; i < teamLength; i++) {
      var membersLength = this.getJsonLength(this.teamEvents[i].members);
      var membersDetail = this.teamEvents[i].leader
        for(let j =0; j < membersLength ; j++){
          membersDetail += ", "+this.teamEvents[i].members[j].name
        }
        // console.log(membersDetail)
        this.events.push({
          name: this.teamEvents[i].name+" Presentation",
          start: this.teamEvents[i].time,
          details: membersDetail,
          color: "primary",
        })
      }
    },
    setDDL(){
      this.events.push({
          name: "Deadline",
          start: "2020-02-28 17:00",
          color: "red",
        })
    },
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = this.today
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    formatDate (a, withTime) {
      return withTime
        ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
        : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
    },
  },
}
</script>