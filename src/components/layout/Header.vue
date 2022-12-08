<script setup>
import Navigation from '../Navigation.vue';
</script>

<template>
  <header>
    <div>
      <img src="../../assets/logo/logo.svg" alt="logo" />
    </div>
    <Navigation />
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 2rem;
}
img {
  height: clamp(4.7rem, 6vw, 6.8rem);
}
</style>
