<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <div class="invoice-w">
          <div class="infos">
            <div class="info-1">
              <div class="invoice-logo-w">
                <img alt="" :src="'/static/img/logo2.png'">
              </div>
              <div class="company-name">
                Paper Inc
              </div>
              <div class="company-address">
                47 Countrylane Ave, <br>Los Angeles, CA 97446 <br>United States
              </div>
              <div class="company-extra">
                tel. 858.745.5577
              </div>
            </div>
            <div class="info-2">
              <div class="company-name">
                Client
              </div>
              <div class="company-address">
                {{order.user.name}}<br>{{ order.user.username }}<br>{{order.user.email}}
              </div>
            </div>
          </div>
          <div class="invoice-heading">
            <h3>Invoice</h3>
            <div class="invoice-date">
              {{ order.created_at | dateFormat }}
            </div>
          </div>
          <div class="invoice-body">
            <div class="invoice-desc">
              <div class="desc-label">Invoice #</div>
              <div class="desc-value">{{ order.id }}</div>
              <div class="desc-label">Status</div>
              <div class="desc-value">{{ order.status.name }}</div>
            </div>
            <div class="invoice-table">

              <table class="table">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="status in order.statuses">
                    <td><span>{{status.status.name}}</span>{{status.note}}</td>
                    <td>{{status.created_at | dateFormat}}</td>
                  </tr>
                </tbody>
              </table>

              <table class="table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Qty</th>
                    <th class="text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in order.items">
                    <td>
                      <span>{{item.product.name}}</span><br>
                      <small>{{item.product.product_type.name}}</small>
                    </td>
                    <td>{{item.quantity}}</td>
                    <td class="text-right">${{item.value | integer}}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total</td>
                    <td class="text-right" colspan="2">{{ this.order.value_fiat | integer }}</td>
                  </tr>
                </tfoot>
              </table>
              <div class="terms">
                <div class="terms-header">
                  Payment
                </div>
                <div class="terms-content">
                  <a v-if="(order.status.id !== 4)" class="btn btn-primary btn-sm" href="#" v-on:click.prevent="pay"><i class="os-icon os-icon-ui-22"></i><span>Pay</span></a>
                  <router-link :to="{ name: 'Orders'}" class="btn btn-info btn-sm"><i class="os-icon os-icon-chevrons-left"></i><span>Back</span></router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="invoice-footer">
            <div class="invoice-logo">
              <img alt="" :src="'/static/img/logo.png'"><span>Paper Inc</span>
            </div>
            <div class="invoice-info">
              <span>hello@paper.inc</span><span>858.757.4455</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['id'],
  data () {
    return {
      order: null
    }
  },
  created () {
    console.log(this.$route.params);
    this.$http.get('order/' + this.id).then(response => {
      this.order = response.data;
      console.log(this.order);
    })
  },
  methods: {
    pay: function () {
      this.$http.put('order/pay/' + this.order.id).then(response => {
        this.order = response.data.updated
        this.$swal({
          title: 'Success',
          type: 'success',
          text: response.data.message
        })
        console.log(response.data);
      }, error => {
        this.$swal({
          title: 'Error',
          type: 'error',
          text: error.data.error
        })
      })
    }
  }
}

</script>
