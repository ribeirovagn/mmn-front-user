<template>
  <div class="row">
    <div class="col-6 col-sm-3 col-xxl-2">
      <a class="element-box el-tablo centered trend-in-corner smaller">
        <div class="label">
          Amount
        </div>
        <div class="value text-success">
          $ {{ userResume.amount }}
        </div>
      </a>
    </div>
    <div class="col-6 col-sm-3 col-xxl-2">
      <a class="element-box el-tablo centered trend-in-corner smaller">
        <div class="label">
          Debit
        </div>
        <div class="value text-danger">
          $ {{ userResume.debit }}
        </div>
      </a>
    </div>
    <div class="col-6 col-sm-3 col-xxl-2">
      <a class="element-box el-tablo centered trend-in-corner smaller">
        <div class="label">
          Bonus
        </div>
        <div class="value text-success">
          $ {{ userResume.amount_bonus }}
        </div>
      </a>
    </div>
    <div class="col-6 col-sm-3 col-xxl-2">
      <a class="element-box el-tablo centered trend-in-corner smaller">
        <div class="label">
          Lidership
        </div>
        <div class="value">
          $ {{ userResume.amount_lidership }}
        </div>
      </a>
    </div>
    <div class="col-6 col-sm-3 col-xxl-2">
      <a class="element-box el-tablo centered trend-in-corner smaller">
        <div class="label">
          Withdraw Total
        </div>
        <div class="value text-success">
          $ {{ userResume.withdraw }}
        </div>
      </a>
    </div>
    <div class="col-6 col-sm-3 col-xxl-2">
      <a class="element-box el-tablo centered trend-in-corner smaller">
        <div class="label">
          Limits
        </div>
        <div class="value text-info">
          $ {{ userResume.bonus_limits }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
        userResume: {}
    }
  },

  created () {
    this.getUSerResume()
  },

  methods: {
    getUSerResume: function () {
      this.$http.get('users/resume').then(response => {
        this.userResume = response.data
      })
    }
  }
}

</script>
