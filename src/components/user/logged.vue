<template>
  <div class="logged-user-w avatar-inline">
    <div class="logged-user-i">
      <div class="avatar-w">
        <img alt="" :src="'/static/img/avatar1.jpg'">
      </div>
      <div class="logged-user-info-w">
        <div class="logged-user-name">
          {{ user.name }}
        </div>
        <div class="logged-user-role">
          {{ user.username }}
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.$http.get('genealogy/show').then( response => {
      this.user = response.data
    });
  }
}
</script>
