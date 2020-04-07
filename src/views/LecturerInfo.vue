<template>
    <v-content>
        <div v-if="upload==true">
              <InfoTable/>
      </div>
      <div v-else>
        <div class="headline">Please Upload the File at the Home Page</div>
      </div>
    </v-content>
</template>

<script>
import InfoTable from "@/components/InfoTable";
export default {
    data () {
    return {
      upload:"false",
    }
  },
  created(){
    // this.getCourseInfo()
    this.getEventsInfo()
  },
  components: {
      InfoTable
  },
  methods:{
  getEventsInfo(){
           this.$http.get('/api/getGroupInfo', {
          }).then( (res) => {
            console.log('res', res);
            if(res.data.length!=0){
              this.upload = true
            }
          })
        },
  },
}
</script>

<style > 