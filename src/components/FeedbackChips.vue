<template>
  <v-sheet
    class="mx-auto"
  >
    <v-slide-group multiple show-arrows>
      <v-slide-item
        v-for="(course, id) in getFeedbackPageCourseList"
        :key="id"
        v-slot:default="{active}"
      >
        <v-btn
          class="mx-2"
          :input-value="active"
          active-class="purple white--text"
          depressed
          rounded
          @click="returnCom(course.code)"
        >
          {{course.code}}
        </v-btn>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
  export default {
    data: () => ({
      model: null,
    }),
    methods:{
  returnCom(id) {
    const returnEle = document.querySelector("#"+id);
    if (!!returnEle) {
      returnEle.scrollIntoView(true);
    }
  }
  },
  computed: {
    ...mapGetters([
      "getFeedbackPageCourseList",
    ])
  }
  }
</script>