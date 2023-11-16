<template>
  <div class="categories">
    <h1>Today's</h1>
    <h2>Flash Sales</h2>
    <div class="time">
      <CountDown />
    </div>
    <div class="dir">
      <div @click="x -= 200"  class="arr"></div>
      <div @click="x += 200" class="arr"></div>
    </div>
    <div ref="el" class="sales">
      <FlashSales />
    </div>
    <div class="view">View All Products</div>
    
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
    border: 3px solid blue;
    width: 100%;
    height: auto;
    padding: 50px;
}
h1 {
    border-left: 20px solid blue;
    width: auto;
    height: 60px;
    padding: 15px;
}
h2 {
    font-size: 40px;
    display: inline;
}
.time {
  border: 1px solid red;
  width: 300px;
  height: 70px;
  display: inline-block;
  margin-left: 70px;
}
.dir {
  border: 1px solid firebrick;
  width: 120px;
  height: 50px;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.arr {
  border: 2px solid greenyellow;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: pink;
}
.sales {
  border: 8px solid green;
  width: 100%;
  height: auto;
  margin: 30px auto;
  overflow: auto;
}
.view {
  border: 1px solid blue;
  width: 250px;
  height: auto;
  padding: 15px 60px;
  text-align: center;
  margin: 10px auto;

}

</style>