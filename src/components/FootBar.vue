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
          <img src="/img/facebook.svg" class="p-img2" />
        </div>
        <div class="social">
          <img src="/img/twitter.svg" class="p-img2" />
        </div>
        <div class="social">
          <img src="/img/linkedin.svg" class="p-img2" />
        </div>
      </div>
    </section>
    <section class="copy">
      <p>© Copyrights. FALANA SHERIFF OLATUNJI 2023.</p>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  width: 100%;
  height: auto;
  background: #0d0d0d;
  color: white;
  padding: 5rem 3.75rem 0rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
section {
  width: 12.5rem;
  height: 21.875rem;
}
.logo {
  height: 50px;
  width: 160px;
}
.p-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.3125rem;
}
.mail {
  border: 1px solid white;
  height: 2.625rem;
  width: 100%;
  margin-top: 2.5rem;
  border-radius: 4px;
  padding-left: 0.125rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.mail input {
  width: 70%;
  height: 2.1875rem;
  background: #f5f5f5;
  border: 0px;
  border-radius: 2px;
}
.sddd {
  width: 2.8125rem;
  height: 2.1875rem;
}
.font-inc {
  font-size: 3.125rem;
  line-height: 2.1875rem;
}
.account {
  width: 11.25rem;
  height: 21.875rem;
}
ul li {
  position: relative;
  left: -35px;
  line-height: 1.875rem;
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
  width: 11.25rem;
  height: 21.875rem;
}
.download {
  width: 13.75rem;
  height: 21.875rem;
}
.qr {
  height: 6.25rem;
  width: 6.25rem;
  grid-area: qr;
}
.p-img2 {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.playstore1 {
  height: 2.8125rem;
  width: 6.25rem;
  grid-area: store1;
}
.playstore2 {
  height: 3rem;
  width: 6.25rem;
  grid-area: store2;
}
.app {
  width: 100%;
  height: 6.25rem;
  display: grid;
  grid-template-areas: "qr store1 " "qr store2";
  gap: 2px;
}
.socials {
  height: 2.1875rem;
  width: 9.375rem;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.social {
  height: 1.875rem;
  width: 1.875rem;
  position: relative;
  font-size: 0.75rem;
  border-radius: 50%;
  background: black;
  bottom: 0px;
  transition: 0.2s ease;
  cursor: pointer;
}
.social:hover {
  bottom: 0.625rem;
}
.copy {
  width: 100%;
  height: 3.125rem;
  margin-top: 1.25rem;
  display: block;
  text-align: center;
}

@media screen and (max-width: 768px) {
  footer {
    padding: 2.5rem 0.3125rem;
  }
  .mail {
    width: 18.75rem;
  }
  section {
    width: 100%;
    height: auto;
    padding-bottom: 3.125rem;
  }
  .account,
  .download,
  .quick {
    width: 100%;
    height: auto;
  }
  .app {
    height: 12.5rem;
  }
  .qr {
    width: 11.25em;
    height: 11.25rem;
  }
  .playstore1,
  .playstore2 {
    width: 10.625rem;
    height: 5.625rem;
  }
}
</style>