<template>
  <div class="row">
    <div class="col-sm-6">
      <a class="element-box el-tablo centered trend-in-corner padded bold-label">
        <div class="value">
          {{ dots.genealogy_resume.dots_unilevel }}
        </div>
        <div class="label">
          Unilevel Score
        </div>
      </a>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      dots: null
    }
  },
  created () {
    this.$http.get('dots/unilevel/show').then(response => {
      console.log(response.data);
      this.dots = response.data
    })
  }
}

</script>
