<template>
<v-content>
  <StudentMenu/>
<!-- <h1>aaaaaaaa</h1> -->
<Footer/>
</v-content>
</template>

<script>
import StudentMenu from "../components/StudentMenu";
import Footer from "../components/Footer";

export default {
  name: 'StudentHomePage',
  components: {
    StudentMenu,
    Footer,
  },
}
</script>

<style > 