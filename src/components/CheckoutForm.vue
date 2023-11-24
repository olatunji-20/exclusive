<template>
  <div class="formc">
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
.formc {
    /* border: 4px solid lime; */
    width: 100%;
    height: auto;
    padding: 30px 5px;
}
label {
    font-size: 18px;
}
input {
    width: 100%;
    height: 35px;
    margin: 10px auto;
    background: #F5F5F5;
    border: 0px;
    border-radius: 4px;
}
</style>