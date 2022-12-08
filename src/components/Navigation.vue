<template>
  <ul>
    <li :class="{ active: isActive }" @click="onClick()">ACCUEIL</li>
    <li :class="{ active: !isActive }" @click="onClick()">A PROPOS</li>
  </ul>
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
ul {
  display: flex;
  gap: 2rem;
  word-wrap: normal;
  font-size: clamp(1.4rem, 2vw, 2.4rem);
  margin-left: clamp(0rem, 1vw, 6.7rem);
}
li:hover {
  cursor: pointer;
}
.active {
  text-decoration: underline;
}
</style>
