<template>
<div class="container">
    <h1 class="title is-4">Критерии Голландской сети липидных клиник</h1>
    <h2 class="subtitle">Отметьте наличие у больного следующих состояний</h2>
    <table class="table is-striped is-narrow">
        <thead>
            <tr>
                <th>Критерий</th>
                <th>Балл</th>
            </tr>
        </thead>
        <tfoot v-if="isAnyClicked">
            <tr>
                <th colspan="2" class="is-centered is-info">
                    <p>
                        Сумма баллов: {{totalScore}}. {{totalScoreText}}
                    </p>
                </th>
            </tr>
        </tfoot>
        <tbody>
            <tr v-for="(question, questionIndex) in questions" :key="questionIndex">
                <td>{{ question.label }}</td>
                <td>
                    <b-field :group-multiline="question.choices.length > 2" :addons="question.choices.length == 2">
                        <b-radio-button
                            v-for="(choice, choiseIndex) in question.choices"
                            v-model="question.answerScore"
                            :native-value="choice.score"
                            :key="questionIndex + choiseIndex">
                            <p>{{ choice.label }} <span class="tag is-dark">{{choice.score}}</span></p>
                        </b-radio-button>
                    </b-field>
                </td>
            </tr>
        </tbody>
    </table>
    <hr>
    <b-button v-show="isAnyClicked" size="is-medium" type="is-primary" expanded @click="$emit('next', totalScore)">Далее</b-button>
</div>
</template>

<script>
    export default {
        name: "Slide34",
        data() {
            return {
                questions: [
                    {
                        label: 'Есть ли у больного родственники первой линии родства (родители, родные братья и сестры) с ранней ИБС?',
                        choices: [
                            {label: "Нет", score: 0},
                            {label: "Да", score: 1},
                        ],
                        answerScore: NaN
                    },
                    {
                        label:'Есть ли у больного родственники первой линии родства с ЛНП> 95 персентиля (с учетом возраста, пола и страны) (ЛНП> 4,9 ммоль/л для взрослых)?',
                        choices: [
                            {label: "Нет", score: 0},
                            {label: "Да", score: 1},
                        ],
                        answerScore: NaN
                    },
                    {
                        label: 'Есть ли у больного родственники первой линии родства с сухожильными ксантомами?',
                        choices: [
                            {label: "Нет", score: 0},
                            {label: "Да", score: 2},
                        ],
                        answerScore: NaN
                    },
                    {
                        label: 'Есть ли у больного дети до 18 лет с повышенным уровнем ЛНП?',
                        choices: [
                            {label: "Нет", score: 0},
                            {label: "Да", score: 2},
                        ],
                        answerScore: NaN
                    },
                    {
                        label: 'Есть ли у больного ИБС, дебютировавшая в возрасте до 55 лет (муж) или до 60 лет (жен)?',
                        choices: [
                            {label: "Нет", score: 0},
                            {label: "Да", score: 2},
                        ],
                        answerScore: NaN
                    },
                    {
                        label: 'Есть ли у больного ЦВБ или периферический атеросклероз, выявленный до 55 лет (муж) или до 60 лет (жен) ?',
                        choices: [
                            {label: "Нет", score: 0},
                            {label: "Да", score: 1},
                        ],
                        answerScore: NaN
                    },
                    {
                        label: 'Есть ли у больного сухожильные ксантомы?',
                        choices: [
                            {label: "Нет", score: 0},
                            {label: "Да", score: 6},
                        ],
                        answerScore: NaN
                    },
                    {
                        label: 'Есть ли у больного липоидная дуга роговицы, выявленная в возрасте моложе 45 лет?',
                        choices: [
                            {label: "Нет", score: 0},
                            {label: "Да", score: 4},
                        ],
                        answerScore: NaN
                    },
                    {
                        label: 'Каков у больного уровень холестерина ЛНП?',
                        choices: [
                            {label: '4,0 – 4,9 ммоль/л', score: 1},
                            {label: '5,0 – 6,4 ммоль/л', score: 3},
                            {label: '6,5 – 8,4 ммоль/л', score: 5},
                            {label: '    > 8,5 ммоль/л', score: 8}
                        ],
                        answerScore: NaN
                    },
                    {
                        label: 'Выявлена мутации гена LDLR, APOB или PCSK9?',
                        choices: [
                            {label: "Нет", score: 0},
                            {label: "Да", score: 8},
                        ],
                        answerScore: NaN
                    }
                ]
            }
        },
        computed: {
            answers: function() {
                return this.questions.map(question => question.answerScore)
            },
            isAnyClicked: function() {
                return ! this.answers.every(isNaN)
            },
            totalScore: function() {
                if (this.isAnyClicked) {
                    return this.answers.reduce((total, score) => isNaN(parseInt(score)) ? total : (total + parseInt(score)), 0)
                }
                return NaN
            },
            totalScoreText: function() {
                const ts = this.totalScore;
                if (isNaN(ts)) {
                    return NaN
                }
                if (ts > 8) {
                    return 'У больного определенная СГ'
                }
                if (ts >= 6) {
                    return 'У больного возможная СГ'
                }
                if (ts >= 3) {
                    return 'У больного вероятная СГ'
                }
                return 'У больного диагноз СГ мало вероятен'
            }
        }
    }
</script>

<style scoped>
    td, th {
        vertical-align: middle;
    }
    span.tag.is-dark {
        border-radius: 9999px;
    }
</style>