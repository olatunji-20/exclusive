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
  import FootBar from '../components/FootBar.vue';
  import ContactForm from '../components/ContactForm.vue';
  import NavBar from '../components/NavBar.vue';
  
  export default {
      name: 'Contact',
      components: {
          NavBar,
          ContactForm,
          FootBar
      }
  }
  </script>
  
  <style scoped>
  .large {
    /* border: 4px solid red; */
    width: 100%;
    height: auto;
    padding: 120px 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .call {
    /* border: 2px solid blue; */
    width: 350px;
    height: auto;
    padding: 30px 20px;
    border-radius: 4px;
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  }
  .to {
    /* border: 2px solid pink; */
    width: 100%;
    height: 54px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .call p {
    font-size: 14px;
    line-height: 14px;
  }
  .icon {
    /* border: 1px solid blue; */
    width: 50px;
    height: 50px;
    color: white;
    border-radius: 50%;
    background: #DB4444;
    /* display: inline-block; */
    margin-right: 20px;
    padding: 5px;
  }
  .font-inc {
    font-size: 40px;
  }
  hr {
      margin: 30px auto;
  }
  .contact-form {
    /* border: 4px solid green; */
    width: 700px;
    height: auto;
    border-radius: 4px;
    /* box-shadow: 2px 2px 2px 2px; */
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  }

  @media screen and (max-width: 768px) {
    .large {
      padding: 50px 8px;
      flex-direction: column-reverse;
    }
    .call {
      width: 100%;
      margin-top: 30px;
      padding: 30px 5px;
    }
    .contact-form {
      width: 100%;
    }
  }
  </style>