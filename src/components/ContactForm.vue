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
    name: 'ContactForm',
    setup() {

    }

}
</script>

<style scoped>
.larges {
    /* border: 2px solid blue; */
    width: 100%;
    height: 100%;
    padding: 50px;
}
input {
    width: 31%;
    height: 35px;
    display: inline-block;
    margin-right: 10px;
    background: #F5F5F5;
    border: 0px;
    border-radius: 4px;
    text-indent: 10px;
}
textarea {
    width: 100%;
    height: 150px;
    margin: 30px auto 10px;
    background: #F5F5F5;
    text-indent: 10px;
    border-radius: 4px;
    border: 0px;
    padding-top: 10px;
}
button {
    /* float: right; */
    padding: 10px 30px;
    background: #DB4444;
    border: 0px;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    margin-top: 20px;
}
button:hover {
    background: #E07575;
}

@media screen and (max-width: 768px) {
    .larges {
        padding: 10px 2px;
    }
    input {
        width: 100%;
        margin: 10px auto;
        text-indent: 10px;
    }
}
</style>