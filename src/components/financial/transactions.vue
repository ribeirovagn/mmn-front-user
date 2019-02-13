<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">Transactions</h6>
        <Resume/>
        <div class="element-box">
          <h5 class="form-header">List Transactions</h5>
          <div class="table-responsive">
            <table class="table table-lightborder table-hover">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Created At</th>
                  <th class="text-right">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="transaction in transactions">
                  <td>
                    <div class="status-pill green" v-if="(transaction.operation.name == 'CREDIT')" :title="transaction.operation.name"></div>
                    <div class="status-pill red" v-if="(transaction.operation.name == 'DEBIT')" :title="transaction.operation.name"></div>
                  </td>
                  <td>{{ transaction.description }}</td>
                  <td>{{ transaction.created_at | dateFormat }}</td>
                  <td class="text-right">{{transaction.value}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Resume from './resume.vue'

export default {
  data () {
    return {
      transactions: {}
    }
  },
  components: {Resume},
  created () {
    this.getTransactions()
  },
  methods: {
    getTransactions: function () {
      this.$http.get('financial/transactions').then(response => {
        this.transactions = response.data
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
