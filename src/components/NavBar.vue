<template>
  <header>
    <div class="logo">
      <img src="/img/exclusive.svg" class="p-img" />
    </div>
    <nav class="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/signup">Sign Up</router-link></li>
      </ul>
    </nav>
    <div class="menu">
      <div class="search">
        <input v-on:input="search" v-model="searchText" placeholder="search" type="text" />
      </div>
      <router-link to="/wishlist">
        <div class="fave"></div>
      </router-link>
      <router-link to="/cart-page">
          <div class="cart">

          </div>
      </router-link>
    </div>
  </header>
  <div v-if="showBoard" class="search-board">
    <p v-for="product in filteredProducts" :key="product.id"><router-link :to="'/product-page/' + `${product.id}`"> {{ product.productName }} </router-link></p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useProductStore } from '../stores/productStore';

export default {
  name: 'NavBar',
  setup() {
    const searchText = ref("");
    const showBoard = ref(false);


    const productStore = useProductStore();
    productStore.getProducts();

    const search = () => {
      showBoard.value = true;
      // console.log("AAAAAAAAAHHHHHHHHHH")
    }


    const filteredProducts = computed(() => {
      return productStore.products.filter((product) =>
      product.productName.toLowerCase().includes(searchText.value.toLowerCase()))
    })
    return {
      searchText,
      filteredProducts,
      showBoard,
      search
    }
  }

}
</script>

<style scoped>
header {
    border: 2px solid green;
    width: 100%;
    height: 100px;
    padding: 25px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.logo {
  border: 1px solid pink;
  width: 200px;
  height: 50px;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.nav {
  border: 1px solid red;
  width: auto;
  height: 50px;
}
ul li {
  display: inline-block;
  padding: 0px 20px;
}
.menu {
  border: 2px solid blue;
  width: 320px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.search {
  border: 2px solid fuchsia;
  height: 40px;
  width: 200px;
}
input {
  width: 100%;
  height: 100%;
  border: 4px solid tomato;
  text-indent: 10px;
}
.fave {
  border: 1px solid green;
  height: 40px;
  width: 40px;
}
.cart {
  border: 1px solid green;
  height: 40px;
  width: 40px;
}
.search-board {
  border: 4px solid brown;
  width: 100%;
  height: auto;
  z-index: 9;
  background: hotpink;
  position: absolute;
}
</style>