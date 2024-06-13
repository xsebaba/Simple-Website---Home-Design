<template>
    <div class="head">
        <div v-if="office">
            <H1> {{ office.title }}</H1>
            <p>{{ office.details }}</p>

        </div>
        <div v-else>
            <h1>Loading ...</h1>
        </div>
        
    </div>

</template>
<script>


export default {
    props: ['id'],
    data(){
        return{
            office: null
        }
    },
    mounted() {
    fetch('http://localhost:3000/offices/' + this.id)
      .then((res) => res.json())
      .then(data => this.office = data)
      .catch(err => console.log(err.massage))
    }
}

</script>