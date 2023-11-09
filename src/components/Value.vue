<template>
  <div>
    <div class="val"></div>
    <div class="val"></div>
    <div class="val"></div>
  </div>
</template>

<script>
export default {
    name: 'Value'
}
</script>

<style scoped>
div {
    border: 4px solid green;
    width: 100%;
    height: auto;
    padding: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.val {
    border: 2px solid purple;
    width: 300px;
    height: 200px;
}
</style>