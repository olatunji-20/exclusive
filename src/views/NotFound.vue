<template>
  <NavBar />
  <div class="large">
    <h1>404 NOT FOUND</h1>
    <p>The page you visited does not exist.</p>
    <router-link to="/">
      <button>BACK TO HOMEPAGE</button>
    </router-link>
  </div>
  <FootBar />
</template>

<script>
import FootBar from "../components/FootBar.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "NotFound",
  setup() {},
  components: { NavBar, FootBar },
};
</script>

<style scoped>
.large {
  width: 100%;
  height: auto;
  text-align: center;
  padding: 5rem 3.125rem;
}
h1 {
  font-size: 5rem;
}
button {
  padding: 0.9375rem 3.125rem;
  margin: 2.5rem auto;
  background: tomato;
}
</style>