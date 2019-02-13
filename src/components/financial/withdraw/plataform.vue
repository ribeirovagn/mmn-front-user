<template>
  <div class="form-desc">
    <p>Account: {{ withdraw.bank_draft.account_id }}</p>
  </div>
</template>


<script>


export default {

  props: ['withdraw'],

  data () {
    return {}
  }
}

</script>
