<template>
  <div class="projects-list" v-if="!show">
    <div class="project-box">
      <div class="project-head">
        <div class="project-title">
          <h5>Binary Score</h5>
        </div>
      </div>
      <div class="project-info">
        <div class="row align-items-center">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-6">
                <div class="el-tablo highlight">
                  <div class="label">
                    LEFT
                  </div>
                  <div class="value">
                    {{ dots.dots_binary_0 }}
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="el-tablo highlight">
                  <div class="label">
                    RIGHT
                  </div>
                  <div class="value">
                    {{ dots.dots_binary_1 }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="os-progress-bar primary">
              <div class="bar-labels">
                <div class="bar-label-left">
                  <span>Progress</span><span class="positive">+10</span>
                </div>
                <div class="bar-label-right">
                  <span class="info">72/100</span>
                </div>
              </div>
              <div class="bar-level-1" style="width: 100%">
                <div class="bar-level-2" style="width: 72%">
                  <div class="bar-level-3" style="width: 36%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      dots: null,
      show: true
    }
  },
  created () {
    this.$http.get('genealogy/resume/binary').then(response => {
      console.log(response.data);
      this.dots = response.data;
      this.show = false
    }, error => {
      this.$swal({
        title: 'Error',
        type: 'error',
        text: 'Error: ' + error.data.error
      });
    })
  }
}

</script>
