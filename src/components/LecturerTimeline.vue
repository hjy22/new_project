<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(item, i) in getLecturerCoursePageCourseList"
      :key="i"
      :color="item.color"
      icon="mdi-star"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="title d-none d-sm-flex">{{item.code}}</v-card-title>
        <v-card-title class="subtitle-1 d-flex d-sm-none">{{item.code}}</v-card-title>
        <v-card-text class="white text--primary">
          <br/>
          <div class="subtitle-1">{{item.ddl}}
            <p>{{item.info}}</p>
          </div>
          <v-btn
            :color="item.color"
            class="mx-0"
            outlined
            @click="returnCom(item.code)"
          >
            VIEW
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
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
    'getLecturerCoursePageCourseList'
    ])
},
}
</script>