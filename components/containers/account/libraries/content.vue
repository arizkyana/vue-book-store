<template>
  <div>{{ $auth.user }}</div>
</template> 
<script>
export default {
  mounted() {
    console.log('auth :: ', this.$auth)
  }
};
</script>