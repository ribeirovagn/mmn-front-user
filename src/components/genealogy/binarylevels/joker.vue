<template>
  <div class="profile-tile  justify-content-md-center">

    <a class="profile-tile-box" v-if="user === null">
      <div class="pt-avatar-w">
        <img alt="" :src="'/static/img/plan3.png'" :class="classImg" class="bin-img">
      </div>
      <div class="pt-user-name">
        &nbsp;
      </div>
    </a>

    <router-link  class="profile-tile-box" v-if="user !== null" :to="{ name: 'GenealogyBinaryUser', params: {user_id: user.user.id}}">
      <div class="pt-avatar-w">
        <img alt="" :src="'/static/img/avatar3.jpg'" :class="classImg">
      </div>
      <div class="pt-user-name">
        {{ user.user.username }}
      </div>
    </router-link>
  </div>
</template>


<script>

export default {
  props: ['user', 'classImg'],
  data () {
    return {}
  },
}

</script>

<style>

.bin-img{
  opacity: 0.3
}
</style>
