<script setup>
import data from '../../api/hosts.json';
import Carousel from '../Carousel.vue';
import Tag from '../Tag.vue';
import Rate from '../Rate.vue';
import CollapseCard from '../CollapseCard.vue';
</script>

<template>
  <section>
    <Carousel :pictures="host.pictures" />
    <header>
      <h2>{{ host.title }}</h2>
      <p>{{ host.location }}</p>
      <Tag :tags="host.tags" />
      <Rate :rating="host.rating" />
      <aside>
        <span>{{ host.host.name }}</span>
        <img :src="host.host.picture" alt="host face" />
      </aside>
    </header>
    <section>
      <CollapseCard>{{ host.description }}</CollapseCard>
      <CollapseCard>{{ host.equipments }}</CollapseCard>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Host',
  data() {
    return {
      host: data.find((host) => host.id === this.$route.params.id),
    };
  },
};
</script>

<style scoped></style>
