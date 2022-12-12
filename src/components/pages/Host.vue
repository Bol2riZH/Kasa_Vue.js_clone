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
      <div class="top">
        <h2>{{ host.title }}</h2>
        <p>{{ host.location }}</p>
        <Tag :tags="host.tags" />
      </div>
      <aside>
        <Rate :rating="host.rating" />
        <div class="host-info">
          <span>{{ host.host.name }}</span>
          <img :src="host.host.picture" alt="host face" />
        </div>
      </aside>
    </header>
    <section class="bottom">
      <CollapseCard :description="host.description" />
      <CollapseCard :equipments="host.equipments" />
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

<style scoped>
header {
  display: flex;
  flex-direction: column;
  margin: clamp(0rem, 1vw, 2.4rem) 0;
}
.top {
  margin-top: 1.5rem;
}
h2 {
  font-size: clamp(1.8rem, 2vw, 3.6rem);
}
p {
  margin: 0.5rem 0;
  font-size: clamp(1.4rem, 2vw, 1.8rem);
}
aside {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
}
.host-info {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}
span {
  flex: 0.5;
  word-wrap: normal;
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  text-align: right;
}
img {
  width: clamp(3.2rem, 6vw, 6.4rem);
  height: clamp(3.2rem, 6vw, 6.4rem);
  border-radius: 50%;
}
.bottom {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
@media screen and (min-width: 992px) {
  header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    white-space: nowrap;
  }
  aside {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-end;
    gap: 2rem;
  }
  .bottom {
    flex-direction: row;
    justify-content: space-between;
    gap: clamp(3rem, 4.5vw, 7.2rem);
  }
}
</style>
