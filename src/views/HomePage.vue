<template>
    <NavBar />
    <div class="ew">
        <h1>YOU ARE WELCOME</h1>

    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
    name: 'HomePage',
    setup() {

    },
    components: {
        NavBar
    }

}
</script>

<style>
.ew {
    border: 2px solid red;
    height: 500px;
    width: 100%;
}

</style>