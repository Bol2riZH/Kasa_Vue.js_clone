<template>
  <section>
    <div class="arrows">
      <img
        :class="['left-arrow', { hidden: pictures.length === 1 }]"
        src="../assets/icons/arrow_back_ios-24px%202.svg"
        alt="arrow to slide left"
        @click="sliderLeft"
      />
      <img
        :class="['right-arrow', { hidden: pictures.length === 1 }]"
        src="../assets/icons/arrow_back_ios-24px%202.svg"
        alt="arrow to slide right"
        @click="sliderRight"
      />
    </div>
    <ul>
      <li>
        <img class="host-picture" :src="pictures[picture]" alt="host place" />
      </li>
    </ul>
    <span>{{ picture + 1 }}/{{ pictures.length }}</span>
  </section>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    pictures: Array,
  },
  data() {
    return {
      slidingRight: false,
      slidingLeft: false,
      picture: 0,
    };
  },
  methods: {
    sliderRight() {
      this.slidingRight = true;
      setTimeout(() => (this.slidingRight = false), 100);
      this.picture === this.pictures.length - 1
        ? (this.picture = 0)
        : this.picture++;
    },
    sliderLeft() {
      this.slidingLeft = true;
      setTimeout(() => (this.slidingLeft = false), 100);
      this.picture === this.pictures.length - 1
        ? (this.picture = 0)
        : this.picture--;
    },
  },
};
</script>

<style scoped>
section {
  overflow: hidden;
  position: relative;
}
.arrows {
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 40%;
  width: 100%;
  height: clamp(2.4rem, 4vw, 8rem);
}
.left-arrow {
  rotate: 90deg;
}
.left-arrow:hover {
  cursor: pointer;
}
.right-arrow {
  right: 0;
  rotate: -90deg;
}
.right-arrow:hover {
  cursor: pointer;
}
li {
  width: 100%;
}
.host-picture {
  object-fit: cover;
  width: 100%;
  min-height: 25rem;
  max-height: 41rem;
  border-radius: 1rem;
}
span {
  display: none;
}
@media screen and (min-width: 768px) {
  span {
    display: block;
    position: absolute;
    bottom: 1.7rem;
    right: 50%;
    font-size: 1.8rem;
    color: white;
  }
}
.hidden {
  display: none;
}
</style>
