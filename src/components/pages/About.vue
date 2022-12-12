<script setup>
import data from '../../api/about.json';
import CollapseCard from '../CollapseCard.vue';
</script>

<template>
  <section>
    <div class="img">
      <img src="../../assets/images/bg-aPropos.jpg" alt="montagne" />
    </div>
    <div class="container">
      <CollapseCard :about="about.trust" class="list" />
      <CollapseCard :about="about.respect" class="list" />
      <CollapseCard :about="about.service" class="list" />
      <CollapseCard :about="about.security" class="list" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  data() {
    return { about: data };
  },
};
</script>

<style scoped>
.img {
  margin-bottom: 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  max-height: 23rem;
}
img {
  position: relative;
  z-index: -1;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 23rem;
  border-radius: 1rem;
}
.container {
  display: flex;
  flex-direction: column;
}
@media screen and (min-width: 992px) {
  .container {
    width: 80%;
  }
}
.list {
  margin-bottom: 2rem;
}
</style>
