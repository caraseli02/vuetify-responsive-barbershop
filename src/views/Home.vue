<template>
  <div>
    <Header />
    <Parallax/>
    <PopularProducts />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import PopularProducts from '@/components/home/PopularProducts.vue'
import Footer from '@/components/home/Footer.vue'
import Parallax from "../components/home/Parallax";

export default {
  metaInfo: {
    title: 'Servicios'
  },
  components: {
    Parallax,
    Header,
    PopularProducts,
    Footer
  }
}
</script>
