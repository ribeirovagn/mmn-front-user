<template>
  <div>
    <form v-on:submit.prevent="sendForm">
      <div class="form-group">
        <label>ID</label>
        <input type="text" class="form-control" v-model="account.account_id">
      </div>
      <div class="form-buttons-w">
        <button class="btn btn-primary" type="submit"> Submit</button>
      </div>
    </form>
    <table class="table table-lightbox">
      <thead>
        <tr>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="account in accounts">
          <td>{{ account.account_id }}</td>
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
      account: {},
      accounts: []
    }
  },

  mounted () {
    this.getAccounts()
  },

  methods: {
    sendForm: function () {
      this.$http.post('financial/withdraw/accounts/plataform', this.account).then(response => {
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
      this.$http.get('financial/withdraw/accounts/plataform').then(response => {
        this.accounts = response.data
      }, error => {
        console.log("ACCOUNTS ERROR", error.data);
      })
    },
  }

}

</script>
