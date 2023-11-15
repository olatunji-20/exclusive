<template>
  <div class="large">
    <div class="low">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Staffs',
    setup() {

    }
}
</script>

<style scoped>
.large {
    border: 6px solid brown;
    width: 100%;
    height: auto;
    padding: 50px;
}
.low {
    border: 3px solid green;
    width: 100%;
    height: 410px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card {
    border: 2px solid red;
    width: 300px;
    height: 400px;
}
</style>