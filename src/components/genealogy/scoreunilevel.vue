<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">Score</h6>
        <div class="element-box">
          <h5 class="form-header">Unilevel: {{ dots.genealogy_resume.dots_unilevel }}</h5>
          <table class="table table-lightborder table-padded">
            <thead>
              <tr>
                <th class="text-left">Level</th>
                <th class="text-left">Description</th>
                <th>Status</th>
                <th class="text-center">Created_at</th>
                <th class="text-right">Dots</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="dot in dots.unilevel">
                <td class="text-left">{{ dot.level }}</td>
                <td class="text-left">{{ dot.description }}</td>
                <td>{{ dots.status[dot.status] }}</td>
                <td class="text-center">{{ dot.created_at | dateFormat }}</td>
                <td class="text-right">{{ dot.dots }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
