<template>
  <v-app>
    <v-container class="full-vh">
      <v-layout class="h-100" justify-center align-center>
        <v-flex>
          <nuxt />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.full-vh {
  height: 100vh;
}
.h-100 {
  height: 100%;
}
</style>