<template>
<v-container>
    <v-flex s12>
        <v-card 
            color="gray-2" 
            max-height="300"
            max-width="450"
            class="mx-auto"
        >
        <v-flex xs7>
            <v-card-title primary-title>
                <div v-if="preTime!=null">
                <div class="headline">Presentation Time: </div>
                <div class="subtitle">{{preTime}}</div>
                </div>
                <div v-else>
                    <div class="headline">No presentation time</div>
                </div>
                <div v-if="markingTime!=null">
                    <div class="headline">Marking Time: </div>
                    <div class="subtitle">{{markingTime}}</div>
                </div>
                <div v-else>
                    <div class="headline">No marking time</div>
                </div>
            </v-card-title>
        </v-flex>
        </v-card>
            </v-flex>
    </v-container>
</template>

<script>

export default {
    props: ['teamID'],
    data () {
      return {
          preTime:"",
          markingTime:"",
      }
    },
    created(){
        this.getTime()
        
    },
    methods:{
        getTime() {
      this.$http.get('/api/getMarking', {
        params: {name: this.teamID}
      }).then( (res) => {
        this.preTime = res.data[0].PreTime
        this.markingTime = res.data[0].MarkingTime
      })
    },
    }
}
</script>
