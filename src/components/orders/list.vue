<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">My Orders</h6>
        <div class="element-box">
          <h5 class="form-header">List Orders</h5>
          <table class="table table-lightborder">
            <thead>
              <tr>
                <th>Code</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Items</th>
                <th>Pay Day</th>
                <th class="text-right">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders">
                <td><router-link :to="'/orders/invoice/' + order.id">{{ order.id }}</router-link></td>
                <td>{{ order.name }}</td>
                <td>{{ order.created_at | dateFormat }}</td>
                <td>
                  <p v-for="items in order.items">
                    <strong>{{ items.product.name }}</strong><br>
                    <small>{{ items.product.product_type.name }}</small>
                  </p>
                </td>
                <td>{{ order.payday | dateFormat}}</td>
                <td class="text-right">{{ order.value_fiat }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      orders: []
    }
  },
  created () {
    this.$http.get('order/show-by-user').then( response => {
      this.orders = response.data
    })
  }
}

</script>
