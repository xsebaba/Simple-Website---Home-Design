<template>
    <div id="app">
      <div class="container">
        <NavComponent />
       
        <router-view />
      </div>
      
    </div>
</template>
  
<script>
  import NavComponent from './components/NavComponent.vue'
  export default {
    components: { NavComponent },
    name: 'App',
  }
</script>

<style>
/* Google Font  */
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@1,500;1,600&family=Montserrat:wght@600;700&display=swap");


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  list-style: none;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
}
::selection {
  background-color: #444;
  color: #ddd;
}

.container {
  width: 100%;
  min-height: 120vh;
  background-image: url(./assets/images/hero.jpg);
  background-position: center;
  background-size: cover;
}

.head {
  text-align: center;
  justify-content: center;
  color: white;
  margin-top: 10%;
}
.head h1 {
  font-size: 86px;
  padding-bottom: 25px;
  line-height: 1.2em;
}
.head p {
  line-height: 1.4;
  font-family: "Libre Franklin", sans-serif;
  font-weight: 300 !important;
  font-size: 23px;
  letter-spacing: 1px;
  margin-bottom: 3%;
}
button {
  padding: 15px 40px;
  color: white;
  cursor: pointer;
  font-weight: bold !important;
  font-size: 24px;
  border-radius: 5px;
  border-style: hidden;
  border: 2px solid rgba(221, 221, 221, 0.5);
  background: linear-gradient(110deg, #170168 40%, #833556 60%);
}
button:hover{
  border-style: solid;
  border-color: #ddd;
}

/* Responsive  */
@media (max-width: 636px) {
.head h1 {
  font-size: 70px;
}
.head p {
  font-size: 16px;
  padding-bottom: 5%;
}
button {
  padding: 8px 20px;
  font-size: 16px;
}
}
</style>