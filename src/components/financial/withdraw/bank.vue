<template>
  <div class="form-desc">
    <p>Bank: {{ withdraw.bank_draft.bank.name }}</p>
    <p>Agency: {{ withdraw.bank_draft.agency }}</p>
    <p>Account: {{ withdraw.bank_draft.account_id }}</p>
    <p>Operation: {{ withdraw.bank_draft.operation }}</p>
  </div>
</template>

<script>

export default {

  props: ['withdraw'],

  data () {
    return {

    }
  }

}

</script>
