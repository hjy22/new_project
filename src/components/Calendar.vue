<template>
  <v-row>
    <v-col>
      <v-toolbar-title>{{ year }} {{this.getName}}</v-toolbar-title>
      <v-sheet height="500">
        <v-calendar
          :events="events"
          color="primary"
          type="month"
        ></v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      year:new Date().getFullYear(),
      // month:"0",
      month: this.getName+"aa",
      // today: '2019-01-08',
      // monthFormat: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      
      events: [
        {
          name: 'Weekly Meeting',
          start: '2020-02-07 09:00',
          end: '2020-02-07 10:00',
        },
        {
          name: 'Thomas\' Birthday',
          start: '2020-02-10',
        },
        {
          name: 'Mash Potatoes',
          start: '2020-02-09 12:30',
          end: '2020-02-09 15:30',
        },
      ],
    }),
    computed:{
      getName(){
        var monthFormat = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        const month = new Date().getMonth()
        // const name = monthFormat.slice(month,month+1)
        const name = monthFormat[month]

        return name
      }
    }
    // mounted () {
    //   this.$refs.calendar.scrollToTime('08:00')
    // },
  }
</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  left: 4px;
  margin-right: 8px;
  position: relative;
}

.my-event.with-time {
  position: absolute;
  right: 4px;
  margin-right: 0px;
}
</style>