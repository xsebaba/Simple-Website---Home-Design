<template>
    <nav>
          <input type="checkbox" id="check" />
          <label for="check" id="check-btn">
            <i class="fas fa-bars"></i>
          </label>
          <div class="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" xml:space="preserve" preserveAspectRatio="xMidYMid meet">
              <path fill="#ddd" d="M64 110.989a2.004 2.004 0 0 1-1.445-.617l-62-64.827A2 2 0 0 1 2 42.163h124a2 2 0 0 1 1.445 3.382l-62 64.827a2 2 0 0 1-1.445.617zM6.68 46.163 64 106.096l57.319-59.933H6.68z"/>
              <path fill="#ddd" d="M64 110.989a2 2 0 0 1-1.843-1.223L34.826 44.939l3.686-1.554L64 103.842l22.347-52.996 3.686 1.554-24.189 57.367A2.002 2.002 0 0 1 64 110.989z"/>
              <g>
                <path fill="#ddd" d="M126 46.351H2a2 2 0 0 1-1.66-3.118l17.062-25.34a2.001 2.001 0 0 1 1.659-.883h89.883c.666 0 1.287.331 1.659.884l17.055 25.34A2 2 0 0 1 126 46.351zm-120.242-4h116.485l-14.362-21.34H20.126L5.758 42.351z"/>
                <path fill="#ddd" d="m38.036 45.811-2.734-2.92 27.331-25.596h2.734L85.76 36.391l-2.735 2.92L64 21.495z"/>
                <path fill="#ddd" d="m25.474 24.775 12.622 18.447-3.301 2.26-12.623-18.448zM126 46.351H91.563a2 2 0 0 1-1.651-3.129l17.338-25.34a2 2 0 0 1 1.65-.871c.666 0 1.332.331 1.704.884l17.055 25.34A2 2 0 0 1 126 46.351zm-30.646-4h26.889L108.909 22.54 95.354 42.351z"/>
              </g>
            </svg>
          </div>
          <div class="navlinks">
            <router-link :to="{ name: 'Home'}">Home</router-link>
            <router-link :to="{ name:'AboutUs'}">About us</router-link>
            <router-link :to="{ name:'Contact'}">Contact</router-link>
            <router-link :to="{ name:'Office'}">Office</router-link>
            <router-link :to="{ name:'Outdoors'}">Outdoors</router-link>
            <router-link :to="{ name:'WhatIs'}">What is design</router-link>
          </div>
        </nav>
</template>
<script>
 export default {
    name: 'NavComponent',
 }

</script>

<style scoped>
nav {
  display: flex;
  padding: 2.5% 5%;
}
nav img {
  width: 180px;
  height: 36px;
  cursor: pointer;
}
.navlinks {
  text-align: right;
  flex: 1;
}
.navlinks a {
  display: inline-block;
  padding: 6px 15px;
  color: white;
  font-size: 16px;
  padding: 4px;
}
.navlinks a:hover {
  color: #f985b5;
}

.navlinks a::after {
  content: "";
  width: 0;
  height: 2px;
  display: block;
  transition: width 0.6s;
  background-color: #f985b5;
  
}
.navlinks a:hover::after {
  width: 100%;
}

.navlinks a.router-link-exact-active{
  color:#f985b5;
}

.svg-container{
  width: 60px;
  height: 60px;
}

.svg-container svg{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

#check-btn {
font-size: 20px;
color: white;
float: right;
flex: 1;
margin-right: 40px;
cursor: pointer;
display: none;
}
#check {
display: none;
}

.hidden {
display: none;
}
.visible {
display: block;
}


/* Responsive  */
@media (max-width: 858px) {

.navlinks {
  position: fixed;
  width: 100%;
  height: 82vh;
  background-color: #c50529;
  top: 80px;
  left: -100%;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
}
.navlinks a {
  display: block;
  margin: 30px 0;
  line-height: 30px;
  color: white;
  font-size: 20px;
}
#check-btn {
  display: block;
  color: #ddd;
}
#check:checked ~ .navlinks {
left: 0;
}
}
</style>