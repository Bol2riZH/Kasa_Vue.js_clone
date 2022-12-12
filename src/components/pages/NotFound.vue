<template>
  <section className="{classes.container}">
    <h2>404</h2>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <button @click="this.$router.push({ name: 'Home' })">
      Retournez sur la page d'accueil
    </button>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
}
h2 {
  margin-top: 20rem;
  font-weight: 700;
  font-size: clamp(9.6rem, 15vw, 28.8rem);
}
p {
  text-align: center;
  font-size: clamp(1.8rem, 2vw, 3.6rem);
  margin-top: 1rem;
  margin-bottom: 13rem;
}
button {
  border: none;
  background: none;
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  text-decoration: underline;
}
button:hover {
  cursor: pointer;
}
</style>
