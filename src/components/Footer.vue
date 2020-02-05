<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="(item,index) in icons"
          :key="icons[index].icon"
          class="mx-4"
          dark
          icon
          @click="OpenURL(icons[index].link)"
        >
          <v-icon size="24px">{{ icons[index].icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {icon:'mdi-facebook',link:'https://www.facebook.com/', tip:'twitter'},
        {icon:'mdi-twitter',link:'https://twitter.com/', tip:'twitter'},
        {icon:'mdi-google-plus',link:'https://aboutme.google.com/', tip:'twitter'},
        {icon:'mdi-linkedin',link:'https://www.linkedin.com/', tip:'twitter'},
        {icon:'mdi-instagram',link:'https://www.instagram.com/', tip:'twitter'},
      ],
    }),
    methods:{
      OpenURL(url) {
        window.open(url, '_blank')
      }
    }
  }
</script>