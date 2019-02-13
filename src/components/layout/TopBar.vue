<template>
  <div class="top-bar color-scheme-bright">
    <div class="fancy-selector-w">
      <div class="fancy-selector-current">
        <div class="fs-img">
          <img alt="" src="img/card4.png">
        </div>
        <div class="fs-main-info">
          <div class="fs-name">
            <span>Amount</span><strong>U$</strong>
          </div>
          <div class="fs-sub">
            <span>Balance:</span><strong>${{ resume.amount }}</strong>
          </div>
        </div>
      </div>
    </div>
    <div class="top-menu-controls">
      <div class="element-search autosuggest-search-activator">
        <input placeholder="Start typing to search..." type="text">
      </div>
      <div class="logged-user-w">
        <div class="logged-user-i">
          <div class="avatar-w">
            <log-out></log-out>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LogOut from '../auth/Logout'

export default {

  data () {
    return {
      resume: {}
    }
  },

  created () {
    this.getResume()
  },

  components: {
    LogOut
  },

  methods: {
    getResume: function () {
      this.$http.get('users/resume').then(response => {
        this.resume = response.data
      }, error => {
        console.log("ERROR", error.data);
      })
    }
  }
}

</script>
