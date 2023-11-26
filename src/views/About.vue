<template>
  <NavBar />
  <div class="about">
    <div class="story1">
      <h1>Our Story</h1>
      <p>
        Launched in 2015, Exclusive is South Asia's premier online shopping
        marketplace with an active presence in Bangladesh. Supported by wide
        range of tailored marketing, data and service solutions, Exclusive has
        10,500 sellers and 300 brands and serves 3 million customers across the
        region.
      </p>
      <p>
        Exclusive has more than 1 million products to offer, growing at a very
        fast pace. Exclusive offers a diverse assortment in categories ranging
        from consumers.
      </p>
    </div>
    <div class="story">
      <img src="/img/side.png" alt="about-image" class="p-img" />
    </div>
  </div>
  <div class="values">
    <div class="val">
      <div class="buss">
        <i class="material-symbols-outlined font-inc"
          >local_convenience_store</i
        >
      </div>
      <h2 style="line-height: 15px">10.5K</h2>
      <p style="font-size: 13px; line-height: 0px">
        Sellers active on our site
      </p>
    </div>

    <div class="val">
      <div class="buss">
        <i class="material-symbols-outlined font-inc">monetization_on</i>
      </div>
      <h2 style="line-height: 15px">30K</h2>
      <p style="font-size: 13px; line-height: 0px">Monthly product sale</p>
    </div>

    <div class="val">
      <div class="buss">
        <i class="material-symbols-outlined font-inc"
          >featured_seasonal_and_gifts</i
        >
      </div>
      <h2 style="line-height: 15px">45.5K</h2>
      <p style="font-size: 13px; line-height: 0px">
        Customers active on our site
      </p>
    </div>

    <div class="val">
      <div class="buss">
        <i class="material-symbols-outlined font-inc">send_money</i>
      </div>
      <h2 style="line-height: 15px">350K</h2>
      <p style="font-size: 13px; line-height: 0px">
        Annual gross sale on our site
      </p>
    </div>
  </div>
  <Staffs />
  <Value />
  <FootBar />
</template>

<script>
import FootBar from "../components/FootBar.vue";
import Value from "../components/Value.vue";
import NavBar from "../components/NavBar.vue";
import Staffs from "../components/Staffs.vue";

export default {
  name: "About",
  components: {
    NavBar,
    Value,
    FootBar,
    Staffs,
  },
};
</script>

<style scoped>
.about {
  width: 100%;
  height: auto;
  padding: 7.5rem 3.125rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.story1 {
  width: 28.125rem;
  height: 31.25rem;
  text-align: left;
  padding: 2.5rem 0px;
}
.story {
  width: 31.25rem;
  height: 31.25rem;
  text-align: left;
}
.story1 h1 {
  font-size: 3.75rem;
}
.p-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
.values {
  width: 100%;
  height: auto;
  padding: 6.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.val {
  border: 1px solid black;
  border-radius: 4px;
  width: 12.5rem;
  height: 12.5rem;
  padding: 2.1875rem 0.3125rem;
  text-align: center;
  transition: 0.3s ease;
}
.val:hover {
  background: #db4444;
  cursor: pointer;
  color: white;
}
.buss {
  border: 10px solid #cccccc;
  background: black;
  color: white;
  width: 4.375rem;
  height: 4.375rem;
  margin: 0px auto;
  border-radius: 50%;
}

.font-inc {
  font-size: 2.8125rem;
}

@media screen and (max-width: 768px) {
  .about {
    padding: 3.125rem 0.5rem;
  }
  .story1 {
    padding: 1.25rem 0px;
    height: auto;
  }
  .story {
    margin-top: 1.25rem;
    height: 25rem;
  }
  .values {
    flex-direction: column;
    padding: 3.125rem;
  }
  .val {
    margin: 1.25rem auto;
  }
}
</style>