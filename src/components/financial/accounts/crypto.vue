<template>
  <div>
    <form v-on:submit.prevent="sendForm">
      <h5 class="form-header">Crypto</h5>
      <div class="row">
        <div class="col-sm-2">
          <div class="form-group">
            <label>Coin</label>
            <select v-model="account.crypto_id" class="form-control">
              <option v-for="crypto in cryptos" :value="crypto.name">{{ crypto.name }}</option>
            </select>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group">
            <label>Address</label>
            <input type="text" class="form-control" v-model="account.account_id">
          </div>
        </div>
      </div>
      <div class="form-buttons-w">
        <button class="btn btn-primary" type="submit"> Submit</button>
      </div>
    </form>
    <table class="table table-lightbox">
      <thead>
        <tr>
          <th>Address</th>
          <th>Coin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in accounts">
          <td>{{ account.account_id }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data () {
    return {
      banks: [],
      accounts: [],
      account: {}
    }
  },

  mounted () {
    this.getAccounts()
  },

  methods: {
    sendForm: function () {
      this.$http.post('financial/withdraw/accounts/crypto', this.account).then(response => {
        this.accounts = response.data
      }, error => {
        console.log("PLATAFORM ERROR", error.data);
        this.$swal({
          title: 'Error',
          type: 'error',
          text: error.data.error
        })
      })
    },
    getAccounts: function () {
      this.$http.get('financial/withdraw/accounts/crypto').then(response => {
        this.accounts = response.data.Accounts
      }, error => {
        console.log("ACCOUNTS ERROR", error.data);
      })
    },
  }
}

</script>
