<template>
  <NavBar />
  <div class="large">
    <div class="image">
      <img src="/img/beatsnoop.png" alt="exclusive-signup" class="p-img" />
    </div>
    <div class="form">
      <LoginForm />
    </div>
  </div>
  <FootBar />
</template>

<script>
import FootBar from "../components/FootBar.vue";
import LoginForm from "../components/LoginForm.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "LogIn",
  setup() {},
  components: { NavBar, FootBar, LoginForm },
};
</script>

<style scoped>
.large {
  width: 100%;
  height: auto;
  padding: 7.5rem 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.image {
  width: 40rem;
  height: 40rem;
}
.p-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
.form {
  width: 25rem;
  height: 28.125rem;
  border-radius: 4px;
  margin-top: 3.75rem;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}

@media screen and (max-width: 768px) {
  .large {
    padding: 3.125rem 0.5rem;
    flex-direction: column-reverse;
  }
  .image {
    width: 100%;
    height: 25rem;
  }
  .form {
    width: 100%;
  }
}
</style>