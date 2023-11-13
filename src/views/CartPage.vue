<template>
  <NavBar />
  <Cart />
  <h1>CARTPAGE</h1>
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
h1 {
    margin: 200px;
}
</style>