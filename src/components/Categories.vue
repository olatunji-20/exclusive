<template>
  <div class="categories">
    <h1>Categories</h1>
    <h2>Browse By Category</h2>
    <div class="content">
        <div class="sub-content">
            <div class="cat">
                <div class="icon"></div>
                <p>Phones</p>
            </div>
            <div class="cat">
                <div class="icon"></div>
                <p>Computers</p>
            </div>
            <div class="cat">
                <div class="icon"></div>
                <p>SmartWatch</p>
            </div>
            <div class="cat">
                <div class="icon"></div>
                <p>Camera</p>
            </div>
            <div class="cat">
                <div class="icon"></div>
                <p>HeadPhones</p>
            </div>
            <div class="cat">
                <div class="icon"></div>
                <p>Gaming</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Categories",
    setup() {

    }

}
</script>

<style scoped>
.categories {
    border: 3px solid blue;
    width: 100%;
    height: auto;
    padding: 50px;
}
h1 {
    border-left: 20px solid blue;
    width: auto;
    height: 60px;
    padding: 15px;
}
h2 {
    font-size: 45px;
}
.content {
    border: 4px solid brown;
    width: 100%;
    height: auto;
    margin: 30px auto;
    /* display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between; */
}
.sub-content {
    border: 4px solid blue;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;

}
.cat {
    border: 2px solid green;
    width: 180px;
    height: 150px;
    padding: 30px;
    text-align: center;
}
.cat:hover {
    background: tomato;
    cursor: pointer;
    transition: .3s;
    color: white;
}
.icon {
    border: 1px solid red;
    width: 50px;
    height: 50px;
    margin: 0px auto;
}
.cat p {
    margin-top: 25px;
}

@media screen and (max-width: 480px) {
    .categories {
        padding: 20px 5px;
    }
    h2 {
        font-size: 35px;
    }
    .content {
        overflow: auto;
    }
    .sub-content {
        width: 1300px;
    }





}


</style>