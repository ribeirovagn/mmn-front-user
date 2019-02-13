<template>
  <a href="#" v-on:click.prevent="exit()"><i class="os-icon os-icon-signs-11"></i><span> Logout </span></a>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {
    exit: function () {

      this.$http.get('oauth/logout').then(response => {
        this.$store.dispatch('destroyToken')
        this.$router.push({
          name: 'Login'
        })
      }, error => {
        console.log(error.data);
      })
    }
  }
}
</script>
