<script setup>
import data from '../../api/hosts.json';
import HostCard from '../HostCard.vue';
</script>

<template>
  <section>
    <div class="subtitle">
      <p>Chez vous, partout et ailleurs</p>
    </div>
    <ul>
      <HostCard :hosts="hosts" />
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return { hosts: data };
  },
};
</script>

<style scoped>
section {
  max-width: 1440px;
  margin: 0 auto;
}
.subtitle {
  overflow: hidden;
  background-image: url('../../assets/images/bg-accueil.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

p {
  color: white;
  font-size: clamp(2.4rem, 3vw, 4.8rem);
  font-weight: 500;

  background: rgba(0, 0, 0, 0.3);

  padding: 3.4rem 1.6rem;
}
@media screen and (min-width: 992px) {
  p {
    text-align: center;
    padding: clamp(3rem, 4vw, 7.8rem) 0;
  }
}

section {
  margin: 0 2rem;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
@media screen and (min-width: 768px) {
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;

    background-color: #f7f7f7;
    border-radius: 1rem;
    padding: 2rem;
  }
}
@media screen and (min-width: 1440px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 6rem;
    grid-row-gap: 5rem;
    padding: 5.6rem 5rem;
  }
}
</style>
