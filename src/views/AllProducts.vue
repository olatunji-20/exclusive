<template>
  <NavBar />
  <section class="all-products">
    <h1>ALL PRODUCTS ({{ productStore.allProducts.length }})</h1>
    <div class="all">
      <Preloader v-if="productStore.isLoading" />
      <All v-else :allProducts="displayedPosts" />

    </div>
    <div class="page">
      <vue-awesome-paginate
      :total-items="productStore.allProducts.length"
      :items-per-page="perPage"
      v-model="currentPage"
      :on-click="onClickHandler"
    />
    </div>

  </section>
  <FootBar />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FootBar from '../components/FootBar.vue'
import All from '../components/All.vue';

import { useProductStore } from '../stores/productStore';
import { ref, computed } from 'vue';
import Preloader from '../components/Preloader.vue';

export default {
    name: 'AllProducts',
    setup() {
      const currentPage = ref(1);
      const perPage = ref(10);
      const onClickHandler = (page) => {
        console.log(page)
      }

        const productStore = useProductStore();
        productStore.getAllProducts();


        const displayedPosts = computed(() => {
          let startIndex = perPage.value * (currentPage.value - 1);
          let endIndex = startIndex + perPage.value;
          return productStore.allProducts.slice(startIndex, endIndex);
        })

        return {
            productStore,
            currentPage,
            perPage,
            onClickHandler,
            displayedPosts
        }
    },
    components: {
    NavBar,
    FootBar,
    All,
    Preloader
}

}
</script>

<style>
.all-products {
  /* border: 4px solid firebrick; */
  width: 100%;
  height: auto;
  padding: 80px 50px;
}
.all {
  /* border: 3px solid blue; */
  width: 100%;
  height: auto;
}
.page {
  border: 2px solid darkblue;
  width: 200px;
  height: auto;
  margin: 40px auto 10px;
  text-align: center;
}
.pagination-container {
  display: flex;
  column-gap: 10px;
  border: 2px solid purple;
  margin: 0px auto;
}
.paginate-buttons {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #0063f7;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}


@media screen and (max-width: 768px) {
  .all-products {
    padding: 20px 5px;
  }
  .all {
    overflow: auto;
  }
}
</style>