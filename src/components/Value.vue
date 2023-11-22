<template>
  <div class="values">
    <div class="val">
        <div class="buss"></div>
        <h4 style="line-height: 3px">FREE AND FAST DELIVERY</h4>
        <p style="font-size: 13px; line-height: 0px;">Free delivery for al orders above $140</p>
    </div>
    
    <div class="val">
        <div class="buss"></div>
        <h4 style="line-height: 3px">24/7 CUSTOMER SERVICE</h4>
        <p style="font-size: 13px; line-height: 0px;">Friendly 24/7 customer support</p>
    </div>
    
    <div class="val">
        <div class="buss"></div>
        <h4 style="line-height: 3px">MONEY BACK GUARANTY</h4>
        <p style="font-size: 13px; line-height: 0px;">We return money within 30 days</p>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'Value'
}
</script>

<style scoped>
.values {
    border: 4px solid green;
    width: 100%;
    height: auto;
    padding: 100px 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.val {
    border: 2px solid purple;
    width: 300px;
    height: 200px;
    padding: 35px 5px;
    text-align: center;
    position: relative;
    bottom: 0px;
    transition: 0.3s ease;
}
.val:hover {
    bottom: 10px;
}
.buss {
    border: 10px solid red;
    background: yellow;
    width: 70px;
    height: 70px;
    margin: 0px auto;
    border-radius: 50%;
}


@media screen and (max-width: 480px) {
    .values {
        flex-direction: column;
        padding: 50px;
    }
    .val {
        margin: 20px auto;
    }
}
</style>