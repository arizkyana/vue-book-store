export default (app, inject) => {
  inject('useRepositoryCheckout', {
    addToCart: (id) => app.$axios({
      url: `/browse/book/${id}/detail`,
      method: 'get',
      auth: {
        username: 'client-web-id',
        password: 'client-web-secret'
      }
    }),
    loadCart: () => app.$axios({
      url: '/checkout/cart',
      method: 'get'
    }),
    removeItem: (id) => app.$axios({
      url: `/checkout/cart/${id}`,
      method: 'delete'
    })
  });
}