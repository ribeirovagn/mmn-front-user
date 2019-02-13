<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">Withdraw Details</h6>
        <div class="element-box">
          <div class="element-actions">
            <h6>{{withdraw.transaction.created_at | dateFormat}}</h6>
          </div>
          <h5 class="element-box-header">{{ withdraw.transaction.bank_draft.type_account.name }}</h5>
          <div class="element-actions">
            <h1 class="display-6 text-right">$ {{withdraw.transaction.value}}</h1>
            <div v-if="typeof withdraw.transaction.withdraw_tax !== null">
              <small>{{ withdraw.transaction.withdraw_tax.description}}</small>
              $ {{ withdraw.transaction.withdraw_tax.value}}
            </div>
          </div>
          <h5 class="form-header">{{ withdraw.transaction.user.name }} <small>{{ withdraw.transaction.user.username }}</small></h5>
          <div class="form-desc">{{ withdraw.transaction.user.email }}</div>
          <div class="row">
            <div class="col-6">
              <BankDraft :withdraw="withdraw.transaction" v-if="withdraw.transaction.bank_draft.bank !== null"/>
              <Plataform :withdraw="withdraw.transaction" v-if="withdraw.transaction.bank_draft.bank === null"/>
            </div>
            <div class="col-6">
              <div class="element-wrapper">
                <h6>Status</h6>
                <table class="table">
                  <tbody>
                    <tr v-for="status in withdraw.transaction.statuses">
                      <td class="text-center">
                        <div class="status-pill green" :title="status.name" v-if="status.name === 'COMPLETED'"></div>
                        <div class="status-pill red" :title="status.name" v-if="status.name === 'REVERSAL'"></div>
                        <div class="status-pill blue" :title="status.name" v-if="status.name === 'PROCESSING'"></div>
                        <div class="status-pill yellow" :title="status.name" v-if="status.name === 'PENDING'"></div>
                      </td>
                      <td>{{status.name}}</td>
                      <td>{{status.note}}</td>
                      <td class="text-right">{{status.created_at | dateFormat}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import BankDraft from './bank.vue'
import Plataform from './plataform.vue'

export default {
  props: ['id'],
  data () {
    return {
      withdraw: {},
      transaction: {}
    }
  },
  created () {
    this.getTransaction()
  },

  components: {
    BankDraft, Plataform
  },

  methods: {
    getTransaction: function () {
      this.$http.get('financial/withdraw/show-by/' + this.id).then(response => {
        this.withdraw = response.data
      })
    }
  }
}

</script>
