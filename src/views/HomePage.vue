<template>
    <NavBar />
    <section>
        <aside>
            <ul>
                <li>Women's fashion</li>
                <li>Men's fashion</li>
                <li>Electronics</li>
                <li>Home & LifeStyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby's & Toys</li>
                <li>Groceries & Pets</li>
                <li><router-link to="/checkout">Health & Beauty</router-link></li>
            </ul>
        </aside>
        <aside class="hero">
            <div class="main">
                <SubMain />
            </div>
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
import SubMain from '../components/SubMain.vue'
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
    SubMain,
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
    padding: 30px 20px;
}
aside ul li {
    list-style-type: none;
    line-height: 35px;
}
.hero {
    border: 2px solid green;
    width: 75%;
    height: 400px;
    padding: 30px;
}
.main {
    border: 4px solid blue;
    background: burlywood;
    width: 97%;
    height: 350px;
}
</style>