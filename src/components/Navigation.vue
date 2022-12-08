<template>
  <nav>
    <!--    <li :class="{ active: isActive }" @click="onClick()">ACCUEIL</li>-->
    <!--    <li :class="{ active: !isActive }" @click="onClick()">A PROPOS</li>-->
    <router-link to="/">ACCUEIL</router-link>
    <router-link to="/about">A PROPOS</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    onClick() {
      this.isActive = !this.isActive;
    },
  },
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
