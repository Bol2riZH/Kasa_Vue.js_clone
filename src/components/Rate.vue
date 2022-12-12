<template>
  <div class="rate">
    <img
      v-for="(rate, index) in [...Array(+rating)]"
      :key="index"
      src="../assets/icons/fullStar.svg"
      alt="rate"
    />
    <img
      v-for="(rate, index) in 5 - [...Array(+rating)].length"
      :key="index"
      src="../assets/icons/outlineStar.svg"
      alt="rate"
    />
  </div>
</template>

<script>
export default {
  name: 'Rate',
  props: {
    rating: String,
  },
};
</script>

<style scoped>
.rate {
  display: flex;
  width: clamp(1.8rem, 2.5vw, 3.6rem);
  height: clamp(1.8rem, 2.5vw, 3.6rem);
}
@media screen and (min-width: 992px) {
  .rate {
    justify-content: flex-end;
  }
}
</style>
