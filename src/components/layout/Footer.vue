<template>
  <footer>
    <img src="../../assets/logo/logo-white.svg" alt="logo" />
    <p>© 2020 Kasa. All rights reserved</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  background: black;

  padding: 6.2rem 0;
  margin-top: 2rem;
}
img {
  margin-bottom: 2rem;
}
</style>
