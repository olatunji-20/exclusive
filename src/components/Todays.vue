<template>
  <br />
  <div class="categories">
    <h1>Today's</h1>
    <h2>Flash Sales</h2>
    <div class="time">
      <CountDown />
    </div>
    <div class="dir">
      <div @click="x -= 500" class="arr">
        <i class="material-symbols-outlined font-inc">arrow_back</i>
      </div>
      <div @click="x += 500" class="arr">
        <i class="material-symbols-outlined font-inc">arrow_forward</i>
      </div>
    </div>
    <div class="sales">
      <div ref="el" class="naham">
        <FlashSales />
      </div>
    </div>
    <div class="view">
      <router-link to="/all-products">
        <button>View All Products</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useScroll } from "@vueuse/core";
import FlashSales from "../components/FlashSales.vue";
import CountDown from "./CountDown.vue";

export default {
  name: "Todays",
  setup() {
    const el = ref(null);

    const { x, y } = useScroll(el, {
      behavior: "smooth",
    });

    return {
      el,
      x,
      y,
    };
  },
  components: {
    FlashSales,
    CountDown,
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
.time {
  width: 18.75rem;
  height: 4.375rem;
  display: inline-block;
  margin-left: 4.375rem;
}
.dir {
  width: 7.5rem;
  height: 3.125rem;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.arr {
  width: 3.125rem;
  height: 3.125rem;
  padding: 0.25rem 0.125rem;
  border-radius: 50%;
  background: #f5f5f5;
  cursor: pointer;
}
.arr:hover {
  background: #cccccc;
}
.sales {
  width: 100%;
  height: auto;
  margin: 1.875rem auto;
}
.naham {
  height: auto;
  width: 100%;
  overflow: hidden;
}
.view {
  width: 250px;
  height: 45px;
  text-align: center;
  margin: 0.625rem auto;
}
button {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border: 0px;
  background: #db4444;
  color: white;
  border-radius: 4px;
}
button:hover {
  background: #e07575;
}

.font-inc {
  font-size: 2.8125rem;
}

@media screen and (max-width: 768px) {
  .categories {
    padding: 3.125rem 0.5rem;
  }
  h2 {
    font-size: 2.1875rem;
  }
  .time {
    display: none;
  }
  .sales {
    width: 100%;
  }
}
</style>