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
import FootBar from '../components/FootBar.vue';
import LoginForm from '../components/LoginForm.vue';
import NavBar from '../components/NavBar.vue';

export default {
    name: 'LogIn',
    setup() { },
    components: { NavBar, FootBar, LoginForm }
}
</script>

<style scoped>
.large {
    /* border: 6px solid blue; */
    width: 100%;
    height: auto;
    padding: 120px 80px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.image {
    /* border: 2px solid green; */
    width: 650px;
    height: 650px;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
}
.form {
    /* border: 2px solid red; */
    width: 400px;
    height: 450px;
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