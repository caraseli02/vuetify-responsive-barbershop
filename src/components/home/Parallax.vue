<template>
  <v-content>
    <section id="hero">
      <v-row no-gutters>
        <v-img
          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          src="@/assets/images/barberLocal.jpg"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col
                  class="white--text text-center"
                  cols="12"
                  tag="h1"
                >
                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      WELCOME TO
                    </span>

                  <br>

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black"
                  >
                      DIMA'S
                    </span>
                  <br>

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    class="font-weight-light"
                  >
                      BARBERSHOP
                    </span>

                </v-col>

                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  @click="$vuetify.goTo('#features')"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <section id="features"
             class="grey lighten-3"
    >
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">BARBERSHOP FEATURES</h2>

        <v-responsive
          class="mx-auto mb-12"
          width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col
            v-for="({ icon, title, text }, i) in features"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              class="py-12 px-4"
              color="grey lighten-5"
              flat
            >
              <v-theme-provider dark>
                <div>
                  <v-avatar
                    color="primary"
                    size="88"
                  >
                    <v-icon
                      large
                      v-text="icon"
                    ></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title
                class="justify-center font-weight-black text-uppercase"
                v-text="title"
              ></v-card-title>

              <v-card-text
                class="subtitle-1"
                v-text="text"
              >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>

    <section id="stats">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
        src="@/assets/images/barberTools.jpg"
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col
              v-for="[value, title] of stats"
              :key="title"
              cols="12"
              md="2"
              offset-md="1"
              class="borders mb-md-0 mb-2"
            >
              <div class="text-center">
                <div
                  class="display-3 font-weight-black mb-4"
                  v-text="value"
                ></div>

                <div
                  class="title font-weight-regular text-uppercase"
                  v-text="title"
                ></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>


  </v-content>
</template>

<script>
  export default {
    name: "Parallax",
    data() {
      return {
        features: [
          {
            icon: 'mdi-account-group-outline',
            title: 'Great Customer Service',
            text: 'There is very little difference between barber shops. Basically, all shops provide haircuts, barber shop shaves, trims, and other grooming services.',
          },
          {
            icon: 'mdi-hand-okay',
            title: 'Great Haircuts',
            text: 'For any barber shop to be successful, the shop must provide great haircuts. This sounds almost to simplistic to be a primary measure of success. ',
          },
          {
            icon: 'mdi-island',
            title: 'Community Atmosphere',
            text: 'A barber shop is more than a place to go to get a haircut. People go to a barber for many other reasons. Therefore, a barber establishment must provide a community atmosphere.'
          },
        ],
        stats: [
          ['10 €', 'Regular Haircut'],
          ['8 €', 'Children’s Haircut'],
          ['15 €', 'Beard Trim with Razor'],
          ['25 €', 'Crew Cut + Hot Towel'],
        ],
      }
    }
  }
</script>

<style scoped>
  .borders {
    border: solid 2px white;
    background-color: rgba(0,0,0,0.5);
  }
</style>
