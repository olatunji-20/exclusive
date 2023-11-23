<template>
<NavBar />
<div class="about">
    <div class="story1">
        <h1>Our Story</h1>
        <p>Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh.
            Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands
            and serves 3 million customers across the region.
        </p>
        <p>Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in 
            categories ranging from consumers.
        </p>
    </div>
    <div class="story">
        <img src="/img/side.png" alt="about-image" class="p-img">
    </div>
</div>
<div class="values">
    <div class="val">
        <div class="buss"></div>
        <h2 style="line-height: 15px">10.5K</h2>
        <p style="font-size: 13px; line-height: 0px;">Sellers active on our site</p>
    </div>
    
    <div class="val">
        <div class="buss"></div>
        <h2 style="line-height: 15px">30K</h2>
        <p style="font-size: 13px; line-height: 0px;">Monthly product sale</p>
    </div>
    
    <div class="val">
        <div class="buss"></div>
        <h2 style="line-height: 15px">45.5K</h2>
        <p style="font-size: 13px; line-height: 0px;">Customers active on our site</p>
    </div>
    
    <div class="val">
        <div class="buss"></div>
        <h2 style="line-height: 15px">350K</h2>
        <p style="font-size: 13px; line-height: 0px;">Annual gross sale on our site</p>
    </div>    
</div>
<Staffs />
<Value />
<FootBar />
</template>

<script>
import FootBar from '../components/FootBar.vue';
import Value from '../components/Value.vue';
import NavBar from '../components/NavBar.vue';
import Staffs from '../components/Staffs.vue';

export default {
    name: 'About',
    components: {
        NavBar,
        Value,
        FootBar,
        Staffs
    }
}
</script>

<style scoped>
.about {
    border: 4px solid fuchsia;
    width: 100%;
    height: auto;
    padding: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.story1 {
    border: 3px solid blue;
    width: 450px;
    height: 500px;
    text-align: left;
    padding: 40px 0px;
}
.story {
    border: 3px solid blue;
    width: 500px;
    height: 500px;
    text-align: left;
}
.story1 h1 {
    font-size: 60px;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.values {
    border: 4px solid purple;
    width: 100%;
    height: auto;
    padding: 100px 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.val {
    border: 2px solid purple;
    width: 200px;
    height: 200px;
    padding: 35px 5px;
    text-align: center;
    transition: .3s ease;
}
.val:hover {
    background: tomato;
    cursor: pointer;
    color: white
}
.buss {
    border: 10px solid green;
    background: greenyellow;
    width: 70px;
    height: 70px;
    margin: 0px auto;
    border-radius: 50%;
}

@media screen and (max-width: 768px) {
    .about {
        padding: 10px 5px;
    }
    .story1 {
        padding: 20px 0px;
        height: auto;
    }
    .story {
        margin-top: 20px;
        height: 400px;
    }
    .values {
        flex-direction: column;
        padding: 50px;
    }
    .val {
        margin: 20px auto;
    }



}

  </style>