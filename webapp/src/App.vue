<template>
  <Navbar></Navbar>
  <div class="container-fluid min-vh-100">
    <router-view/>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from "@/components/NavbarComp.vue"
import Footer from "@/components/FooterComp.vue"

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #feffff;
  background-image: url('https://i.postimg.cc/s2m7F1CQ/wp9127669.jpg');
 
  background-size: cover;
  background-attachment: fixed !important;
}
</style>
