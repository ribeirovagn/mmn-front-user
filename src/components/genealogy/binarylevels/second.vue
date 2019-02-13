<template>
  <div class="col col-lg-4">
    <joker :user="user" :classImg="'secondLevel'"/>
  </div>
</template>
<script>

import joker from './joker.vue'

export default {
  props: ['user'],
  data(){
    return {
      node: null
    }
  },

  components: {
    joker
  },

  created () {
    this.node = this.user
    console.log('GENEALOGY BINARY SECOND', this.node);
  }
}

</script>

<style>
.secondLevel {
  width: 85px !important
}
</style>
