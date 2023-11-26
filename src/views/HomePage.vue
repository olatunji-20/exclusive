<template>
  <NavBar />
  <section>
    <aside class="left">
      <ul>
        <li>Women's fashion</li>
        <li>Men's fashion</li>
        <li>Electronics</li>
        <li>Home & LifeStyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby's & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </aside>
    <aside class="hero">
      <div class="main">
        <SubMain />
      </div>
    </aside>
  </section>
  <Todays />
  <hr />
  <Categories />
  <Month />
  <Enhance />
  <OurProducts />
  <NewArrival />
  <Value />
  <FootBar />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import SubMain from "../components/SubMain.vue";
import Todays from "../components/Todays.vue";
import Categories from "../components/Categories.vue";
import Month from "../components/Month.vue";
import Enhance from "../components/Enhance.vue";
import OurProducts from "../components/OurProducts.vue";
import NewArrival from "../components/NewArrival.vue";
import Value from "../components/Value.vue";
import FootBar from "../components/FootBar.vue";

export default {
  name: "HomePage",
  setup() {},
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
    FootBar,
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
}
.left {
  width: 23%;
  height: 25rem;
  padding: 1.875rem 1.25rem;
}
aside ul li {
  list-style-type: none;
  line-height: 2.1875rem;
}
.hero {
  border-left: 1px solid #808080;
  width: 75%;
  height: auto;
  padding: 1.25rem;
}
.main {
  width: 97%;
  height: 400px;
}

@media screen and (max-width: 768px) {
  .left {
    display: none;
  }
  .hero {
    width: 100%;
    padding: 0px;
  }
  .main {
    width: 100%;
    height: 37.5rem;
  }
}
</style>