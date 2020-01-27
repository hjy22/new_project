<template>
  <v-content>
    <Menu/>
    <v-container>
      <InfoCard/>
    </v-container>
  </v-content>
</template>

<script>
import Menu from "../components/Menu";
import InfoCard from "../components/InfoCard";

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    Menu,
    InfoCard
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
