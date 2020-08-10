<template>
  <v-badge :content="cartCount">
    <span>Cart</span>
  </v-badge>
</template>
<script>
export default {
  data: () => ({
    cartCount: 10
  })
}
</script>