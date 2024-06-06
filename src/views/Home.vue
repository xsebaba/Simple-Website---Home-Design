<template>    
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

export default {
  name: 'Home',

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

</style>