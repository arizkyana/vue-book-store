<template>
  <AccountContainer />
</template>
<script>
const AccountContainer = () => import("@/components/containers/account");

export default {
  components: {
    AccountContainer
  }
};
</script>