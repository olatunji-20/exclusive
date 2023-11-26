<template>
  <NavBar />
  <div class="large">
    <div class="call">
      <div class="to">
        <div class="icon">
          <i class="material-symbols-outlined font-inc">add_call</i>
        </div>
        <h4>Call Us</h4>
      </div>
      <p>We are available 24/7, 7 days a week.</p>
      <p>Phone: +8801 6111 2222</p>
      <hr />
      <div class="to">
        <div class="icon">
          <i class="material-symbols-outlined font-inc">mail</i>
        </div>
        <h4>Write To Us</h4>
      </div>
      <p>Fill out our form and we will contact you within 24 hours.</p>
      <p>Email: customer@exclusive.com</p>
      <p>Email: support@exclusive.com</p>
    </div>
    <div class="contact-form">
      <ContactForm />
    </div>
  </div>
  <FootBar />
</template>
  
  <script>
import FootBar from "../components/FootBar.vue";
import ContactForm from "../components/ContactForm.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Contact",
  components: {
    NavBar,
    ContactForm,
    FootBar,
  },
};
</script>
  
  <style scoped>
.large {
  width: 100%;
  height: auto;
  padding: 7.5rem 3.125rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.call {
  width: 21.875rem;
  height: auto;
  padding: 1.875rem 1.25rem;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.to {
  width: 100%;
  height: 3.375rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.call p {
  font-size: 0.875rem;
  line-height: 0.875rem;
}
.icon {
  width: 3.125rem;
  height: 3.125rem;
  color: white;
  border-radius: 50%;
  background: #db4444;
  margin-right: 1.25rem;
  padding: 0.3125rem;
}
.font-inc {
  font-size: 2.5rem;
}
hr {
  margin: 1.875rem auto;
}
.contact-form {
  width: 43rem;
  height: auto;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}

@media screen and (max-width: 768px) {
  .large {
    padding: 3.125rem 0.5rem;
    flex-direction: column-reverse;
  }
  .call {
    width: 100%;
    margin-top: 1.875rem;
    padding: 1.875rem 0.3125rem;
  }
  .contact-form {
    width: 100%;
  }
}
</style>