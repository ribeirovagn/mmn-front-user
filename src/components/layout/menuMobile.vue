<template>
  <div class="menu-mobile menu-activated-on-click color-scheme-dark">
     <div class="mm-logo-buttons-w">
       <a class="mm-logo" href="index.html"><img src="img/logo.png"><span>Clean Admin</span></a>
       <div class="mm-buttons">
         <div class="content-panel-open">
           <div class="os-icon os-icon-grid-circles"></div>
         </div>
         <div class="mobile-menu-trigger">
           <div class="os-icon os-icon-hamburger-menu-1"></div>
         </div>
       </div>
     </div>
     <div class="menu-and-user">
       <logged/>
       <menu-list/>
     </div>
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
