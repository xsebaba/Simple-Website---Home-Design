<template>
    <div class="head">
      <h1>
        Sorry, there is no such page 404
      </h1>

      <button @click="back">Go back</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
    methods: {
        back() {
            this.$router.go(-1)
        },

    }
  }
  </script>