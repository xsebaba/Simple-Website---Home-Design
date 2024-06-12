<template>
  <div class="head">
    <div>
      <h1>We will design your office</h1>
    </div>
    <div v-for="office in offices" :key="office.id" class="officedetails">
      <router-link :to="{name: 'OfficeDetails', params: { id: office.title }}">
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
      offices: [
        {title: 'Large Office', id: 1, details: 'Large spaces are allways a chalange for the designers. Our main purpose is to make them reliable and cosy'},
        {title: 'Small Office', id: 2, details: 'Small spaces are our favourite. Regardles if it is a small open-space, or place for only one employee'},
        {title: 'Old buildings', id: 3, details: 'We love to change old buildings and bring new lif to the interior'},
      ]
    }
  }
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