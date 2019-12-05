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
                    messages.push({
                        'type': 'info',
                        'icon': 'information',
                        'text': "Данная часть заключения в стадии разработки."
                    })
                } else {
                    // All answers in Slide 1 are false
                    messages.push({
                        'type': 'success',
                        'icon': 'check-circle',
                        'text': "Вероятность семейной гиперлипидемии низкая."
                    })
                    if (this.answers.slide2) {
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
                    } else {
                        messages.push({
                            'type': 'success',
                            'icon': 'check-circle',
                            'text': "Показаний для генетического тестирования нет."
                        })
                    }
                }
                return messages
            }
        }

    }
</script>
