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
      <v-card-title class="brown darken-1">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>
        <span v-for="icon in icons"
              :key="icon">
        <v-btn
          class="mx-4"
          dark
          icon
          :href="icon.link"
        >
          <v-icon size="24px" large>{{ icon.icon }}</v-icon>
        </v-btn>
        </span>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center brown darken-3">
        {{ new Date().getFullYear() }} — <strong>Dima's BarberShop</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {'icon' : 'mdi-facebook', 'link': 'https://m.facebook.com/pages/category/Hair-Salon/dimabarbershop-113036276847975/'},
        {'icon' : 'mdi-instagram', 'link' : 'https://www.instagram.com/dimas.barbershop/'}
      ],
    }),
  }
</script>
