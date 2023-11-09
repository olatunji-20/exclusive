<template>
    <NavBar />
    <section>
        <aside>
            <ul>
                <li>Woman's fashion</li>
                <li>Woman's fashion</li>
                <li>Woman's fashion</li>
                <li>Woman's fashion</li>
            </ul>
        </aside>
        <aside class="hero">
            <div class="main"></div>
        </aside>
    </section>
    <Todays />
    <Categories />
    <Month />
    <Enhance />
    <OurProducts />
    <NewArrival />
    <Value />
    <FootBar />
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Todays from '../components/Todays.vue'
import Categories from '../components/Categories.vue'
import Month from '../components/Month.vue' 
import Enhance from '../components/Enhance.vue'
import OurProducts from '../components/OurProducts.vue' 
import NewArrival from '../components/NewArrival.vue'
import Value from '../components/Value.vue'
import FootBar from '../components/FootBar.vue'
export default {
    name: 'HomePage',
    setup() {

    },
    components: {
    NavBar,
    Todays, 
    Categories,
    Month,
    Enhance,
    OurProducts,
    NewArrival,
    Value,
    FootBar
}

}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 500px;
}
aside {
    border: 2px solid red;
    width: 23%;
    height: 400px;
}
.hero {
    border: 2px solid green;
    width: 75%;
    height: 400px;
    padding: 30px;
}
.main {
    border: 4px solid blue;
    background: black;
    width: 100%;
    height: 350px;
}
</style>