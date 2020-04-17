<template>
    <v-content>
    <v-container>
      <div v-if="upload==true">
      <LecturerCourseCard/>
      </div>
      <div v-else>
        <div class="headline">Please Upload the File at the Home Page</div>
      </div>
    </v-container>
    </v-content>
</template>

<script>
import LecturerCourseCard from "@/components/LecturerCourseCard";

export default {
  data () {
    return {
      courseInfo: [],
      upload:"false",
    }
  },
  components: {
    LecturerCourseCard,
  },
  created(){
    this.getEventsInfo()
  },
    methods: {
    getEventsInfo(){
           this.$http.get('/api/getGroupInfo', {
          }).then( (res) => {
            // console.log('res', res);
            if(res.data.length!=0){
              this.upload = true
            }
          })
        },
    }
}
</script>

<style > 