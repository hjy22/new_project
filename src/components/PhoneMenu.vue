<template>
<v-content>
        <LecturerPhoneMenu/>

        <!-- <StudentPhoneMenu/> -->
    </v-content>
</template>

<script>

import LecturerPhoneMenu from "@/components/LecturerPhoneMenu";
import StudentPhoneMenu from "@/components/StudentPhoneMenu";

export default {
    components:{
        LecturerPhoneMenu,
        StudentPhoneMenu
    },
}
</script>