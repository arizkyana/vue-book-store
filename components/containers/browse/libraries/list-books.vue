<template>
  <v-layout column justify-space-between>
    <v-flex>
      <div class="text-body-1">All books</div>
    </v-flex>
    <v-flex>
      <v-row>
        <v-col v-for="book in books" :key="book._id" cols="12" lg="3" sm="4" xs="12">
          <v-card outlined hover nuxt :to="$useRouting.booksDetail(book._id)">
            <v-layout justify-space-between align-start>
              <v-flex grow>
                <v-card-title style="font-size: .8rem; line-height: 1">{{ book.title }}</v-card-title>
                <v-card-subtitle>{{ book.author }}</v-card-subtitle>
                <v-card-text>{{ book.category }}</v-card-text>
              </v-flex>
              <v-flex shrink>
                <v-avatar class="ma-lg-3" tile>
                  <v-img :src="book.img"></v-img>
                </v-avatar>
              </v-flex>
            </v-layout>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>
<script>
import routing from "@/constant/routing";

export default {
  data: () => ({
    routing,
    books:[],
    loading: false
  }),

  async mounted() {
    this.loading = true;
    try {
      const data = await this.$axios({
        url: '/browse/book',
        method: 'get',
        auth: {
          username: 'client-web-id',
          password: 'client-web-secret'
        }
      })
      this.books = data.data;
    } catch (error) {
      console.log('error :: ', error);
    } finally {
      this.loading = false;
    }
  }
};
</script>