<template>
  <div id="app">
    <section v-if="activeSlide == 1" class="section">
        <Slide1 @next="slide1Next" />
    </section>
    <section  v-if="activeSlide == 2" class="section">
        <Slide2 @next="slide2Next"/>
    </section>
    <section  v-if="activeSlide == 3" class="section">
        <Slide34 @next="slide3Next"/>
    </section>
    <section  v-if="activeSlide == 5" class="section">
        <Slide5 @next="slide5Next"/>
    </section>
    <section  v-if="activeSlide == 6" class="section">
        <Slide6 @next="slide6Next"/>
    </section>
    <section  v-if="activeSlide == 7" class="section">
        <Slide7 @next="slide7Next"/>
    </section>
    <!--section  v-if="activeSlide == 0" class="section">
        <Conclusion/>
    </section-->
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
      activeSlide: 1,
      answers: {
        'slide1': null,
        'slide2': null,
        'slide34': null,
        'slide5': null,
        'slide6': null,
        'slide7': null,
      }
    }
  },
  methods: {
    slide1Next: function(numChecked) {
      this.answers.slide1 = numChecked
      if (numChecked) {
        this.activeSlide = 3
      } else {
        this.activeSlide = 2
      }
    },
    slide2Next: function(answer) {
      this.answers.slide2 = answer
      if (answer) {
        this.activeSlide = 7
      } else {
        this.activeSlide = 0
      }
    },
    slide3Next: function(score) {
      this.answers.slide3 = score
      if (score >= 6) {
        this.activeSlide = 5
      } else {
        this.activeSlide = 0
      }
    },
    slide5Next: function(geneApoB) {
      this.answers.slide5 = geneApoB
      if (geneApoB === null) {
        this.activeSlide = 6
      } else {
        this.activeSlide = 0
      }
    },
    slide6Next: function(answer) {
      this.answers.slide6 = answer
      this.activeSlide = 0
    },
    slide7Next: function(geneABCG2, geneSLCO1B1) {
      this.answers.slide7 = [geneABCG2, geneSLCO1B1]
      this.activeSlide = 0
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
