<template>
  <CheckoutContainer />
</template>
<script>
const CheckoutContainer = () => import("@/components/containers/checkout");

export default {
  components: {
    CheckoutContainer
  }
};
</script>