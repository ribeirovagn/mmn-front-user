<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <div class="element-header">Score</div>
        <div class="element-box">
          <h5 class="form-header">Binary</h5>
          <table class="table table-lightborder">
            <thead>
              <tr>
                <th class="text-center">Level</th>
                <th class="text-center">Created_at</th>
                <th>Status</th>
                <th>Side</th>
                <th class="text-right">Dots</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="dot in dots.binary">
                <td class="text-center">{{ dot.level }}</td>
                <td class="text-center">{{ dot.created_at | dateFormat }}</td>
                <td>{{ dots.status[dot.status] }}</td>
                <td>{{ dots.side[dot.side] }}</td>
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
    this.$http.get('dots/binary/show').then(response => {
      console.log(response.data);
      this.dots = response.data
    })
  }
}
</script>
