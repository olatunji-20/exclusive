<template>
  <header>
    <div class="logo">
      <img src="/img/exclusive.svg" class="p-img" />
    </div>
    <nav class="nav">
      <ul>
        <li><router-link to="/" class="rlink">Home</router-link></li>
        <li><router-link to="/contact" class="rlink">Contact</router-link></li>
        <li><router-link to="/about" class="rlink">About</router-link></li>
        <router-link to="/signup" class="rlink"><li>Sign Up</li></router-link>
      </ul>
    </nav>
    <div class="menu">
      <div class="search">
        <input v-on:input="search" v-model="searchText" placeholder="search" type="text" />
        <div v-if="showClose" @click="closeSearch" class="cl">S</div>
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
  <div v-if="showBoard" class="search-board" v-on:click-outside="closeSearch">
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
    const showClose = ref(false);


    const productStore = useProductStore();
    productStore.getAllProducts();

    const search = () => {
      showBoard.value = true;
      showClose.value = true;
    }

    const closeSearch = () => {
      showBoard.value = false;
      showClose.value = false;
    }


    const filteredProducts = computed(() => {
      return productStore.allProducts.filter((product) =>
      product.productName.toLowerCase().includes(searchText.value.toLowerCase()))
    })
    return {
      searchText,
      filteredProducts,
      showBoard,
      search,
      closeSearch,
      showClose
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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
input {
  width: 100%;
  height: 100%;
  border: 2px solid tomato;
  text-indent: 10px;
}
.cl {
  border: 4px solid green;
  width: 30px;
  height: 30px;
  cursor: pointer;
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