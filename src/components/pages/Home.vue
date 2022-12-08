<script setup>
import data from '../../api/hosts.json';
import Header from '../layout/Header.vue';
import Footer from '../layout/Footer.vue';
import HostCard from '../HostCard.vue';
</script>

<template>
  <Header />
  <section>
    <div>
      <img src="../../assets/images/bg-accueil.jpg" alt="paysage" />
      <p>Chez vous, partout et ailleurs</p>
    </div>
    <ul>
      <HostCard :hosts="hosts" />
    </ul>
  </section>
  <Footer />
</template>

<script>
export default {
  name: 'Home',
  data() {
    return { hosts: data };
  },
  created() {
    this.hosts = data;
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
