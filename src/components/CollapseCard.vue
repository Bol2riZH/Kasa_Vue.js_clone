<template>
  <section>
    <div class="top" @click="collapse = !collapse">
      <h2>{{ description ? 'Description' : 'Equipements' }}</h2>
      <img
        src="../assets/icons/arrow_back_ios-24px%202.svg"
        alt="arrow"
        :class="collapse && 'rotate'"
      />
    </div>
    <p v-if="description" :class="collapse && 'hidden'">{{ description }}</p>
    <ul v-if="equipments" :class="collapse && 'hidden'">
      <li v-for="(equipment, index) in equipments" :key="index">
        {{ equipment }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'CollapseCard',
  props: {
    description: String,
    equipments: Array,
  },
  data() {
    return {
      collapse: true,
    };
  },
};
</script>

<style scoped>
section {
  width: 100%;
  overflow: hidden;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff6060;
  border-radius: 0.6rem;
  padding: clamp(0.5rem, 1vw, 1.3rem) clamp(1rem, 2vw, 2rem);
}
.top:hover {
  cursor: pointer;
}
h2 {
  font-size: clamp(1.3rem, 2.2vw, 2.4rem);
  color: white;
}
img {
  rotate: 180deg;
  width: clamp(1.8rem, 2vw, 3.2rem);
  height: clamp(1.8rem, 2vw, 3.2rem);
}
.rotate {
  rotate: 0deg;
}
ul,
p {
  animation: displayDropdown 150ms ease-in-out;
  position: relative;
  bottom: 0.5rem;
  z-index: -1;

  font-size: clamp(1.2rem, 2.2vw, 2.4rem);
  font-weight: 400;

  padding: clamp(2rem, 2vw, 3.6rem) clamp(1rem, 2vw, 1.8rem);

  background-color: #f7f7f7ff;
  border-radius: 0.6rem;
}
.hidden {
  display: none;
}
</style>
