<template>
  <transition name="pop">
    <div class="add">
      <p>{{ quantity }} {{ name }} has been added to your cart.</p>
    </div>
  </transition>
</template>

<script>
export default {
    name: "Pop",
    setup() {

    },
    props: {
        name: String,
        quantity: Number
    }

}
</script>

<style scoped>
.add {
    border: 1px solid #DB4444;
    background: #CCCCCC;
    width: 500px;
    height: auto;
    position: fixed;
    right: calc(50% - 250px);
    /* margin: 0px auto; */
    text-align: center;
    padding: 5px 10px;
    border-radius: 4px;
}
.pop-enter-from, .pop-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.pop-enter-to, .pop-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.pop-enter-active, .pop-leave-active {
  transition: all ease .7s;
}

@media screen and (max-width: 768px) {
  .add {
    width: 100%;
    right: 0;
  }
}
</style>