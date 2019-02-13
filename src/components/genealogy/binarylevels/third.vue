<template>
  <div class="col col-lg-2">
    <joker :user="user" :classImg="'thirdLevel'"/>
  </div>
</template>


<script>

import joker from './joker.vue'

export default {
  props: ['user'],
  data(){
    return {}
  },

  components: {
    joker
  },
}

</script>


<style>
.thirdLevel {
  width: 70px !important
}
</style>
