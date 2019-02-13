<template>
  <div>
    <form v-on:submit.prevent="sendForm">
      <div class="form-group row">
        <div class="col-sm-6">
          <label>Bank</label>
          <select class="form-control" v-model="account.bank_id">
            <option v-for="bank in banks" :value="bank.id">{{ bank.name }}</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group">
            <label>Agency</label>
            <input type="text" class="form-control" v-model="account.agency">
          </div>
        </div>
        <div class="col-sm-3">
          <div class="form-group">
            <label>Account</label>
            <input type="text" class="form-control" v-model="account.account_id">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-6">
          <label>Operation</label>
          <input type="text" class="form-control" v-model="account.operation">
        </div>
      </div>
      <div class="form-buttons-w">
        <button class="btn btn-primary" type="submit"> Submit</button>
      </div>
    </form>
    <table class="table table-lightbox">
      <thead>
        <tr>
          <th>Bank</th>
          <th>Agency</th>
          <th>Account</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in accounts">
          <td>{{ account.bank.name }}</td>
          <td>{{ account.agency }}</td>
          <td>{{ account.account_id }}</td>
          <td>{{ account.operation }}</td>
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
      account: {
        bank_id: null,
        account_id: null,
        account: null,
        operation: null
      }
    }
  },

  mounted () {
    this.getBanks()
    this.getAccounts()
  },

  methods: {
    getBanks: function () {
      this.$http.get('financial/withdraw/banks').then(response => {
        this.banks = response.data
      }, error => {
        this.$swal({
          title: 'Error',
          type: 'error',
          text: error.data
        })
      })
    },

    getAccounts: function () {
      this.$http.get('financial/withdraw/accounts/banks').then(response => {
        this.accounts = response.data
      }, error => {
        console.log("ACCOUNTS ERROR", error.data);
      })
    },

    sendForm: function () {
      this.$http.post('financial/withdraw/accounts/banks', this.account).then(response => {

      }, error => {
        console.log("ERROR BANK", error.data);
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
