<template>
  <BrowseContainer />
</template>
<script>
const BrowseContainer = () => import("@/components/containers/browse");

export default {
  components: {
    BrowseContainer
  }
};
</script>