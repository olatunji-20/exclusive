<template>
  <footer>
    <section>
        <div class="logo">
            <img src="/img/exclusive2.svg" class="p-img" />
        </div>
        <h2>Subscribe</h2>
        <p style="font-size: 13px">Get 10% off your first order</p>
        <div class="mail">
            <input />
            <div class="sddd">
                <i class="material-symbols-outlined font-inc">send</i>
            </div>
        </div>
    </section>
    <section>
        <h2>Support</h2>
        <p>111, Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+ 88015-8888-32849</p>
    </section>
    <section class="account">
        <h2>Account</h2>
        <ul>
            <li>My Account</li>
            <li>Login/Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
        </ul>
    </section>
    <section class="quick">
        <h2>Quick Link</h2>
        <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
        </ul>
    </section>
    <section class="download">
        <h2>Download App</h2>
        <p style="font-size: 13px">Save $3 with app new user only.</p>
        <div class="app">
            <div class="qr">
                <img src="/img/qrcode.svg" class="p-img2" />
            </div>
            <div class="playstore1">
                <img src="/img/appstore.svg" class="p-img2" />
            </div>
            <div class="playstore2">
                <img src="/img/googleplay.svg" class="p-img2" />
            </div>
        </div>
        <div class="socials">
            <div class="social">
                <img src="/img/twitter.svg" class="p-img2" />
            </div>
            <div class="social">
                <img src="/img/linkedin.svg" class="p-img2" />
            </div>
            <div class="social">
                <img src="/img/facebook.svg" class="p-img2" />
            </div>
            <div class="social">
                <img src="/img/twitter.svg" class="p-img2" />
            </div>
        </div>
    </section>
    <section class="copy">
        <p>© Copyrights. FALANA SHERIFF OLATUNJI 2023. </p>
    </section>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    /* border: 2px solid red; */
    width: 100%;
    height: auto;
    background: black;
    color: white;
    padding: 80px 60px 0px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
}
section {
    /* border: 4px solid green; */
    width: 200px;
    height: 350px;
}
.logo {
    /* border: 1px solid yellow; */
    height: 50px;
    width: 160px;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 5px;
}
.mail {
    border: 1px solid white;
    height: 42px;
    width: 100%;
    margin-top: 40px;
    border-radius: 4px;
    padding-left: 2px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}
.mail input {
    width: 70%;
    height: 35px;
    background: #F5F5F5;
    border: 0px;
}
.sddd {
    /* border: 2px solid red; */
    width: 45px;
    height: 35px;
}
.font-inc {
    font-size: 50px;
    line-height: 35px;
}
.account {
    /* border: 4px solid green; */
    width: 180px;
    height: 350px;
}
ul li {
    position: relative;
    left: -35px;
    line-height: 30px;
    list-style-type: none;
    transition: 0.1s ease-in;
}
ul li:hover {
    left: -25px;
    cursor: pointer;
}
.account p:hover {
    left: 20px;
}
.quick {
    /* border: 4px solid green; */
    width: 180px;
    height: 350px;
}
.download {
    /* border: 4px solid green; */
    width: 220px;
    height: 350px;
}
.qr {
    /* border: 2px solid blue; */
    height: 100px;
    width: 100px;
    grid-area: qr;
}
.p-img2 {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.playstore1 {
    /* border: 2px solid green; */
    height: 45px;
    width: 100px;
    grid-area: store1;
}
.playstore2 {
    /* border: 2px solid yellow; */
    height: 48px;
    width: 100px;
    grid-area: store2;
}
.app {
    /* border: 1px solid red; */
    width: 100%;
    height: 100px;
    display: grid;
    grid-template-areas: 'qr store1 ' 'qr store2';
    gap: 2px
}
.socials {
    /* border: 2px solid green; */
    height: 35px;
    width: 200px;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.social {
    /* border: 2px solid blue; */
    height: 30px;
    width: 30px;
    position: relative;
    font-size: 12px;
    border-radius: 50%;
    background: black;
    bottom: 0px;
    transition: .2s ease;
    cursor: pointer;
}
.social:hover {
    bottom: 10px;
}
.copy {
    /* border: 2px solid red; */
    width: 100%;
    height: 50px;
    margin-top: 20px;
    display: block;
    text-align: center;
}

@media screen and (max-width: 768px) {
    footer {
        padding: 40px 5px;
    }
    section {
        width: 100%;
        height: auto;
        padding-bottom: 50px;
    }
    .account, .download, .quick {
        width: 100%;
        height: auto;
    }
    .app {
        height: 200px;
    }
}


</style>