<template>
  <div>
    <v-app-bar fixed src="../assets/images/wood_header.jpg">
      <v-toolbar-title>
        <v-btn text to="/" color="white">
          BarberShop
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- mobile menu button -->

      <v-row class="hidden-sm-and-up" align="center" justify="center">

          <v-row justify="center">
            <v-btn
              color="orange lighten-2"
              class=""
              @click="overlay = !overlay"
            >
              Menu
            </v-btn>

            <v-overlay
              :absolute="absolute"
              :opacity="opacity"
              :value="overlay"
            >
              <v-btn to="/" text color="white">
                <v-icon>mdi-content-cut</v-icon>
                Home
              </v-btn>
              <v-btn to="store" text color="white">
                <v-icon>mdi-store</v-icon>
                Store
              </v-btn>
              <v-btn to="cart" text color="white">
                <v-icon>mdi-cart</v-icon>
                Cart
              </v-btn>
              <v-btn
                color="orange lighten-2"
                @click="overlay = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-overlay>
          </v-row>

      </v-row>
      <!-- desktop & tablet menu -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text color="white">
          <v-icon>mdi-content-cut</v-icon>
          Home
        </v-btn>
        <v-btn to="store" text color="white">
          <v-icon>mdi-store</v-icon>
          Store
        </v-btn>
        <v-btn to="cart" text color="white">
          <v-icon>mdi-cart</v-icon>
          Cart
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!--<v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        absolute: true,
        opacity: 1,
        overlay: false,
        drawer: false,
        items: [
          {title: 'Home', link: '/', icon: 'home'},
          {title: 'Store', link: 'store', icon: 'store'},
          {title: 'Cart', link: 'cart', icon: 'cart'}
        ]
      }
    }
  }
</script>
