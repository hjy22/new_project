<template>
<v-content>
    <v-flex v-if="this.$store.getters.getCurrentView === 'Lecturer'">
        <LecturerMenu/>
    </v-flex>

    <v-flex  v-else-if="this.$store.getters.getCurrentView === 'Student'">
        <StudentMenu/>
    </v-flex>
    </v-content>
</template>

<script>
import { mapGetters } from "vuex";

import LecturerMenu from "@/components/LecturerMenu";
import StudentMenu from "@/components/StudentMenu";

export default {
    components:{
        LecturerMenu,
        StudentMenu
    },
    computed: {
    ...mapGetters(["getCurrentView"])
  }
}
</script>