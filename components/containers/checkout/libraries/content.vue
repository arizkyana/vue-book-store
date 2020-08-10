<template>
  <div>
    <section>
      <v-breadcrumbs class="pa-0 mb-3" :items="breadcrumbs"></v-breadcrumbs>
    </section>
    <section>
      <v-row>
        <v-col cols="12" lg="8">
          <div>Cart items</div>
          <ContentData :carts="carts" :loading="loading" />
        </v-col>
        <v-col cols="12" lg="4">
          <div>Summary</div>
          <div class="my-3">
            <div class="display-2">Total</div>
            <div class="display-1 mt-3">Rp. {{ $utils.currency(summary) }}</div>
          </div>
          <div class="mt-5">
            <v-btn block depressed color="primary" @click.prevent="handlePay">
              <v-progress-circular
                v-show="loadingPay"
                :loading="loadingPay"
                :indeterminate="true"
                :size="14"
              />
              <span :class="loadingPay ? 'ml-4' : ''">Pay now</span>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script>

const ContentData = () => import('./content-data');

export default {
  name: 'checkout-container',
  components: {
    ContentData
  },
  data: () => ({
    summary: 0,
    loadingPay: false,
    loading: false,
    carts: [],
    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Checkout",
        disabled: true,
        href: "#"
      },
    ],
  }),

  created() {
      this.$root.$on('add-cart', () => {
        this.loadData();
      })
    },

    async mounted() {
     this.loadData();
    },

    methods: {
      async handlePay() {
        this.loadingPay = true;
        try {
          
        } catch (error) {
          console.log(error);
        } finally {
          this.loadingPay = false;
        }
      },
      async loadData() {
         this.loading = true;
          try {
            const data = await this.$useRepositoryCheckout.loadCart();

            let summary = 0;
            data.data.forEach(d => {
              summary += d.book.price
            });

            this.summary = summary;

            this.carts = data.data;
          } catch (error) {
            console.log(error);
          } finally {
            this.loading = false;
          }
      },
      async handleRemoveItem(id) {
        this.loading = true;
        try {
          const data = await this.$useRepositoryCheckout.removeItem(id);
          this.$root.$emit('add-cart');
        } catch (error) {
          console.log('error :: ', error);
        } finally {
          this.loading = false;
        }
      }
    }
}
</script>