<template>
  <v-container>
    <div v-if="upload==true">
      <Calendar/>
      </div>
      <div v-else>
        <div class="headline">Please Upload the File at the Home Page</div>
      </div>
    </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Calendar from "@/components/Calendar";

export default {
  data () {
    return {
      upload:"false",
    }
  },
  components: {
    Calendar,
  },
  created(){
    this.getEventsInfo()
  },
  methods:{
  getEventsInfo(){
           this.$http.get('/api/getGroupInfo', {
          }).then( (res) => {
            // console.log('res', res);
            if(res.data.length!=0){
              this.upload = true
            }
          })
        },
  },
}
</script>

<style > 