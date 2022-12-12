<template>
  <li
    v-for="host in hosts"
    :key="host.id"
    class="card"
    @click="gotToHost(host.id)"
  >
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
  methods: {
    gotToHost(id) {
      this.$router.push('/host/' + id);
    },
  },
};
</script>

<style scoped>
.card {
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  color: #fff;
  height: 255px;
  background: linear-gradient(#ff6060 50%, #743939);
  border-radius: 1rem;
  transition: scale 100ms ease-in-out;
}
.card:hover {
  scale: 102%;
  cursor: pointer;
}
h2 {
  position: absolute;
  font-size: 1.8rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
}
@media screen and (min-width: 768px) {
  h2 {
    width: 32rem;
  }
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
