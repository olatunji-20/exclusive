<template>
  <br />
  <div class="categories">
    <h1>Today's</h1>
    <h2>Flash Sales</h2>
    <div class="time">
      <CountDown />
    </div>
    <div class="dir">
      <div @click="x -= 500"  class="arr">
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
import { ref } from 'vue'
import { useScroll } from '@vueuse/core';
import FlashSales from '../components/FlashSales.vue';
import CountDown from './CountDown.vue';

export default {
    name: "Todays",
    setup() {
      const el = ref(null);

      const { x, y } = useScroll(el, {
        behavior: 'smooth'
      });


      return {
        el,
        x,
        y
      }
    },
    components: {
    FlashSales,
    CountDown
}

}
</script>

<style scoped>
.categories {
    /* border: 6px solid red; */
    width: 100%;
    height: auto;
    padding: 80px;
}
h1 {
    border-left: 20px solid #DB4444;
    width: auto;
    height: 60px;
    padding: 15px;
}
h2 {
    font-size: 40px;
    display: inline;
}
.time {
  /* border: 1px solid red; */
  width: 300px;
  height: 70px;
  display: inline-block;
  margin-left: 70px;
}
.dir {
  /* border: 1px solid firebrick; */
  width: 120px;
  height: 50px;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.arr {
  /* border: 2px solid greenyellow; */
  width: 50px;
  height: 50px;
  padding: 4px 2px;
  border-radius: 50%;
  background: #F5F5F5;
  cursor: pointer;
}
.arr:hover {
  background: #cccccc;
}
.sales {
  /* border: 3px solid green; */
  width: 100%;
  height: auto;
  margin: 30px auto;
  overflow: auto;
}
.naham {
  /* border: 3px solid greenyellow; */
  height: auto;
  width: 100%;
  overflow: auto;
}
.view {
  /* border: 1px solid blue; */
  width: 250px;
  height: 45px;
  text-align: center;
  margin: 10px auto;
}
button {
  cursor: pointer;
  width: 100%;
  height: 100%;
  border: 0px;
  background: #DB4444;
  color: white;
  border-radius: 4px;
}
button:hover {
  background: #E07575;
}

.font-inc {
    font-size: 45px;
}

@media screen and (max-width: 768px) {
  .categories {
    padding: 50px 8px;
  }
  h2 {
    font-size: 35px;
  }
  .time {
    display: none;
  }
  .sales {
    width: 100%;
  }
}

</style>