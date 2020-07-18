<template>
  <v-app>
    <div class="contact">
      <v-btn href="https://wa.me/+34615729023" text color="green">
        <v-icon large>mdi-whatsapp</v-icon>
      </v-btn>
      <v-btn href="mailto:dima.barbershop1@gmail.com" text color="red">
        <v-icon large>mdi-gmail</v-icon>
      </v-btn>
    </div>
    <TopNav/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-snackbar
      v-model="snackbar.show"
      :multi-line="true"
      :right="true"
      :top="true"
      :timeout="6000"
      :color="snackbar.variant"
    >
      {{ snackbar.message }}
      <v-btn
        dark
        text
        @click="updateSnackbar({show: false})"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import TopNav from './components/TopNav.vue'

  export default {
    name: 'app',
    metaInfo: {
      title: "Dima's BarberShop Mallorca!",
      titleTemplate: "%s | Dima's BarberShop Mallorca!",
      htmlAttrs: {
        lang: 'en',
        amp: true
      },
      meta: [{
        vmid: 'Hair And Beard Mallorca',
        name: "Dima's.barberShop",
        content: 'Barber Shop Mallorca',
      }]

    },
    components: {
      TopNav
    },
    computed: {
      ...mapState(['snackbar'])
    },
    methods: {
      ...mapMutations(['updateSnackbar'])
    }
  }
</script>

<style scoped>
  .contact {
    position: fixed;
    z-index: 99;
    top: 70px;
    right: 30px;
  }
</style>
