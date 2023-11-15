<template>
    <div class="larges">
      <h3>Log in to Exclusive</h3>
      <p>Enter your details below</p>
      <form>
          <input placeholder="Email or Phone Number" type="text" />
          <input placeholder="Password" type="password" />
          <button>Log In</button>
          <p class="log">Don't have an account? <router-link to="/signup">Sign Up</router-link> here.</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
      name: 'SignupForm'
  }
  </script>
  
  <style scoped>
  .larges {
      border: 6px solid palevioletred;
      width: 100%;
      height: auto;
      padding: 40px 10px;
  }
  h3 {
      font-size: 40px;
      line-height: 0px;
  }
  input {
      width: 100%;
      height: 35px;
      border: 0px;
      border-bottom: 2px solid red;
      margin: 20px auto 10px;
  }
  button {
      padding: 10px;
      width: 100%;
      margin: 10px auto 5px;
  }
  .log {
      font-size: 14px;
      margin-top: 20px;
      text-align: center;
  }
  </style>