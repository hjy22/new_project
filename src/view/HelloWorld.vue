<template>
  <v-content>
    <Menu/>
    <v-container>
      <InfoCard/>
      <AssignCard/>
    </v-container>
  </v-content>
</template>

<script>
import Menu from "../components/Menu";
import InfoCard from "../components/InfoCard";
import AssignCard from "../components/AssignCard";

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    Menu,
    InfoCard,
    AssignCard
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
