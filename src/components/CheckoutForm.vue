<template>
  <div class="form">
    <form>
        <label>First Name:</label>
        <input placeholder="" type="text" />
        <label>Company Name:</label>
        <input placeholder="" type="text" />
        <label>Street Address:</label>
        <input placeholder="" type="text" />
        <label>Apartment, floor, etc. (optional):</label>
        <input placeholder="" type="text" />
        <label>Town/City:</label>
        <input placeholder="" type="text" />
        <label>Phone Number:</label>
        <input placeholder="" type="tel" />
        <label>Email Address:</label>
        <input placeholder="" type="email" />
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.form {
    border: 2px solid lime;
    width: 100%;
    height: auto;
    padding: 30px 0px;
}
label {
    font-size: 18px;
}
input {
    width: 100%;
    height: 35px;
    margin: 10px auto;
    background: powderblue;
    border: 0px;
}
</style>