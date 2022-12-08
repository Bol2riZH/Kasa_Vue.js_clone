<script setup>
import Home from './components/pages/Home.vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <Header />
  <router-view />
  <Footer />
  <!--  <Home />-->
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped></style>
