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
        <div v-if="showClose" @click="closeSearch" class="cl"><i class="material-symbols-outlined">search_off</i></div>
      </div>
      <router-link to="/wishlist">
        <div class="fave">
          <i class="material-symbols-outlined">favorite</i>
        </div>
      </router-link>
      <router-link to="/cart-page" class="rlink">
          <div class="cart">
            <i class="material-symbols-outlined">shopping_cart</i>
            <CartCard />
          </div>
      </router-link>
    </div>
  </header>
  <div v-if="showBoard" class="search-board" v-on:click-outside="closeSearch">
    <p v-for="product in filteredProducts" :key="product.id"><router-link :to="'/all-product-page/' + `${product.id}`"> {{ product.productName }} </router-link></p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useProductStore } from '../stores/productStore';
import CartCard from './CartCard.vue';

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
        };
        const closeSearch = () => {
            showBoard.value = false;
            showClose.value = false;
        };
        const filteredProducts = computed(() => {
            return productStore.allProducts.filter((product) => product.productName.toLowerCase().includes(searchText.value.toLowerCase()));
        });
        return {
            searchText,
            filteredProducts,
            showBoard,
            search,
            closeSearch,
            showClose
        };
    },
    components: { CartCard }
}
</script>

<style scoped>
header {
    border-bottom: 2px solid green;
    width: 100%;
    height: 100px;
    padding: 25px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.logo {
  /* border: 1px solid pink; */
  width: 200px;
  height: 50px;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.nav {
  /* border: 1px solid red; */
  width: auto;
  height: 50px;
}
ul li {
  display: inline-block;
  padding: 0px 20px;
}
.menu {
  /* border: 2px solid blue; */
  /* background: blue; */
  width: 320px;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.search {
  /* border: 1px solid black; */
  /* background: #F5F5F5; */
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
  background: #F5F5F5;
  border: 1px solid #F5F5F5;
  text-indent: 10px;
  border-radius: 5px;
}
.cl {
  border: 1px solid #CCCCCC;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #F5F5F5;
  cursor: pointer;
}
.fave {
  /* border: 2px solid green; */
  height: 35px;
  width: 35px;
  border-radius: 50%;
  padding: 5px 4px;
}
.cart {
  /* border: 2px solid green; */
  height: 35px;
  width: 35px;
  border-radius: 50%;
  padding: 5px 4px;
}
.search-board {
  border: 4px solid brown;
  width: 100%;
  padding: 20px 10px;
  height: auto;
  z-index: 9;
  background: hotpink;
  position: absolute;
}

@media screen and (max-width: 768px) {
  header {
    justify-content: space-between;
    padding-left: 20px;
  }
  .nav {
    display: none;
  }



}


@media screen and (max-width: 480px) {
  .menu {
    display: none;
  }
}
</style>