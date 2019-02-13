<template>
  <div class="all-wrapper menu-side with-pattern">
    <div class="auth-box-w wider">
      <div class="logo-w">
        <a href="index.html"><img alt="" src="img/logo-big.png"></a>
      </div>
      <h4 class="auth-header">Create new account</h4>
      <form v-on:submit.prevent="sendForm">
        <div class="form-group" v-bind:class="{'has-error has-danger': errors.has('indicatorName')}">
          <label for=""> Indicator</label>
          <input v-validate="'required|min:6'" class="form-control" placeholder="indicator" type="text" v-model="formData.indicatorName" name="indicatorName" v-on:change.prevent="getindicator">
          <div class="pre-icon os-icon os-icon-user"></div>
          <div class="help-block form-text with-errors form-control-feedback" v-show="errors.has('indicatorName')">
            <ul class="list-unstyled">
              <li>{{ errors.first('indicatorName') }}</li>
            </ul>
          </div>
        </div>
        <div class="form-group" v-bind:class="{'has-error has-danger': errors.has('username')}">
          <label for=""> Username</label>
          <input v-validate="'required|min:6'" class="form-control" placeholder="username" type="text" v-model="formData.username" name="username">
          <div class="pre-icon os-icon os-icon-user"></div>
          <div class="help-block form-text with-errors form-control-feedback" v-show="errors.has('username')">
            <ul class="list-unstyled">
              <li>{{ errors.first('username') }}</li>
            </ul>
          </div>
        </div>
        <div class="form-group" v-bind:class="{'has-error has-danger': errors.has('name')}">
          <label for=""> Name</label>
          <input v-validate="'required|min:6'" class="form-control" placeholder="Name " type="text" v-model="formData.name" name="name">
          <div class="pre-icon os-icon os-icon-user"></div>
          <div class="help-block form-text with-errors form-control-feedback" v-show="errors.has('name')">
            <ul class="list-unstyled">
              <li>{{ errors.first('name') }}</li>
            </ul>
          </div>
        </div>
        <div class="form-group" v-bind:class="{'has-error has-danger': errors.has('email')}">
          <label for=""> Email address</label>
          <input v-validate="'required|email'" class="form-control" placeholder="Email" type="email" v-model="formData.email" name="email">
          <div class="pre-icon os-icon os-icon-email-2-at2"></div>
          <div class="help-block form-text with-errors form-control-feedback" v-show="errors.has('email')">
            <ul class="list-unstyled">
              <li>{{ errors.first('email') }}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group" v-bind:class="{'has-error has-danger': errors.has('password')}">
              <label for=""> Password</label>
              <input v-validate="'required|min:6'" class="form-control" placeholder="Password" type="password" name="password" v-model="formData.password" ref="password">
              <div class="pre-icon os-icon os-icon-fingerprint"></div>
              <div class="help-block form-text with-errors form-control-feedback" v-show="errors.has('password')">
                <ul class="list-unstyled">
                  <li>{{ errors.first('password') }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group" v-bind:class="{'has-error has-danger': errors.has('password_confirmation')}">
              <label for="">Confirm Password</label>
              <input v-validate="'required|confirmed:password'" class="form-control" placeholder="Password" type="password" v-model="formData.password_confirmation" name="password_confirmation">
              <div class="help-block form-text with-errors form-control-feedback" v-show="errors.has('password_confirmation')">
                <ul class="list-unstyled">
                  <li>{{ errors.first('password_confirmation') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="buttons-w">
          <button class="btn btn-primary">Register Now</button>
          <div class="form-check-inline">
            <label class="form-check-label">
              <router-link :to="{ name: 'Login'}">
                <span>Login</span>
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
      formData: {
        indicatorName: null,
        indicator: null,
        username: null,
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
        recaptcha: null
      }
    }
  },
  created () {
    console.log(this.formData);
  },

  methods: {
    sendForm: function () {
      this.$validator.validate().then(result => {
        if(result){
          this.$recaptcha('login').then((token) => {
            this.formData.recaptcha = token
            this.$http.post('user', this.formData).then(response => {
              this.$swal({
                title: 'Success',
                type: 'success'
              }).then(response => {
                this.$router.push({
                  name: 'Login'
                })
              })
            },error => {
              this.$swal({
                title: 'Warning',
                type: 'warning',
                text: error.data.error
              })
            })
          },  error => {
            console.log("ERROR");
          });
        }
      }).catch(function(e) {
        console.log("ERRORS", e);
      })
    },
    getindicator: function () {
      this.$http.get('genealogy/verify/' + this.formData.indicatorName).then(response => {
        this.formData.indicator = response.data.user
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
