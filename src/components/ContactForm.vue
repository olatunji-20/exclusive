<template>
  <div class="larges">
    <form>
      <input placeholder="Your Name" />
      <input placeholder="Your Email" />
      <input placeholder="Your Phone" />
      <textarea placeholder="Your Message"></textarea>
      <button>Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  setup() {},
};
</script>

<style scoped>
.larges {
  width: 100%;
  height: 100%;
  padding: 3.125rem;
}
input {
  width: 31%;
  height: 2.1875rem;
  display: inline-block;
  margin-right: 0.625rem;
  background: #f5f5f5;
  border: 0px;
  border-radius: 4px;
  text-indent: 0.625rem;
}
textarea {
  width: 100%;
  height: 9.375rem;
  margin: 1.875rem auto 0.625rem;
  background: #f5f5f5;
  text-indent: 10px;
  border-radius: 4px;
  border: 0px;
  padding-top: 0.625rem;
}
button {
  padding: 0.625rem 1.875rem;
  background: #db4444;
  border: 0px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-top: 1.25rem;
}
button:hover {
  background: #e07575;
}

@media screen and (max-width: 768px) {
  .larges {
    padding: 0.625rem 0.125rem;
  }
  input {
    width: 100%;
    margin: 0.625rem auto;
    text-indent: 0.625rem;
  }
}
</style>