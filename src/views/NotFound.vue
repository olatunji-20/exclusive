<template>
    <NavBar />
    <div class="large">
        <h1>404 NOT FOUND</h1>
        <p>The page you visited does not exist.</p>
        <router-link to="/">
            <button>BACK TO HOMEPAGE</button>
        </router-link>
    </div>
    <FootBar />

</template>

<script>
import FootBar from '../components/FootBar.vue';
import NavBar from '../components/NavBar.vue';

export default {
    name: 'NotFound',
    setup() { },
    components: { NavBar, FootBar }
}
</script>

<style scoped>
.large {
    border: 6px solid yellow;
    width: 100%;
    height: auto;
    text-align: center;
    padding: 80px 50px;
}
h1 {
    font-size: 80px;
}
button {
    padding: 15px 50px;
    margin: 40px auto;
    background: tomato;
}
</style>