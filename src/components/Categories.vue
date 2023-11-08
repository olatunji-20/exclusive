<template>
  <div>
    <h1>Categories</h1>
    <h2>Browse By Category</h2>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
    name: "Categories",
    setup() {

    }

}
</script>

<style scoped>
div {
    border: 3px solid blue;
    width: 100%;
    height: 700px;
    padding: 50px;
}
h1 {
    border-left: 20px solid blue;
    width: auto;
    height: 60px;
    padding: 15px;
}
h2 {
    font-size: 45px;
}
.content {
    border: 2px solid brown;
    width: 100%;
    height: 200px;
    margin: 30px auto;
}
</style>