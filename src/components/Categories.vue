<template>
  <div class="categories">
    <h1>Categories</h1>
    <h2>Browse By Category</h2>
    <div class="content">
        <div class="sub-content">
            <div class="cat">
                <div class="icon">
                    <i class="material-symbols-outlined font-inc">smartphone</i>
                </div>
                <p>Phones</p>
            </div>
            <div class="cat">
                <div class="icon">
                    <i class="material-symbols-outlined font-inc">computer</i>
                </div>
                <p>Computers</p>
            </div>
            <div class="cat">
                <div class="icon">
                    <i class="material-symbols-outlined font-inc">watch</i>
                </div>
                <p>SmartWatch</p>
            </div>
            <div class="cat">
                <div class="icon">
                    <i class="material-symbols-outlined font-inc">photo_camera</i>
                </div>
                <p>Camera</p>
            </div>
            <div class="cat">
                <div class="icon">
                    <i class="material-symbols-outlined font-inc">headphones</i>
                </div>
                <p>HeadPhones</p>
            </div>
            <div class="cat">
                <div class="icon">
                    <i class="material-symbols-outlined font-inc">stadia_controller</i>
                </div>
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
    /* border: 3px solid blue; */
    width: 100%;
    height: auto;
    padding: 50px;
}
h1 {
    border-left: 20px solid #DB4444;
    width: auto;
    height: 60px;
    padding: 15px;
}
h2 {
    font-size: 45px;
}
.content {
    /* border: 4px solid brown; */
    width: 100%;
    height: auto;
    margin: 30px auto;
    /* display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between; */
}
.sub-content {
    /* border: 4px solid blue; */
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;

}
.cat {
    border: 1px solid black;
    width: 180px;
    height: 150px;
    border-radius: 5px;
    padding: 30px;
    text-align: center;
}
.cat:hover {
    background: #DB4444;
    cursor: pointer;
    transition: .3s;
    color: white;
}
.icon {
    /* border: 1px solid red; */
    width: 50px;
    height: 50px;
    margin: 0px auto;
}
.cat p {
    margin-top: 25px;
}
.font-inc {
    font-size: 45px;
}

@media screen and (max-width: 768px) {
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