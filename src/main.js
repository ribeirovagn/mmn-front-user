// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

import store from './store'
import router from './router'

import VueResource from 'vue-resource'
import VueSweetalert2 from 'vue-sweetalert2';
import moment from 'moment';
import VeeValidate from 'vee-validate'
import LiquorTree from 'liquor-tree'

import { VueReCaptcha } from 'vue-recaptcha-v3'
Vue.use(VueReCaptcha, { siteKey: process.env.RECAPTCHA_SITE_KEY })


import Datatable from 'vue2-datatable-component'


Vue.use(Datatable)
Vue.use(LiquorTree)
Vue.use(VueSweetalert2);
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VeeValidate)

import './assets/css/main.css'
import './assets/bower_components/select2/dist/css/select2.min.css'
import './assets/bower_components/bootstrap-daterangepicker/daterangepicker.css'
import './assets/bower_components/dropzone/dist/dropzone.css'
import './assets/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css'
import './assets/bower_components/fullcalendar/dist/fullcalendar.min.css'
import './assets/bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css'
import './assets/bower_components/slick-carousel/slick/slick.css'

Vue.config.productionTip = false
Vue.http.options.root = process.env.API_ENDPOINT

if (process.env.NODE_ENV === 'production') {
  Vue.config.devtools = false
  Vue.config.debug = false
  Vue.config.silent = true
}

router.afterEach((to, from) => {
  store.dispatch('isLoaded')
  console.log('LOADED', store.state.loader.isloading);
})

router.beforeEach(
  (to, from, next) => {
    //store.dispatch('isLoading')
    console.log('LOADING',  store.state.loader.isloading);
    store.dispatch('isAuthenticated')
    document.body.className = "auth-wrapper"
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (store.state.authentication.isAuthenticated) {
        next({
          name: 'Dashboard'
        })
      } else {
        next()
      }
    }
    else if (to.matched.some(record => record.meta.forAuth)) {
      document.body.className = "menu-position-side menu-side-left full-screen"
      Vue.http.headers.common['Authorization'] = 'Bearer ' + store.state.authentication.auth.access_token
      if (!store.state.authentication.isAuthenticated) {
        next({
          name: 'Login'
        })
      } else {
        next()
      }
    }
  }
);


Vue.filter('dateFormat', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm:ss')
  }
});


Vue.filter('dateSimple', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
});

Vue.filter('phone', function (phone) {
  return phone.replace(/[^0-9]/g, '')
  .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
});
Vue.filter('integer', function (num) {
  return String(num * 1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
