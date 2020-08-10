<template>
  <v-app>
    <Navbar />
    <section class="app-container">
      <v-container>
        <nuxt />
      </v-container>
    </section>
    <Footer />
  </v-app>
</template>
<script>
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style lang="scss">
.app-container {
  padding-top: 3rem;
}
</style>
