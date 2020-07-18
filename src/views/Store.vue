<template>
  <v-container class="mt-12">
    <v-row>
      <v-col sm="3" offset-lg="1">
        <Sidebar />
      </v-col>
      <v-col sm="9" lg="7">
        <ProductDisplay />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Sidebar from '@/components/store/Sidebar.vue'
import ProductDisplay from '@/components/store/ProductDisplay.vue'

export default {
  metaInfo: {
    title: 'Store'
  },
  components: {
    Sidebar,
    ProductDisplay
  }
}
</script>
