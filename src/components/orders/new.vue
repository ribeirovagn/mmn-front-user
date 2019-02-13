<template>
  <div>
    <div class="section-heading centered">
      <h1>Pricing Plans Demos</h1>
      <p>Here is a set of demos of pricing plans table, we are planning on bringing more cool pricing plans layout in the near future so stay tuned.</p>
    </div>
    <div class="pricing-plans row no-gutters">
      <div class="pricing-plan col-sm-3" v-for="product in products">
        <div class="plan-head">
          <div class="plan-image">
            <img alt="" src="img/plan1.png">
          </div>
          <div class="plan-name">
            {{ product.name }}
          </div>
        </div>
        <div class="plan-body">
          <div class="plan-price-w">
            <div class="price-value">
              ${{ product.value | integer}}
            </div>
            <div class="price-label">
              For Price
            </div>
          </div>
          <div class="plan-btn-w">
            <a class="btn btn-primary btn-rounded" href="#" v-on:click.prevent="buyNow(product)">Buy Now</a>
          </div>
        </div>
        <div class="plan-description">
          <h6>
            Description
          </h6>
          <p>
            {{ product.description }}
          </p>
          <h6>
            Category
          </h6>
          <ul>
            <li>
              {{product.product_type.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  data () {
    return {
      products : [],
      order: {},
      sell: []
    }
  },
  created () {
    this.$http.get('product').then( response => {
      this.products = response.data
    })
  },
  methods: {
    buyNow: function (product) {

      this.sell = [
        {
          quantity: 1,
          id: product.id
        }
      ]


      this.$http.post('order', this.sell).then(response => {
        this.$router.push({
          name: 'Orders'
        })
      }, error => {
        this.$swal({
          title: 'Error!',
          text: error.data.error,
          type: 'error',
        });
      })
    }
  }
}

</script>
