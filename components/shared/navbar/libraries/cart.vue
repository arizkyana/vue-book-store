<template>
  <v-badge :content="cartCount">
    <span>Cart</span>
  </v-badge>
</template>
<script>
export default {
  data: () => ({
    cartCount: 0
  }),
  created() {
    this.$root.$on('add-cart', () => {
      this.loadCart();
    })
  },

  async mounted() {
    this.loadCart();
  },

  methods: {
    async loadCart() {
      try {
        const data = await this.$useRepositoryCheckout.loadCart();

        this.cartCount = data.data.length;

      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>