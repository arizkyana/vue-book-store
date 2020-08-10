<template>
  <nav>
    <v-container>
      <v-layout justify-space-between align-center>
        <v-flex>
          <v-layout justify-end align-center>
            <v-flex shrink class="mr-3 hover">
              <nuxt-link :to="$useRouting.browse" class="nav-item">Browse</nuxt-link>
            </v-flex>

            <v-flex shrink class="mr-3">
              <nuxt-link :to="$useRouting.account" class="nav-item">Account</nuxt-link>
            </v-flex>
            <v-flex shrink class="hover">
              <nuxt-link :to="$useRouting.checkout" class="nav-item">
                <Cart />
              </nuxt-link>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </nav>
</template>
<script>


const Cart = () => import('./cart');

export default {
  name: "shared-navbar",

  components: {
    Cart
  },

  data: () => ({
    cartCount: 0
  }),

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