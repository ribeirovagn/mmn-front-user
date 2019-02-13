<template>
  <div class="content-i">
    <div class="content-box">
      <user/>
      <binary/>
      <unilevel/>
      <Indicated/>
    </div>
  </div>
</template>

<script>

import Indicated from  '../genealogy/indicates.vue'
import Binary from '../dots/binaryResume.vue'
import Unilevel from '../dots/unilevel.vue'
import User from '../user/index.vue'

export default {
  data () {
    return {
      user:{},
      indicators: {}
    }
  },
  components: {
    Indicated, Binary, Unilevel, User
  },

  mounted(){
    this.$store.dispatch('isLoaded')
  }
}
</script>
