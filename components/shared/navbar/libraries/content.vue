<template>
  <nav>
    <v-container>
      <v-layout justify-space-between align-center>
        <v-flex>
          <v-layout justify-end align-center>
            <v-flex shrink class="mr-3 hover">
              <nuxt-link :to="routing.browse" class="nav-item">Browse</nuxt-link>
            </v-flex>

            <v-flex shrink class="mr-3">
              <nuxt-link :to="routing.account" class="nav-item">Account</nuxt-link>
            </v-flex>
            <v-flex shrink class="hover">
              <nuxt-link :to="routing.books" class="nav-item">
                <v-badge :content="cartCount">
                  <span>Cart</span>
                </v-badge>
              </nuxt-link>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </nav>
</template>
<script>
import routing from "@/constant/routing";

export default {
  name: "shared-navbar",

  data: () => ({
    routing,
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
        const data = await this.$axios({
          url: '/checkout/cart',
          method: 'get'
        })

        this.cartCount = data.data.length;

      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
nav {
  padding: 1rem;
}
.nav-item {
  color: #000000;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #005086;
  }
}
</style>