<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img src="/img/exclusive.svg" class="p-img" />
      </router-link>
    </div>
    <nav class="nav">
      <ul>
        <li><router-link to="/" class="rlink">Home</router-link></li>
        <li><router-link to="/contact" class="rlink">Contact</router-link></li>
        <li><router-link to="/about" class="rlink">About</router-link></li>
        <li><router-link to="/signup" class="rlink">Sign Up</router-link></li>
      </ul>
    </nav>
    <div class="menu">
      <div class="search">
        <input
          v-on:input="search"
          v-model="searchText"
          placeholder="search"
          type="text"
        />
        <div v-if="showClose" @click="closeSearch" class="cl">
          <i class="material-symbols-outlined">search_off</i>
        </div>
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
    <div @click="toggleMenu" class="small-menu">
      <i v-if="showMenu" class="material-symbols-outlined font-inc">close</i>
      <i v-else class="material-symbols-outlined font-inc">menu</i>
      <CartCard />
    </div>
  </header>
  <div v-if="showBoard" class="search-board" v-on:click-outside="closeSearch">
    <p v-for="product in filteredProducts" :key="product.id">
      <router-link class="rlink" :to="'/all-product-page/' + `${product.id}`">
        {{ product.productName }}
      </router-link>
    </p>
  </div>
  <div v-if="showMenu" class="menu-board">
    <ul>
      <li><router-link class="rlink" to="/">Home</router-link></li>
      <li><router-link class="rlink" to="/contact">Contact</router-link></li>
      <li><router-link class="rlink" to="/about">About</router-link></li>
      <li><router-link class="rlink" to="/signup">Sign Up</router-link></li>
      <li><router-link class="rlink" to="/cart-page">Cart</router-link></li>
      <li><router-link class="rlink" to="/wishlist">Wishlist</router-link></li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useProductStore } from "../stores/productStore";
import CartCard from "./CartCard.vue";

export default {
  name: "NavBar",
  setup() {
    const searchText = ref("");
    const showBoard = ref(false);
    const showClose = ref(false);
    const showMenu = ref(false);

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
      return productStore.allProducts.filter((product) =>
        product.productName
          .toLowerCase()
          .includes(searchText.value.toLowerCase())
      );
    });

    const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };
    return {
      searchText,
      filteredProducts,
      showBoard,
      search,
      closeSearch,
      showClose,
      showMenu,
      toggleMenu,
    };
  },
  components: { CartCard },
};
</script>

<style scoped>
header {
  border-bottom: 1px solid #808080;
  width: 100%;
  height: 7rem;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.logo {
  width: 200px;
  height: 50px;
}
.p-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.nav {
  width: auto;
  height: 3.125rem;
}
ul li {
  display: inline-block;
  padding: 0px 1.25rem;
}
.menu {
  width: 20rem;
  height: 2.75rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.font-inc {
  font-size: 1.875rem;
  font-weight: bolder;
}
.search {
  height: 2.5rem;
  width: 12.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
input {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  border: 1px solid #f5f5f5;
  text-indent: 0.625rem;
  border-radius: 0.3125rem;
}
.cl {
  border: 1px solid #cccccc;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  background: #f5f5f5;
  cursor: pointer;
}
.fave {
  height: 2.1875rem;
  width: 2.1875rem;
  border-radius: 50%;
  padding: 0.3125rem 0.25rem;
}
.cart {
  height: 2.1875rem;
  width: 2.1875rem;
  border-radius: 50%;
  padding: 0.3125rem 0.25rem;
}
.small-menu {
  width: 1.875rem;
  height: 1.875rem;
  margin-right: 1.25rem;
  display: none;
}
.search-board {
  border: 1px solid #808080;
  width: 100%;
  padding: 1.25rem 0.625rem;
  height: auto;
  z-index: 9;
  background: #f5f5f5;
  position: absolute;
}
.menu-board {
  width: 15.625rem;
  height: 25rem;
  position: absolute;
  right: 0;
  background: #f5f5f5;
  z-index: 10;
}
.menu-board ul li {
  list-style-type: none;
  line-height: 3.125rem;
  display: block;
}

@media screen and (max-width: 768px) {
  header {
    justify-content: space-between;
    padding-left: 1.25rem;
  }
  .nav {
    display: none;
  }
  .menu {
    display: none;
  }
  .small-menu {
    display: inline-block;
  }
}
</style>