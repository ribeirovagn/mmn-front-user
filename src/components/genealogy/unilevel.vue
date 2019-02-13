<template>
  <div class="content-i">
    <div class="content-box">
      <div class="element-wrapper">
        <h6 class="element-header">Genealogy Unilevel</h6>
        <div class="element-box">
          <h5 class="form-header">Genealogy</h5>
          <div class="table-responsive">
            <table class="table table-lightborder">
              <thead>
                <tr>
                  <th class="text-left">User</th>
                  <th class="text-left">Email</th>
                  <th class="text-left">Status</th>
                  <th class="text-left">Graduation</th>
                  <th class="text-center">Created At</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="children in genealogy.children">
                  <td class="text-left">{{ children.user.name }} <small>({{ children.user.username }})</small></td>
                  <td class="text-left">{{ children.user.email }}</td>
                  <td class="text-left">{{ children.status.name }}</td>
                  <td class="text-left">{{ children.resume.graduation.name }}</td>
                  <td class="text-center">{{ children.created_at | dateFormat }}</td>
                </tr>
              </tbody>
            </table>
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
      genealogy: null
    }
  },

  created () {
    this.getFamily()
  },

  methods: {
    getFamily: function () {
      this.$http.get('genealogy/family').then(response => {
        this.genealogy = response.data
      })
    }
  }

}

</script>
