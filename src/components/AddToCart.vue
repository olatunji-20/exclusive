<template>
  <div @click="loud" class="www">ADD TO CART</div>
</template>

<script>
export default {
    name: 'AddToCart',
    setup() {
        const loud = () => {
            alert("jdhdhd")
        }

        return {
            loud
        }
    }

}
</script>

<style scoped>
.www {
    border: 3px solid purple;
    background: yellow;
    width: 100%;
    padding: 6px;
    text-align: center;
}
</style>