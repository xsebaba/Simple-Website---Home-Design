<template>
  <div class="head">
    <div>
      <h1>We will design your office</h1>
    </div>
    <div v-for="office in offices" :key="office.id" class="officedetails">
      <router-link :to="{name: 'OfficeDetails', params: { id: office.id }}">
        <h3> {{office.title}}</h3>
      </router-link>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Office',
  data(){
    return {
      offices: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/offices')
      .then((res) => res.json())
      .then(data => this.offices = data)
      .catch(err => console.log(err.massage))
    
  },
}
</script>
<style scoped>
.officedetails h3 {
  color: white;
  font-size: 24px;
  padding: 4px;
}
.officedetails h3:hover {
  color: #f985b5;
}

</style>