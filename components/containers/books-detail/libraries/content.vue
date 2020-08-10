<template>
  <div class="container-detail">
    <section>
      <v-breadcrumbs class="pa-0 mb-3" :items="breadcrumbs"></v-breadcrumbs>
    </section>
    <section>
      <v-row>
        <v-col cols="12" xs="12" lg="3">
          <v-layout justify-space-between align-start>
            <v-flex>
              <v-img :lazy-src="detail.img" max-height="400" max-width="300"></v-img>
              <v-sheet color="#F1F1F1" class="pa-2 rounded mt-3">
                <v-layout justify-space-between align-center>
                  <v-flex>
                    <div class="text-subtitle-2">Rating</div>
                    <div class="text-subtitle-2">{{ detail.rating }}</div>
                  </v-flex>
                  <v-flex>
                    <div class="text-subtitle-2">Pages</div>
                    <div class="text-subtitle-2">{{ detail.pages }}</div>
                  </v-flex>
                  <v-flex>
                    <div class="text-subtitle-2">Cover</div>
                    <div class="text-subtitle-2">{{ detail.cover }}</div>
                  </v-flex>
                  <v-flex>
                    <div class="text-subtitle-2">Language</div>
                    <div class="text-subtitle-2">{{ detail.language }}</div>
                  </v-flex>
                </v-layout>
              </v-sheet>
              <div class="mt-3">
                <div class="mb-3">
                  <div class="text-subtitle-2">Publisher</div>
                  <div class="text-subtitle-2">{{ detail.publisher }}</div>
                </div>
                <div>
                  <div class="text-subtitle-2">Publish date</div>
                  <div class="text-subtitle-2">{{ $utils.dateFormat(detail.publishDate) }}</div>
                </div>
              </div>
            </v-flex>
          </v-layout>
        </v-col>
        <v-col cols="12" xs="12" lg="9">
          <v-row no-gutters>
            <v-col cols="12" xs="12" lg="6">
              <v-layout column justify-space-between align-start>
                <v-flex>
                  <v-chip class="pa-4 bold white--text" color="#005086">{{ detail.category }}</v-chip>
                </v-flex>
                <v-flex class="mt-3">
                  <div class="display-1">{{ detail.title }}</div>
                  <div class="text-body-1">{{ detail.author }}</div>
                </v-flex>
                <v-flex class="mt-4">
                  <div class="text-subtitle-1">Description</div>
                  <div class="text-body-2">
                    <p>{{ detail.description }}</p>
                  </div>
                </v-flex>
              </v-layout>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </section>

    <section class="cart-container white rounded">
      <v-container>
        <v-layout justify-space-between align-center>
          <v-flex shrink>
            <span class="text-body-1">About the author</span>
          </v-flex>
          <v-flex grow class="text-right">
            <span class="text-body-1 mr-3">{{ $utils.currency(detail.price) }}</span>
            <v-btn color="#F1F1F1" outlined depressed>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn color="#005086" outlined depressed>Buy now</v-btn>
            <v-btn color="#005086" depressed class="white--text" @click.prevent="handleAddToCart">
              <v-progress-circular
                v-show="loadingCart"
                :loading="loadingCart"
                :indeterminate="true"
                :size="14"
              />
              <span :class="loadingCart ? 'ml-4' : ''">Add to cart</span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>
<script>
export default {
  data: () => ({
    loadingCart: false,
    loading: false,
    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Books title",
        disabled: true,
        href: "#"
      }
    ],
    detail: {}
  }),

  async mounted() {
    const {id} = this.$route.query;
    this.loading = true;
    try {
      const data = await this.$axios({
        url: `/browse/book/${id}/detail`,
        method: 'get',
        auth: {
          username: 'client-web-id',
          password: 'client-web-secret'
        }
      })

      this.detail = data.data;

    } catch (error) {
      
    } finally {
      this.loading = false;
    }
  },

  methods: {
    async handleAddToCart() {
      this.loadingCart = true;

      try {
        const data = await this.$axios({
          url: '/checkout/cart',
          method: 'post',
          data: {
            book: this.$route.query.id
          }
        })
        this.$root.$emit('add-cart');
      } catch (error) {
        console.log(error);
      } finally {
        this.loadingCart = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container-detail {
  padding-bottom: 6rem;
}
.cart-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  // padding: 0.8rem 0;
  box-shadow: 0 -2px #f1f1f1;
  width: 100%;
  // margin: 0 auto;
}
</style>