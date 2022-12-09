<template>
  <nav>
    <router-link to="/">ACCUEIL</router-link>
    <router-link to="/about">A PROPOS</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 2rem;
  word-wrap: normal;
  font-size: clamp(1.4rem, 2vw, 2.4rem);
  margin-left: clamp(0rem, 1vw, 6.7rem);
}
a:hover {
  cursor: pointer;
}
.router-link-active {
  text-decoration: underline;
}
</style>
