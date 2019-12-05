<template>
<div class="container content">
    <h1 class="title">Заключение</h1>
    <div v-if="conclusionMessages.length">
        <article
            v-for="(message, index) in conclusionMessages"
            :key="index"
            :class="['message', 'has-text-left', 'is-' + message.type]"
            >
            <section class="message-body">
                <div class="media">
                    <div v-if="message.icon" class="media-left">
                        <b-icon
                            :icon="message.icon"
                            :class="'is-' + message.type"
                            both
                            size="is-small"/>
                    </div>
                    <div class="media-content" v-html="message.text">
                    </div>
                </div>
            </section>
        </article>
    </div>
    <hr>
    <div class="columns">
        <!--div class="column">
            <b-button type="is-light is-medium" expanded @click="print()">Печать</b-button>
        </div-->
        <div class="column">
            <b-button type="is-primary is-medium" expanded @click="$emit('home')" icon-left="redo">В начало</b-button>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Conclusion",
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
            conclusionMessages: function() {
                let messages = []
                let geneABCG2 = null
                let geneSLCO1B1 = null
                if (this.answers.slide7 !== null) {
                    geneABCG2 = this.answers.slide7[0]
                    geneSLCO1B1 = this.answers.slide7[1]
                }

                if (this.answers.slide1) {
                    const totalScore = this.answers.slide34
                    if (totalScore > 8) {
                        messages.push({
                            'type': 'danger',
                            'icon': 'alert-circle',
                            'text': `У больного определенная семейная гиперлипидемия. ${totalScore} баллов по критериям голландской сети липидных клиник`
                        })
                    } else if (totalScore >= 6) {
                        messages.push({
                            'type': 'warning',
                            'icon': 'alert',
                            'text': `У больного возможная семейная гиперлипидемия. ${totalScore} баллов по критериям голландской сети липидных клиник`
                        })
                    } else if (totalScore >= 3) {
                        messages.push({
                            'type': 'warning',
                            'icon': 'alert',
                            'text': `У больного вероятная семейная гиперлипидемия. ${totalScore} баллов по критериям голландской сети липидных клиник`
                        })
                    } else if (totalScore < 3) {
                        messages.push({
                            'type': 'success',
                            'icon': 'check-circle',
                            'text': `У больного диагноз семейная гиперлипидемия мало вероятен. ${totalScore} баллов по критериям голландской сети липидных клиник`
                        })
                    } else {
                        messages.push({
                            'type': 'danger',
                            'icon': 'alert-circle',
                            'text': 'Ошибка при заполнении формы. Не доступны данные шкалы голландской сети липидных клиник'
                        })
                    }
                    if (totalScore >= 6) {
                        // Slide 5
                        if (this.answers.slide5 === "AA") {
                            messages.push({
                                'type': 'info',
                                'icon': 'information',
                                'text': 'Больной является носителем генотипа AA в гене ApoB (rs5742904). Подтвержден диагноз гомозиготная гиперлипидемия тип B'
                            })
                        } else if (this.answers.slide5 === "AG") {
                            messages.push({
                                'type': 'info',
                                'icon': 'information',
                                'text': 'Больной является носителем генотипа AG в гене ApoB (rs5742904). Подтвержден диагноз гомозиготная гиперлипидемия тип B'
                            })
                        } else if (this.answers.slide5 === "GG") {
                            messages.push({
                                'type': 'info',
                                'icon': 'information',
                                'text': 'Больной является носителем генотипа GG в гене ApoB (rs5742904). Для точной диагностики характера гиперлипидемии необходимо проведение NGS'
                            })
                        } else {
                            messages.push({
                                'type': 'warning',
                                'icon': 'alert',
                                'text': 'Рекомендовано тестирование по панели "ЛИПРО-скрин-Б". Маркер rs5742904 в гене ApoB.'
                            })
                        }

                        // Slide 6
                        let tmpText = ''
                        if (this.answers.slide6) {
                            tmpText = 'Риск очень высокий &mdash; снижение ХС ЛПНП не менее чем на 50% от исходного уровня, целевое значение ХС ЛПНП менее 1,4 ммоль/л (менее 55 мг/дл)'
                        } else {
                            tmpText = 'Риск высокий &mdash; снижение ХС ЛПНП не менее чем на 50% от исходного уровня, целевое значение ХС ЛПНП менее 1,8 ммоль/л (менее 70 мг/дл)'
                        }
                        messages.push({
                            'type': 'info',
                            'icon': 'information',
                            'text': `Рекомендации:
                            <ul>
                                <li>${tmpText}</li>
                                <li>Препараты первого выбора &mdash; статины. При не достижении целевого уровня ХС ЛПНП на фоне терапии статинами в максимальной переносимой дозе и эзетимибом к терапии добавляются ингибиторы PCSK9</li>
                            </ul>
                            `
                        })
                    }
                } else {
                    // All answers in Slide 1 are false
                    messages.push({
                        'type': 'success',
                        'icon': 'check-circle',
                        'text': "Вероятность семейной гиперлипидемии низкая."
                    })
                    if (! this.answers.slide2) {
                        messages.push({
                            'type': 'success',
                            'icon': 'check-circle',
                            'text': "Показаний для генетического тестирования нет."
                        })
                    }
                }

                if (this.answers.slide2 || (this.answers.slide34 >=6)) {
                    // ABCG2
                    if (geneABCG2 === "AA") {
                        messages.push({
                            'type': 'warning',
                            'icon': 'alert',
                            'text': "По результатам генетического тестирования выявлено носительство генотипа AA гена ABCG2 маркер rs2231142. Не рекомендуется использовать дозы розувастатина более 20 мг/сут"
                        })
                    } else if (geneABCG2 === "AC") {
                        messages.push({
                            'type': 'info',
                            'icon': 'information',
                            'text': "По результатам генетического тестирования выявлено носительство генотипа AC гена ABCG2 маркер rs2231142. Могут быть использованы любые дозы розувастатина, с осторожностью - 40 мг/сут"
                        })
                    } else if (geneABCG2 === "CC") {
                        messages.push({
                            'type': 'info',
                            'icon': 'information',
                            'text': "По результатам генетического тестирования выявлено носительство генотипа CC гена ABCG2 маркер rs2231142. Могут быть максимальные дозы розувастатина"
                        })
                    } else {
                        messages.push({
                            'type': 'warning',
                            'icon': 'alert',
                            'text': "В связи с наличием показаний к терапии статинами показано проведение тестирования гена ABCG2 маркер rs2231142 (профиль \"ФАРМА-скрин-транспорт\")"
                        })
                    }

                    // SLCO1B1
                    if (geneSLCO1B1 === "TT") {
                        messages.push({
                            'type': 'warning',
                            'icon': 'alert',
                            'text': `
                                У больного при проведении тестирования выявлен генотип TT маркера rs4149056 гена SLCO1B1. Не рекомендуется использовать дозы статинов выше указанных:
                                <ul>
                                    <li>Симвастатин, Аторвастатин и Правастатин &mdash; 80 мг/сут</li>
                                    <li>Розувастатин &mdash; 40 мг/сут</li>
                                </ul>
                            `
                        })
                    } else if (geneSLCO1B1 === "TC") {
                        messages.push({
                            'type': 'warning',
                            'icon': 'alert',
                            'text': `
                                У больного при проведении тестирования выявлен генотип TC маркера rs4149056 гена SLCO1B1. Не рекомендуется использовать дозы статинов выше указанных:
                                <ul>
                                    <li>Симвастатин, Аторвастатин и Правастатин &mdash; 40 мг/сут</li>
                                    <li>Розувастатин &mdash; 20 мг/сут</li>
                                </ul>
                            `
                        })
                    } else if (geneSLCO1B1 === "CC") {
                        messages.push({
                            'type': 'warning',
                            'icon': 'alert',
                            'text': `
                                У больного при проведении тестирования выявлен генотип CC маркера rs4149056 гена SLCO1B1. Не рекомендуется использовать дозы статинов выше указанных:
                                <ul>
                                    <li>Симвастатин, Аторвастатин &mdash; 20 мг/сут</li>
                                    <li>Правастатин &mdash; 40 мг/сут</li>
                                    <li>Розувастатин &mdash; 20 мг/сут (10 мг/сут при сочетании с носительством генотипа AA гена BCG2)</li>
                                </ul>
                            `
                        })
                    } else {
                        messages.push({
                            'type': 'warning',
                            'icon': 'alert',
                            'text': "В связи с наличием показаний к терапии статинами показано проведение тестирования гена SLCO1B1 маркер rs4149056"
                        })
                    }
                }
                return messages
            }
        }

    }
</script>
