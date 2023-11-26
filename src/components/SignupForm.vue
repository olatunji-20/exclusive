<template>
  <div class="larges">
    <h3>Create an account</h3>
    <p>Enter your details below</p>
    <form>
      <input placeholder="Name" type="text" />
      <input placeholder="Email or Phone Number" type="text" />
      <input placeholder="Password" type="password" />
      <button class="create">Create Account</button>
      <button>Sign up with Google</button>
      <p class="log">
        Already have an account? <router-link to="/login">Log in</router-link>.
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
  border-radius: 4px;
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
  margin: 1.25rem auto 0.625rem;
  text-indent: 0.3125rem;
}
button {
  padding: 0.625rem;
  width: 100%;
  margin: 0.625rem auto 0.3125rem;
}
.create {
  background: #db4444;
  border: 0px;
  color: white;
  border-radius: 4px;
  margin-top: 3.125rem;
  cursor: pointer;
}
.create:hover {
  background: #e07575;
}
.log {
  font-size: 0.875rem;
  margin-top: 1.25rem;
  text-align: center;
}
</style>