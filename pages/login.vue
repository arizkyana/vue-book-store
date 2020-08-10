<template>
  <LoginContainer />
</template>
<script>
const LoginContainer = () => import("@/components/containers/login");

export default {
  layout: 'login-layout',
  components: {
    LoginContainer
  }
};
</script>