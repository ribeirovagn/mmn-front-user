<template>
  <div class="col col-lg-1">
    <joker :user="this.user" :classImg="'fourthLevel'"/>
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
.fourthLevel {
  width: 55px !important
}
</style>
