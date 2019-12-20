<template>
  <div id="app">
    <div class="bg-white"></div>
    <transition name="fade">
        <Slide0 v-if="activeSlide == 0" @next="slide0Next" />
    </transition>
    <section v-if="activeSlide == 1" class="section">
        <Slide1 @next="slide1Next" />
    </section>
    <section  v-if="activeSlide == 2" class="section">
        <Slide2 @next="slide2Next"/>
    </section>
    <section  v-if="activeSlide == 3" class="section">
        <Slide34 :selfIHD="isSelfIHD" :relativeIHD="isRelativeIHD" @next="slide3Next"/>
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
    <section  v-if="activeSlide == 8" class="section">
        <Conclusion
        :fhMessage="fhMessage"
        :statinMessage="statinMessage"
        :fhGeneMessages="fhGeneMessages"
        :statinGeneMessages="statinGeneMessages"
         @home="restart"/>
    </section>
  </div>
</template>

<script>
import Slide0 from "./components/Slide0";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide34 from "./components/Slide34";
import Slide5 from "./components/Slide5";
import Slide6 from "./components/Slide6";
import Slide7 from "./components/Slide7";
import Conclusion from "./components/Conclusion";
export default {
  name: 'app',
  components: {
    Slide0,
    Slide1,
    Slide2,
    Slide34,
    Slide5,
    Slide6,
    Slide7,
    Conclusion
  },
  data() {
    return {
      activeSlide: 0,
      answers: {
        'slide1': undefined,
        'slide2': undefined,
        'slide34': undefined,
        'slide5': undefined,
        'slide6': undefined,
        'slide7': undefined,
      }
    }
  },
  methods: {
    slide0Next: function() {
      this.activeSlide = 1
    },
    slide1Next: function(checkedRows) {
      this.answers.slide1 = checkedRows
      if (checkedRows.length) {
        this.activeSlide = 3
      } else {
        this.activeSlide = 2
      }
    },
    slide2Next: function(group) {
      this.answers.slide2 = group
      if ((group === "A") || (group === "B")) {
        this.activeSlide = 7
      } else {
        this.activeSlide = 8
      }
    },
    slide3Next: function(score) {
      this.answers.slide34 = score
      if (score >= 6) {
        this.activeSlide = 5
      } else {
        if (this.isSelfIHD) {
          // Skip slid
          this.answers.slide2 = "A"
          this.slide2Next(this.answers.slide2)
        } else {
          this.activeSlide = 2
        }
      }
    },
    slide5Next: function(geneApoB) {
      this.answers.slide5 = geneApoB
      this.activeSlide = 6
    },
    slide6Next: function(answer) {
      this.answers.slide6 = answer
      this.activeSlide = 7
    },
    slide7Next: function(geneABCG2, geneSLCO1B1) {
      if (geneABCG2 || geneSLCO1B1){
        this.answers.slide7 = [geneABCG2, geneSLCO1B1]
      } else {
        this.answers.slide7 = undefined
      }
      this.activeSlide = 8
    },
    restart: function () {
      const keys = Object.keys(this.answers)
      for (const key of keys) {
        this.answers[key] = undefined
      }
      this.activeSlide = 1
    }
  },
  computed: {
    isSelfIHD: function() {
      if (this.answers.slide1) {
        return Boolean(this.answers.slide1.find(v => v.id === 2))
      }
      return undefined
    },
    isRelativeIHD: function() {
      if (this.answers.slide1) {
        return Boolean(this.answers.slide1.find(v => v.id === 3))
      }
      return undefined
    },
    isStatinRequired: function() {
      return (this.answers.slide2 === "A") || (this.answers.slide2 === "B") || (this.answers.slide34 >= 6)
    },
    fhMessage: function () {
        let message = {
                title: 'Диагноз',
                status: undefined,
                text: undefined
            }

        if (!this.answers.slide1) {
            message.text = "Вероятность семейной гиперлипидемии низкая"
            message.status = "success"
        } else {
            const totalScore = this.answers.slide34
            if (totalScore > 8) {
                message.text = `У больного <b>определенная</b> семейная гиперлипидемия &mdash; ${totalScore} баллов по критериям Голландской сети липидных клиник. Рекомендовано обследование родственников (каскадный скрининг)`
                message.status = "danger"
            } else if (totalScore >= 6) {
                message.text = `У больного <b>возможная</b> семейная гиперлипидемия &mdash; ${totalScore} баллов по критериям Голландской сети липидных клиник`
                message.status = "warning"
            } else if (totalScore >= 3) {
                message.text = `У больного <b>вероятная</b> семейная гиперлипидемия &mdash; ${totalScore} баллов по критериям Голландской сети липидных клиник`
                message.status = "warning"
            } else {
                // totalScore < 3
                message.text = `У больного диагноз семейная гиперлипидемия <b>мало вероятен</b> &mdash; ${totalScore} баллов по критериям Голландской сети липидных клиник`
                message.status = "success"
            }
        }
        return message
    },
    statinMessage: function () {
        let message = {
                title: 'Риск осложнений и терапия',
                status: undefined,
                text: undefined
            }

        if ( (this.answers.slide2 === "A") || ((this.answers.slide34 >= 6) && this.answers.slide6) ) {
                message.text = `
                <ul>
                    <li>У больного <b>очень высокий</b> риск сердечно-сосудистых осложнений. Показано снижение ХС ЛПНП не менее чем на 50% от исходного уровня, целевое значение ХС ЛПНП менее 1,4 ммоль/л (менее 55 мг/дл)</li>
                    <li>Препараты первого выбора &mdash; статины. При не достижении целевого уровня ХС ЛПНП на фоне терапии статинами в максимальной переносимой дозе и эзетимибом  к терапии добавляются ингибиторы PCSK9</li>
                </ul>
                `
                message.status = "warning"
        }
        if ( (this.answers.slide2 === "B") || ((this.answers.slide34 >= 6) && !this.answers.slide6) ) {
                message.text = `
                <ul>
                    <li>У больного <b>высокий</b> риск сердечно-сосудистых осложнений. Показано снижение ХС ЛПНП не менее чем на 50% от исходного уровня, целевое значение ХС ЛПНП – менее 1,8 ммоль/л (менее 70 мг/дл)</li>
                    <li>Препараты первого выбора &mdash; статины. При не достижении целевого уровня ХС ЛПНП на фоне терапии статинами в максимальной переносимой дозе и эзетимибом  к терапии добавляются ингибиторы PCSK9</li>
                </ul>
                `
                message.status = "warning"
        }
        if (this.answers.slide2 === "C") {
            message.text = "У больного <b>умеренный</b> риск сердечно-сосудистых осложнений. Целевое значение ХС ЛНП – менее 2,6 ммоль/л (менее 100 мг/дл)."
            message.status = "success"
        }
        if (this.answers.slide2 === "D") {
            message.text = "У больного <b>низкий</b> риск сердечно-сосудистых осложнений. Целевое значение ХС ЛНП – менее 3,0 ммоль/л (менее 116 мг/дл)."
            message.status = "success"
        }
        return message
    },
    fhGeneMessages: function () {
        let messages = []

        if (this.answers.slide34 >= 6) {
            if (this.answers.slide5 === "AA") {
                messages.push({
                    "status": "info",
                    "text": 'Больной является носителем генотипа AA в гене ApoB (rs5742904). Подтвержден диагноз гомозиготная гиперлипидемия тип B'
                })
            } else if (this.answers.slide5 === "AG") {
                messages.push({
                    "status": "info",
                    "text": 'Больной является носителем генотипа AG в гене ApoB (rs5742904). Подтвержден диагноз гомозиготная гиперлипидемия тип B'
                })
            } else if (this.answers.slide5 === "GG") {
                messages.push({
                    "status": "info",
                    "text": 'Больной является носителем генотипа GG в гене ApoB (rs5742904). Для точной диагностики характера гиперлипидемии необходимо проведение NGS'
                })
            } else {
                messages.push({
                    "status": "warning",
                    "text": 'Для подтверждения диагноза гомозиготная гиперлипидемия рекомендовано тестирование по панели "ЛИПРО-скрин-Б". Маркер rs5742904 в гене ApoB.'
                })
            }
        } else {
            messages.push({
                "status": "success",
                "text": "Показаний для генетического тестирования нет"
            })
        }
        return messages
    },
    statinGeneMessages: function() {
        let messages = []
        let geneABCG2 = undefined
        let geneSLCO1B1 = undefined
        if (this.answers.slide7) {
            geneABCG2 = this.answers.slide7[0]
            geneSLCO1B1 = this.answers.slide7[1]
        }

        if (this.isStatinRequired) {
            // Show warning if a required gene is not tested
            if (!geneABCG2) {
                messages.push({
                    "status": "warning",
                    "text": "В связи с наличием показаний к терапии статинами показано проведение тестирования гена ABCG2 маркер rs2231142 (профиль \"ФАРМА-скрин-транспорт\")"
                })
            }
            if (!geneSLCO1B1) {
                messages.push({
                    "status": "warning",
                    "text": "В связи с наличием показаний к терапии статинами показано проведение тестирования гена SLCO1B1 маркер rs4149056"
                })
            }

            if (geneABCG2 || geneSLCO1B1) {
                // Generate the first sentence in the output
                let firstSentence = "По результатам генетического тестирования выявлено носительство"
                if (geneABCG2) {
                    firstSentence += ` генотипа ${geneABCG2} гена ABCG2 маркер rs2231142`
                }
                if (geneSLCO1B1) {
                    let sep = geneABCG2 ? "," : ""
                    firstSentence += `${sep} генотипа ${geneSLCO1B1} маркера rs4149056 гена SLCO1B1`
                }

                // Calculate statin dose restrictions. Generate the message.
                let statinAllowedDosesText
                let statingAllowedDosesStatus = "info"
                if (geneSLCO1B1 === "TT") {
                    statinAllowedDosesText = `
                        Не рекомендуется использовать дозы статинов выше указанных:
                        <ul>
                            <li>Симвастатин, Аторвастатин и Правастатин &mdash; возможна терапия максимальными дозами</li>
                        `
                    switch (geneABCG2) {
                        case "AA":
                            statinAllowedDosesText = `${statinAllowedDosesText}<li>Розувастатин &mdash; 20 мг/сут</li></ul>`
                            break;
                        case "AС":
                            statinAllowedDosesText = `${statinAllowedDosesText}<li>Розувастатин &mdash; 40 мг/сут</li></ul>`
                            break;
                        case "СС":
                        case undefined:
                            statinAllowedDosesText = "Возможна терапия максимальными дозами статинов (Симвастатин, Аторвастатин, Правастатин, Розувастатин)."
                            statingAllowedDosesStatus = "success"
                            break;
                    }
                } else if (geneSLCO1B1 === "TC") {
                    statinAllowedDosesText = `
                        Не рекомендуется использовать дозы статинов выше указанных:
                        <ul>
                            <li>Симвастатин, Аторвастатин и Правастатин &mdash; 40 мг/сут</li>
                            <li>Розувастатин &mdash; 20 мг/сут</li>
                        </ul>
                        `
                } else if (geneSLCO1B1 === "CC") {
                    let rozuvastatinConc = (geneABCG2 === "AA") ? 10 : 20
                    statinAllowedDosesText = `
                        Не рекомендуется использовать дозы статинов выше указанных:
                        <ul>
                            <li>Симвастатин, Аторвастатин &mdash; 20 мг/сут</li>
                            <li>Правастатин &mdash; 40 мг/сут</li>
                            <li>Розувастатин &mdash; ${rozuvastatinConc} мг/сут</li>
                        </ul>
                        `
                } else if (geneABCG2) {
                    switch (geneABCG2) {
                        case "AA":
                            statinAllowedDosesText = "Не рекомендуется использовать дозы Розувастатина более 20 мг/сут"
                            break;
                        case "AC":
                            statinAllowedDosesText = "Могут быть использованы любые дозы Розувастатина, с осторожностью &mdash; 40 мг/сут"
                            break;
                        case "CC":
                            statinAllowedDosesText = "Могут быть максимальные дозы Розувастатина"
                            break;
                        default:
                            break;
                    }
                }
                messages.push({
                    "status": statingAllowedDosesStatus,
                    "text": `${firstSentence}<br>${statinAllowedDosesText}`
                })
            }
        } else {
            messages.push({
                "status": "success",
                "text": "Показаний для генетического тестирования нет"
            })
        }
        return messages
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
  background-image: url(../src/assets/bg_heart.png);
  background-repeat: repeat;
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
  background-image: url('../src/assets/logo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
  position: relative;
}

#app .section::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
}

#app .section .container, .table {
  background-color: transparent;
  color: inherit;
}


a.cgma-link:link, a.cgma-link:visited {
    color: black;
    text-decoration: none;
}

a.cgma-link:hover {
    text-decoration: underline;
}

a.cgma-link:active {
    color: blue;
    text-decoration: underline;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
