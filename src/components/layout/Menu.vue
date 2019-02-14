<template>
  <div class="menu-w color-scheme-dark color-style-bright menu-position-side menu-side-left menu-layout-compact sub-menu-style-over sub-menu-color-bright selected-menu-color-light menu-activated-on-hover menu-has-selected-link">
    <div class="logo-w">
      <router-link :to="{ name: 'Dashboard'}">
        <img src="https://s3.amazonaws.com/navi-public/api/logo.png">
        <div class="logo-label">MMN 3.0</div>
      </router-link>
    </div>
    <logged/>

    <div class="element-search autosuggest-search-activator">
      <input placeholder="Start typing to search..." type="text">
    </div>
    <h1 class="menu-page-header">
      Page Header
    </h1>
    <menu-list/>
  </div>
</template>

<script>

import Logged from '../user/logged.vue'
import MenuList from './menuList.vue'

export default {
  data () {
    return {}
  },

  components: {
    Logged,
    'menu-list': MenuList
  }
}

</script>
