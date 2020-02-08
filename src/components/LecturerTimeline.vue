<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(item, i) in colors"
      :key="i"
      :color="item.color"
      icon="mdi-star"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="title d-none d-sm-flex">Lorem Ipsum Dolor</v-card-title>
        <v-card-title class="subtitle-1 d-flex d-sm-none">Lorem Ipsum Dolor</v-card-title>
        <v-card-text class="white text--primary">
          <div>Deadline: 4564646</div>
          <p>There are 23 groups submitting the feedback sheets</p>
          <v-btn
            :color="item.color"
            class="mx-0"
            outlined
          >
            VIEW
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  export default {
    data: () => ({
      colors: [
        {
          color: 'red lighten-2',
        },
        {
          color: 'purple darken-1',
        },
        // {
        //   color: 'green lighten-1',
        //   icon: 'mdi-airballoon',
        // },
        // {
        //   color: 'indigo',
        //   icon: 'mdi-buffer',
        // },
      ],
    }),
  }
</script>