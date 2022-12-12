<script setup>
import Home from './components/pages/Home.vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <main>
    <Header />
    <router-view class="pages-view" />
  </main>
  <Footer />
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
main {
  max-width: 1440px;
  margin: 0 auto;
}
.pages-view {
  margin: 0 2rem;
}
</style>
