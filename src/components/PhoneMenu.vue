<template>
<v-content>
    <v-flex v-if="this.$store.getters.getCurrentIdentity === 'Lecturer'">
        <LecturerPhoneMenu/>
    </v-flex>

    <v-flex  v-else-if="this.$store.getters.getCurrentIdentity === 'Student'">
        <StudentPhoneMenu/>
        </v-flex>
    </v-content>
</template>

<script>
import { mapGetters } from "vuex";
import LecturerPhoneMenu from "@/components/LecturerPhoneMenu";
import StudentPhoneMenu from "@/components/StudentPhoneMenu";

export default {
    components:{
        LecturerPhoneMenu,
        StudentPhoneMenu
    },
    computed: {
    ...mapGetters(["getCurrentIdentity"])
  }
}
</script>