<template>
  <div id="app">
    <section v-if="activeSlide == 1" class="section">
        <Slide1/>
    </section>
    <section  v-if="activeSlide == 1" class="section">
        <Slide2/>
    </section>
    <section  v-if="activeSlide == 1" class="section">
        <Slide34/>
    </section>
    <section  v-if="activeSlide == 1" class="section">
        <Slide5/>
    </section>
    <section  v-if="activeSlide == 1" class="section">
        <Slide6/>
    </section>
    <section  v-if="activeSlide == 1" class="section">
        <Slide7/>
    </section>
  </div>
</template>

<script>
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide34 from "./components/Slide34";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";
import Slide7 from "./components/Slide7";
export default {
  name: 'app',
  components: {
    Slide1,
    Slide2,
    Slide34,
    Slide5,
    Slide6,
    Slide7
  },
  data() {
    return {
      activeSlide: 1
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #eee;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#app .section {
  height: 100%;
  width: 100%;
  max-width: 800px;
  background-color: white;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
}
</style>
