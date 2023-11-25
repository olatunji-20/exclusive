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
        <p class="log">Already have an account? <router-link to="/login">Log in</router-link>.</p>
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
    /* border: 1px solid palevioletred; */
    width: 100%;
    height: auto;
    padding: 40px 10px;
    border-radius: 4px;
}
h3 {
    font-size: 40px;
    line-height: 0px;
}
input {
    width: 100%;
    height: 35px;
    border: 0px;
    border-bottom: 1px solid #DB4444;
    margin: 20px auto 10px;
    text-indent: 5px;
}
button {
    padding: 10px;
    width: 100%;
    margin: 10px auto 5px;
}
.create {
    background: #DB4444;
    border: 0px;
    color: white;
    border-radius: 4px;
    margin-top: 50px;
    cursor: pointer;
}
.create:hover {
    background: #E07575;
}
.log {
    font-size: 14px;
    margin-top: 20px;
    text-align: center;
}
</style>