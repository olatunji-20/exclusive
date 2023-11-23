<template>
    <NavBar />
    <div class="large">
        <div class="image">
            <img src="/img/beatsnoop.png" alt="exclusive-signup" class="p-img" />
        </div>
        <div class="form">
            <SignupForm />
        </div>
    </div>
    <FootBar />
</template>

<script>
import FootBar from '../components/FootBar.vue';
import NavBar from '../components/NavBar.vue';
import SignupForm from '../components/SignupForm.vue';

export default {
    name: 'SignUp',
    setup() { },
    components: { NavBar, FootBar, SignupForm }
}
</script>

<style scoped>
.large {
    border: 6px solid blue;
    width: 100%;
    height: auto;
    padding: 80px 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.image {
    border: 2px solid green;
    width: 650px;
    height: 650px;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.form {
    border: 2px solid red;
    width: 400px;
    height: 570px;
}

@media screen and (max-width: 768px) {
    .large {
        padding: 20px 5px;
        flex-direction: column-reverse;
    }
    .image {
        width: 100%;
        height: 400px;
    }
    .form {
        width: 100%;
    }
}
</style>