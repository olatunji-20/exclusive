<template>
  <NavBar />
  <div class="large">
    <Cart />
  </div>
  <FootBar />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Cart from '../components/Cart.vue';
import FootBar from '../components/FootBar.vue';

export default {
    name: 'CartPage',
    components: {
    NavBar,
    FootBar,
    Cart
}
}
</script>

<style scoped>
.large {
  border: 6px solid palevioletred;
  width: 100%;
  height: auto;
  padding: 80px 50px;
}
</style>