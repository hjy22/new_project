<template>
<v-content>
    <IdentityChosen/>
  </v-content>
  
</template>

<script>
import IdentityChosen from "@/components/IdentityChosen";

export default {
  name: 'choose',
  data(){
    return{
    }
  },
  components:{
    IdentityChosen
  },
}
</script>