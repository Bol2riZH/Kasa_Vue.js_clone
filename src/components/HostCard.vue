<template>
  <li v-for="host in hosts" :key="host.id">
    <h2>{{ host.title }}</h2>
    <img :src="host.cover" alt="host place" />
  </li>
</template>

<script>
export default {
  name: 'HostCard',
  props: {
    hosts: Array,
  },
};
</script>

<style scoped></style>
