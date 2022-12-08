<template>
  <ul>
    <li>ACCUEIL</li>
    <li>A PROPOS</li>
  </ul>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped>
ul {
  display: flex;
  gap: 2rem;
}
li:hover {
  cursor: pointer;
}
</style>
