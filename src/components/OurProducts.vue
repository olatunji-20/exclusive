<template>
  <div class="categories">
    <h1>Our Products</h1>
    <h2>Explore Our Products</h2>
    <div class="sales">
      <Explore />
    </div>
    <div class="view">
      <router-link to="/all-products">
        <button>View All Products</button>
      </router-link>
    </div>
  </div>
</template>
  
  <script>
import Explore from "./Explore.vue";

export default {
  name: "OurProducts",
  setup() {},
  components: {
    Explore
  }
};
</script>
  
  <style scoped>
.categories {
  width: 100%;
  height: auto;
  padding: 5rem 6.25rem;
}
h1 {
  border-left: 1.25rem solid #db4444;
  width: auto;
  height: 3.75rem;
  padding: 0.9375rem;
}
h2 {
  font-size: 2.5rem;
  display: inline;
}
.sales {
  width: 100%;
  height: auto;
  margin: 1.875rem auto;
}
.view {
  width: 15.625rem;
  height: 3.125rem;
  text-align: center;
  margin: 0.625rem auto;
}
button {
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: #db4444;
  color: white;
  border: 0px;
  border-radius: 4px;
}
button:hover {
  background: #e07575;
}

@media screen and (max-width: 768px) {
  .categories {
    padding: 3.125rem 0.5rem;
  }
  h2 {
    font-size: 2.1875rem;
  }
  .sales {
    overflow: auto;
  }
}
</style>