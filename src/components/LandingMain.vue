<template>
    <NavComponent />
        
        <div class="head">
          <h1>
            Your space <br />
            Felt So Good!
          </h1>
          <p>Best design for your space and living</p>
          <button @click="toggleVisibility">FIND YOUR STYLE</button>
          <p :class="visibilityClass">Check what we can do for you and create design way beyond your expectations.</p>
        </div>
      
</template>

<script>
  import NavComponent from './NavComponent.vue'
  export default {
    name: 'LandingMain',
    components: { NavComponent },
    data() {
    return {
        isVisible: false
      }
    },
    computed: {
      visibilityClass() {
        return this.isVisible ? 'visible' : 'hidden';
      }
    },
    methods: {
      toggleVisibility() {
        this.isVisible = !this.isVisible;
      }
    }
  }

</script>
<style>
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

@media (max-width: 858px) {
  #check-btn {
    display: block;
    color: #ddd;
  }
  #check:checked ~ ul {
  left: 0;
}
}
</style>