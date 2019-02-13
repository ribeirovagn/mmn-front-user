<template>
  <div>
    <div class="profile-tile">
      <a class="profile-tile-box">
        <div class="pt-avatar-w">
          <img alt="" :src="'/static/img/avatar3.jpg'">
        </div>
        <div class="pt-user-name">
          {{ user.name }}
          <p><small>({{ user.username }})</small></p>
        </div>
      </a>
      <div class="profile-tile-meta">
        <ul>
          <li>Created At:<strong> {{ user.created_at | dateFormat }}</strong></li>
          <li>Email:<strong> {{ user.email}}</strong></li>
          <li v-if="user.genealogies.sponsor !== null">Sponsor:<strong> {{ user.genealogies.sponsor.name }}</strong> ({{ user.genealogies.sponsor.username }})</li>
          <li>Status:<strong> {{ user.genealogies.name }}</strong></li>
          <li>Graduation:<strong> {{ user.genealogy_resume.name }}</strong></li>
        </ul>
      </div>
    </div>
    <div class="element-wrapper">
      <h6 class="element-header">Graduations</h6>
      <div class="element-box-tp">
        <div class="activity-boxes-w">
          <div class="activity-box-w" v-for="graduation in user.graduations">
            <div class="activity-time">
              {{ graduation.created_at | dateFormat }}
            </div>
            <div class="activity-box">
              <div class="activity-avatar">
                <img alt="" :src="'/static/img/company6.png'">
              </div>
              <div class="activity-info">
                <div class="activity-role">
                  {{ graduation.graduation.name }}
                </div>
                <strong class="activity-title">Initial Score: {{ graduation.graduation.dots_start }}</strong>
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
  props: ['userID'],
  data () {
    return {
      user: {},
      urlShow: null
    }
  },

  created () {
    this.urlShow = (typeof this.userID === "undefined") ? "genealogy/show" : "genealogy/show/" + this.userID
    this.$http.get(this.urlShow).then( response => {
      this.user = response.data
      console.log("USER Genealogy", typeof this.userID);
    });
  }
}

</script>
