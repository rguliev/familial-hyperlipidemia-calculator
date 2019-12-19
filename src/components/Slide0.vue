<template>
<div class="container">
    <a href="http://cgma.su/" target="_blank" class="cgma-link">
        <img src="../assets/cgma_logo.png" alt="Герб">
        <div class="cgma-longtext">
            <p>«Центральная  государственная  медицинская академия»</p>
            <p>Управления делами Президента Российской Федерации</p>
        </div>
    </a>
</div>
</template>

<script>
    export default {
        name: "Slide0",
        data() {
            return {
            }
        },
        mounted: function () {
            setTimeout(() => {
                this.$emit('next')
            }, 1000*1.5);
        }
    }
</script>

<style scoped>
div.container {
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    background-color: white;
    color: black;
    width: 100vw;
    height: 100vh;
    max-width: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>