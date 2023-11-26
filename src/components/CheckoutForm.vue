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
export default {};
</script>

<style scoped>
.formc {
  width: 100%;
  height: auto;
  padding: 1.875rem 0.3125rem;
}
label {
  font-size: 1.125rem;
}
input {
  width: 100%;
  height: 2.1875rem;
  margin: 0.625rem auto;
  background: #f5f5f5;
  border: 0px;
  border-radius: 4px;
}
</style>