<template>
  <div class="content-i">
    <div class="content-box">
      <div class="row">
        <div class="col-sm-12">
          <div class="element-wrapper">
            <div class="element-actions">
              <router-link :to="{ name: 'GenealogyBinary'}" class="btn btn-success"><i class="os-icon os-icon-arrow-up"></i> Root</router-link>
              <router-link v-if="firstLevel.father !== null" :to="{ name: 'GenealogyBinaryUser', params: {user_id: firstLevel.father}}" class="btn btn-warning"><i class="os-icon os-icon-corner-right-up"></i> One Level Up</router-link>
            </div>
            <h6 class="element-header">Genealogy Binary</h6>
            <div class="element-content">
              <div class="element-box">
                <div class="profile-tile justify-content-md-center">
                  <a class="profile-tile-box">
                    <div class="pt-avatar-w">
                      <img alt="" :src="'/static/img/avatar3.jpg'" class="firstLevel">
                    </div>
                    <div class="pt-user-name">
                      {{firstLevel.user.username}}
                    </div>
                  </a>
                </div>
                <!-- SEGUNDO NIVEL -->
                <div class="row justify-content-md-center">
                  <Second :user="secondLevel[1]"/>
                  <Second :user="secondLevel[2]"/>
                </div>
                <!-- TERCEIRO NIVEL -->
                <div class="row justify-content-md-center">
                  <Third :user="thirdLevel[1]" />
                  <Third :user="thirdLevel[2]" />
                  <Third :user="thirdLevel[3]" />
                  <Third :user="thirdLevel[4]" />
                </div>
                <!-- QUARTO NIVEL -->
                <div class="row justify-content-md-center">
                  <Fourth :user="fourthLevel[1]"/>
                  <Fourth :user="fourthLevel[2]"/>
                  <Fourth :user="fourthLevel[3]"/>
                  <Fourth :user="fourthLevel[4]"/>
                  <Fourth :user="fourthLevel[5]"/>
                  <Fourth :user="fourthLevel[6]"/>
                  <Fourth :user="fourthLevel[7]"/>
                  <Fourth :user="fourthLevel[8]"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-panel">
      <div class="content-panel-toggler">
        <i class="os-icon os-icon-grid-squares-22"></i><span>Sidebar</span>
      </div>
      <div class="element-wrapper">
        <h6 class="element-header">User Details</h6>
        <User :userID="userID"/>
      </div>
    </div>
  </div>
</template>
<script>

import Second from './binarylevels/second.vue'
import Third from './binarylevels/third.vue'
import Fourth from './binarylevels/fourth.vue'
import User from '@/components/user/index.vue'


export default {
  props: ['user_id'],
  data () {
    return {
      firstLevel: {},
      secondLevel: [],
      thirdLevel: [],
      fourthLevel: [],
      userID: null
    }
  },

  components: {
    User, Second, Third, Fourth
  },

  created () {
    this.getUser()
  },

  methods: {
    getUser: function () {
      this.urlShow = (typeof this.user_id === "undefined") ? "genealogy/children" : "genealogy/children/" + this.user_id
      this.$http.get(this.urlShow).then(response => {
        this.firstLevel = response.data.first
        this.secondLevel = response.data.second
        this.thirdLevel = response.data.third
        this.fourthLevel = response.data.fourth
        this.userID = this.firstLevel.user_id
      }, error => {
        this.$swal({
          title: 'Error',
          type: 'error',
          text: 'Error'
        }).then({

        })
      })
    },

    firstNode: function () {
      console.log(this.$router);
      this.$router.push({
        name: "GenealogyBinary"
      })
    }
  },


}

</script>

<style scoped>
.firstLevel {
  width: 100px !important
}

.col col-lg-4{
  max-width: 50% !important;
  flex: 0 !important;
}

</style>
