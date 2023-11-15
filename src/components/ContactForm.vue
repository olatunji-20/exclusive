<template>
    <div class="large">
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
    name: 'ContactForm',
    setup() {

    }

}
</script>

<style scoped>
.large {
    border: 2px solid red;
    width: 100%;
    height: auto;
}
input {
    width: 31%;
    height: 35px;
    display: inline-block;
    margin-right: 10px;
}
textarea {
    width: 100%;
    height: 150px;
    margin: 30px auto 10px;
}
button {
    float: right;
    padding: 10px 30px;
    background: tomato;
    color: white;
}
</style>