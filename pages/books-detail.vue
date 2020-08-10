<template>
  <BooksDetailContainer />
</template>

<script>
const BooksDetailContainer = () =>
  import("@/components/containers/books-detail");
export default {
  components: {
    BooksDetailContainer
  }
};
</script>