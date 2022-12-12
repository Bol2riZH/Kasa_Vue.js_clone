<template>
  <ul>
    <li v-for="(tag, index) in tags" :key="index">{{ tag }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    tags: Array,
  },
};
</script>

<style scoped>
ul {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
li {
  white-space: nowrap;
  font-size: clamp(1rem, 2vw, 1.4rem);
  color: white;

  padding: 0.2rem 3rem;

  border-radius: 0.6rem;
  background-color: #ff6060;
}
@media screen and (min-width: 992px) {
  li {
    border-radius: 1rem;
  }
}
</style>
