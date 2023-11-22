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
    border: 4px solid red;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}
.sub {
    border: 10px solid green;
    border-top: 10px solid blue;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 80px auto;
}
</style>