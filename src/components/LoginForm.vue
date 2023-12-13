<template>
  <div class="larges">
    <h3>Log in to Exclusive</h3>
    <p>Enter your details below</p>
    <form>
      <input placeholder="Email or Phone Number" type="text" />
      <input placeholder="Password" type="password" />
      <button>Log In</button>
      <p class="log">
        Don't have an account?
        <router-link to="/signup">Sign Up</router-link> here.
      </p>
    </form>
  </div>
</template>
  
<script>
export default {
  name: "SignupForm",
};
</script>
  
<style scoped>
.larges {
  width: 100%;
  height: auto;
  padding: 2.5rem 0.625rem;
}
h3 {
  font-size: 2.5rem;
  line-height: 0px;
}
input {
  width: 100%;
  height: 2.1875rem;
  border: 0px;
  border-bottom: 1px solid #db4444;
  text-indent: 5px;
  margin: 1.25rem auto 0.625rem;
}
button {
  padding: 0.625rem;
  width: 100%;
  margin: 2.5rem auto 0.3125rem;
  background: #db4444;
  border: 0px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}
button:hover {
  background: #e07575;
}
.log {
  font-size: 0.875rem;
  margin-top: 1.25rem;
  text-align: center;
}
</style>