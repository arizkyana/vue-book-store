<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Book title</th>
          <th class="text-right">Quantity</th>
          <th class="text-right">Price</th>
          <th class="text-right"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in carts" :key="item._id">
          <td>{{ item.book.title }}</td>
          <td class="text-right">{{ item.qty }}</td>
          <td class="text-right">{{ $utils.currency(item.book.price) }}</td>
          <td class="text-right">
            <v-btn
              small
              depressed
              color="error"
              outlined
              type="button"
              @click.prevent="() => handleRemoveItem(item._id)"
            >remove</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    props: {
      carts: Array
    },
    data: () => ({
      loading: false,
    }),

    
  }
</script>