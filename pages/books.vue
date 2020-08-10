<template>
  <BooksContainer />
</template>
<script>
const BooksContainer = () => import("@/components/containers/books");

export default {
  components: {
    BooksContainer
  }
};
</script>