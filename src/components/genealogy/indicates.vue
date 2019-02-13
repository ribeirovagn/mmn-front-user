<template>
  <div class="element-wrapper">
    <h6 class="element-header">Indicated for me</h6>
    <div class="element-box">
      <table class="table table-clean">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Name</th>
            <th>Email</th>
            <th>Side</th>
            <th>Created At</th>
            <th>Date Posicioned</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="indicated in indicators">
            <td><button class="btn btn-primary" v-on:click.prevent="changeSide(indicated)">Change side</button></td>
            <td>{{ indicated.user.name }}</td>
            <td>{{ indicated.user.email }}</td>
            <td>{{ side[indicated.side] }}</td>
            <td>{{ indicated.user.created_at | dateFormat }}</td>
            <td>{{ indicated.date_positioning | dateFormat }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>

export default {
  data () {
    return {
      indicators: [],
      side: [
        'LEFT',
        'RIGHT'
      ]
    }
  },
  created () {
    this.$http.get('genealogy/indicator').then( response => {
      this.indicators = response.data
      console.log(this.indicators);
    });
  },
  methods: {
    changeSide: function(indicated){
      this.$http.put('genealogy/change-side/' + indicated.user_id).then( response => {

        indicated.side = response.data.side

        this.$swal({
          title: 'Success!',
          text: response.data.message,
          type: 'success',
        });
      }, error => {
        this.$swal({
          title: 'Error!',
          text: error.data.error,
          type: 'error',
        });
      })
    }
  }
}

</script>
