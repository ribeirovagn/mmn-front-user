<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">
          Financial
        </h6>
        <div class="element-box">
          <form v-on:submit.prevent="sendForm">
            <h5 class="element-box-header">
              Withdraw
            </h5>
            <div class="row">
              <div class="col-sm-5">
                <div class="form-group">
                  <label for="">Select Amount</label>
                  <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                    <input class="form-control" placeholder="Enter Amount..." type="text" v-model="withdraw.amount">
                    <div class="input-group-append">
                      <div class="input-group-text">
                        $
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-7" v-show="true">
                <div class="form-group">
                  <label for=""> Transfer to</label>
                  <select class="form-control" v-on:change="changedType()" v-model="withdraw.type_id">
                    <option :value="type.id" v-for="type in types">{{ type.type_account.name }} * {{ type.account_id }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-buttons-w text-right compact">
              <button class="btn btn-primary"><span>Send</span><i class="os-icon os-icon-grid-18"></i></button>
            </div>
          </form>
        </div>
      </div>
      <div class="element-wrapper">
        <div class="element-box-tp" v-show="withdraws.transactions.length">
          <h6 class="element-header">
            History
          </h6>
          <div class="table-responsive">
            <table class="table table-padded">
              <thead>
                <tr>
                  <th class="text-center">Status</th>
                  <th>Account</th>
                  <th class="text-center">Created At</th>
                  <th class="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="withdraw in withdraws.transactions">
                  <td class="text-center">
                    <div class="status-pill green" :title="withdraw.status.name" v-if="withdraw.status.name === 'COMPLETED'"></div>
                    <div class="status-pill red" :title="withdraw.status.name" v-if="withdraw.status.name === 'REVERSAL'"></div>
                    <div class="status-pill blue" :title="withdraw.status.name" v-if="withdraw.status.name === 'PROCESSING'"></div>
                    <div class="status-pill yellow" :title="withdraw.status.name" v-if="withdraw.status.name === 'PENDING'"></div>
                  </td>
                  <td>
                    <router-link :to="{ name: 'FinancialWithdrawDetails', params: { id: withdraw.id }}">
                      <div v-if="withdraw.bank_draft.bank === null" class="value">
                        {{ withdraw.bank_draft.type_account.name }}
                      </div>
                      <span v-if="withdraw.bank_draft.bank === null" class="sub-value">{{ withdraw.bank_draft.account_id }}</span>
                      <div v-if="withdraw.bank_draft.bank !== null" class="value">
                        {{ withdraw.bank_draft.bank.name }} * {{ withdraw.bank_draft.agency }}
                      </div>
                      <span v-if="withdraw.bank_draft.bank !== null" class="sub-value">{{ withdraw.bank_draft.account_id }} - {{ withdraw.bank_draft.operation }}</span>
                    </router-link>
                  </td>
                  <td class="text-center">{{ withdraw.created_at | dateFormat }}</td>
                  <td class="text-right">{{ withdraw.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="element-wrapper">
        <h6 class="element-header">Accounts</h6>
        <div class="element-box">
          <BanksApp/>
          <PlataformApp/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import BanksApp from './accounts/bank.vue'
import PlataformApp from './accounts/plataform.vue'

export default {

  data () {
    return {
      financial: {},
      withdraws: [],
      types: [],
      withdraw: {
        amount: 0,
        type_id: null
      }
    }
  },

  components: {
    BanksApp,
    PlataformApp
  },

  created () {
    this.getFinancial()
    this.listWithdraw()
    this.getTypes()
  },

  methods: {

    getFinancial: function () {
      this.$http.get('users/resume').then(response => {
        this.financial = response.data
      })
    },

    listWithdraw: function () {
      this.$http.get('financial/withdraw').then(response => {
        this.withdraws = response.data
        this.withdraw.amount = response.data.resume.amount
      }, error => {
        console.log("LIST WITHDRAW", error.data);
      })
    },

    getTypes: function () {
      this.$http.get('financial/withdraw/show/types').then(response => {
        this.types = response.data
      }, error => {
        console.log("GET TYPES ERROR", error.data);
      })
    },

    sendForm: function () {
      this.$http.post('financial/withdraw', this.withdraw).then(response => {
        console.log('WITHDRAW', response.data);
        this.withdraw.amount = 0
        this.listWithdraw()
      }, error => {
        this.$swal({
          title: 'Error',
          type: 'error',
          text: error.data.message
        })
      })
    },

    changedType: function () {
      console.log("changed", this.withdraw);
      this.$http.get('financial/withdraw/type/' + this.withdraw.type_id).then(response => {
        console.log("CHANGED TYPE", response.data);
      })
    }
  }
}

</script>
