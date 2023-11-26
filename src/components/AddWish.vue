<template>
  <div @click="wishStore.addToWish({ product, quantity })" class="www">
    <i class="material-symbols-outlined">visibility</i>
  </div>
</template>
  
  <script>
import { useWishStore } from "../stores/wishStore";
import { ref } from "vue";

export default {
  name: "AddWish",
  setup() {
    const wishStore = useWishStore();
    const quantity = ref(1);

    return {
      wishStore,
      quantity,
    };
  },
  props: {
    product: Object,
  },
};
</script>
  
<style scoped>
.www {
  background: #fff;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  padding-top: 0.125rem;
  text-align: center;
  cursor: pointer;
}
</style>