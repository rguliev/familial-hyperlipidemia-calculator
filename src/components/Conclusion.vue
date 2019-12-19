<template>
<div class="container content">
    <a href="http://cgma.su/" target="_blank" class="cgma-link">
        <table class="cgma-table">
            <tr>
                <td><img src="../assets/cgma_logo.png" alt="Герб"></td>
                <td>
                    <p>«Центральная  государственная  медицинская академия»</p>
                    <p>Управления делами Президента Российской Федерации</p>
                </td>
            </tr>
        </table>
    </a>
    <h1 class="title">Заключение</h1>

    <BMessageWithHTML :title="fhMessage.title" :type="fhMessage.status" has-icon :text="fhMessage.text"/>
    <BMessageWithHTML v-for="(message, index) in fhGeneMessages" :key="`fh-${index}`" :type="message.status" has-icon :text="message.text"/>
    <BMessageWithHTML :title="statinMessage.title" :type="statinMessage.status" has-icon :text="statinMessage.text"/>
    <BMessageWithHTML v-for="(message, index) in statinGeneMessages" :key="`statin-${index}`" :type="message.status" has-icon :text="message.text"/>

    <hr class="no-print">
    <div class="columns no-print">
        <div class="column">
            <b-button type="is-light is-medium" expanded @click="print()" icon-left="printer">Печатать</b-button>
        </div>
        <div class="column">
            <b-button type="is-primary is-medium" expanded @click="$emit('home')" icon-left="redo">В начало</b-button>
        </div>
    </div>
</div>
</template>

<script>
    import BMessageWithHTML from "./BMessageWithHTML";
    export default {
        name: "Conclusion",
        components: {BMessageWithHTML},
        props: {
            answers: Object
        },
        data() {
            return {}
        },
        methods: {
            print: function () {
                window.print()
            }
        },
        computed: {
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
                        message.text = `У больного <b>определенная</b> семейная гиперлипидемия &mdash; ${totalScore} баллов по критериям Голландской сети липидных клиник`
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

<style scoped>
div.container {
    background-color: white !important;
}
table.cgma-table {
    width: auto;
    margin: auto;
    margin-top: -1.5em;
}
table.cgma-table * {
    margin: 0px;
    font-size: 0.8em;
}
table.cgma-table td {
    vertical-align: middle;
}
table.cgma-table img {
    max-height: 50px;
    height: 100%;
}
@media print {
    .no-print { display: none; }
}
</style>