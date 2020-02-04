<template>
  <v-footer
    padless
    dark
    height="auto"
    class="pa-0"
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="(icon,index) in icons" 
          :key="icons[index].icon"
          class="mx-4 white--text"
          icon
          @click="OpenURL(icons[index].link)"
        >
          <v-icon size="24px">{{ icons[index].icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>JY</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {icon:'mdi-facebook',link:'https://twitter.com/', tip:'twitter'},
        {icon:'mdi-twitter',link:'https://twitter.com/', tip:'twitter'},
        {icon:'mdi-linkedin',link:'https://twitter.com/', tip:'twitter'},
        {icon:'mdi-instagram',link:'https://twitter.com/', tip:'twitter'},
      ],
    }),
    methods:{
        OpenURL(url) {
            // window.location.href = url
            window.open(url, '_blank')
        }
    }
  }
</script>