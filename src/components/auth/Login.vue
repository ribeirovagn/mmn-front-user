<template>
  <div class="all-wrapper menu-side with-pattern">
    <div  class="loader" v-if="$store.state.loader.isloading"></div>
    <div class="auth-box-w">
      <div class="logo-w">
        <img src="https://s3.amazonaws.com/navi-public/api/logo.png" width="120">
      </div>
      <h4 class="auth-header">Login Form</h4>
      <form v-on:submit.prevent="Login">

        <div class="form-group">
          <label for="">Username</label><input class="form-control" placeholder="Enter your username" type="text" v-model="user.username">
          <div class="pre-icon os-icon os-icon-user-male-circle"></div>
        </div>
        <div class="form-group">
          <label for="">Password</label><input class="form-control" placeholder="Enter your password" type="password" v-model="user.password">
          <div class="pre-icon os-icon os-icon-fingerprint"></div>
        </div>
        <div class="form-group" v-if="$store.state.authentication.error">
          <div class="help-block form-text with-errors form-control-feedback">
            <ul class="list-unstyled">
              <li>{{$store.state.authentication.error.message}}</li>
            </ul>
          </div>
        </div>
        <div class="buttons-w">
          <button class="btn btn-primary">Log me in</button>
          <div class="form-check-inline">
            <label class="form-check-label">
              <router-link :to="{ name: 'Register'}">
                <span>Register</span>
              </router-link>
            </label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>

export default {
  data () {
    return {
      user: {
        username: null,
        password: null,
        grant_type: process.env.GRANT_TYPE,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        scope: '',
        recaptcha: null
      }
    }
  },

  methods: {
    Login: function () {
      this.$store.dispatch('isLoading')
      this.$recaptcha('login').then((token) => {
        this.user.recaptcha = token
        this.$store.dispatch('setToken', this.user)
      },  error => {
        this.$store.dispatch('isLoaded')
        console.log("ERROR", error.data);
      });


    }
  }
}
</script>
