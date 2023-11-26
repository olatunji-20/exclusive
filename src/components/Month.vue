<template>
  <div class="categories">
    <h1>This Month</h1>
    <h2>Best Selling Products</h2>
    <div class="dir">
      <router-link to="/all-products">
        <button>View All</button>
      </router-link>
    </div>
    <div class="sales">
      <BestSelling />
    </div>
  </div>
</template>
  
<script>
import BestSelling from "./BestSelling.vue";

export default {
  name: "Month",
  setup() {},
  components: {
    BestSelling,
  },
};
</script>
  
<style scoped>
.categories {
  width: 100%;
  height: auto;
  padding: 5rem;
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
.dir {
  width: 7.5rem;
  height: 3.125rem;
  text-align: center;
  float: right;
}
button {
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: 0px;
  background: #db4444;
  color: white;
  border-radius: 4px;
}
button:hover {
  background: #e07575;
}
.sales {
  width: 100%;
  height: auto;
  margin: 1.875rem auto;
  overflow: auto;
}

@media screen and (max-width: 768px) {
  .categories {
    padding: 3.125rem 0.5rem;
    position: relative;
  }
  h2 {
    font-size: 2.1875rem;
  }
  .dir {
    position: absolute;
    bottom: 0;
    right: calc(50% - 60px);
    margin-top: 7.5rem;
  }
  .sales {
    width: 100%;
  }
}
</style>