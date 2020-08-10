<template>
  <LoginContainer />
</template>
<script>
const LoginContainer = () => import("@/components/containers/login");

export default {
  layout: 'login',
  components: {
    LoginContainer
  }
};
</script>