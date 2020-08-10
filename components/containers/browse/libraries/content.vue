<template>
  <section>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12" xs="12" lg="4">
        <div class="text-center pb-3">
          <span class="display-2">Bookshelf</span>
        </div>
        <v-form ref="form" @submit.prevent="handleSearch">
          <v-row>
            <v-col cols="12" xs="12">
              <v-text-field
                prepend-icon="mdi-magnify"
                outlined
                label="Find your inspirational books"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <ListBooks />
  </section>
</template> 
<script>
const ListCategory = () => import("./list-category");
const ListBooks = () => import("./list-books");

export default {
  components: {
    ListCategory,
    ListBooks
  },
  methods: {
    async handleSearch() {}
  }
};
</script>