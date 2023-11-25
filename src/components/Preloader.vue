<template>
  <div class="pre">
    <div class="sub"></div>
  </div>
</template>

<script>
export default {
    name: 'Preloader',
    setup() {

    }

}
</script>

<style scoped>
.pre {
    /* border: 4px solid red; */
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}
.sub {
    border: 10px solid #CCCCCC;
    border-top: 10px solid #Db4444;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 80px auto;
    animation-name: spinner;
    animation-duration: .8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg)
    }
}
</style>