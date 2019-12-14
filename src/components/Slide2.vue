<template>
<div class="container">
    <h2 class="subtitle">Оцените наличие у больного дополнительных факторов риска</h2>
    <table class="table is-striped is-narrow is-hoverable">
        <thead>
            <tr>
                <th>№</th>
                <th>Вопрос</th>
                <th>Балл</th>
            </tr>
        </thead>
        <tfoot v-if="group">
            <tr>
                <th colspan="3" class="is-centered" :class="risk.status">
                    <p>
                        {{risk.text}}
                    </p>
                </th>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td>1</td>
                <td>Больной  переносил нестабильную стенокардию, инфаркт миокарда, коронарную реваскуляризацию, инсульт, ТИА,  или имеет симптомный периферический атеросклероз</td>
                <td><YesNoButtons v-model="answers[0]"/></td>
            </tr>
            <tr>
                <td>2</td>
                <td>У больного есть документированный атеросклероз (поражение 2 и более коронарных сосудов со стенозированием 50% и более по данных коронароангиографии или КТ) или значимое поражение сонных артерий по данным ЦДС</td>
                <td><YesNoButtons v-model="answers[1]"/></td>
            </tr>
            <tr>
                <td>3</td>
                <td>СД 2 типа с поражением органов-мишеней или в сочетании с 3 «главными» ФР (гиперлипидемией, гипертонией или курением) или СД1 типа – длительностью более 20 лет</td>
                <td><YesNoButtons v-model="answers[2]"/></td>
            </tr>
            <tr>
                <td>4</td>
                <td>СД без поражения органов мишеней длительностью более 10 лет, но менее 20</td>
                <td><YesNoButtons v-model="answers[3]"/></td>
            </tr>
            <tr>
                <td>5</td>
                <td>СД 1 типа в возрасте  до 35 л, СД 2 типа в возрасте до  50 лет длительностью менее 10 лет</td>
                <td><YesNoButtons v-model="answers[4]"/></td>
            </tr>
            <tr>
                <td>6</td>
                <td>СКФ, мл/мин/1,73 кв.м.</td>
                <td><b-numberinput controls-position="compact" min="0" v-model="answers[5]" :controls="false"></b-numberinput></td>
            </tr>
            <tr>
                <td>7</td>
                <td>Артериальная гипертония с АД выше 180/110 мм рт ст</td>
                <td><YesNoButtons v-model="answers[6]"/></td>
            </tr>
            <tr>
                <td>8</td>
                <td>Расчетный риск по SCORE, %</td>
                <td><b-numberinput controls-position="compact" min="0" v-model="answers[7]" :controls="false"></b-numberinput></td>
            </tr>
        </tbody>
    </table>
    <hr>
    <b-button v-show="group" size="is-medium" type="is-primary" expanded @click="$emit('next', group)">Далее</b-button>
</div>
</template>

<script>
    import YesNoButtons from "./YesNoButtons";
    export default {
        name: "Slide2",
        components: {YesNoButtons},
        data() {
            return {
                answers: Array(8).fill(undefined),
            }
        },
        computed: {
            group: function () {
                if (this.answers[0] || this.answers[1] || this.answers[2] || (this.answers[5] < 30) || (this.answers[7] >= 10)) {
                    return "A"
                } else if (this.answers[3] || this.answers[6] || (this.answers[5] < 60) || (this.answers[7] >= 6)) {
                    return "B"
                } else if (this.answers[4] || (this.answers[7] >= 1)) {
                    return "C"
                } else if ((this.answers[5] >= 60) || (this.answers[7] === 0)) {
                    return "D"
                }
                return undefined
            },
            risk: function() {
                let text, status
                switch (this.group) {
                    case "A":
                        text = "Очень высокий риск сердечно-сосудистых осложнений"
                        status = "is-danger"
                        break;
                    case "B":
                        text = "Высокий риск сердечно-сосудистых осложнений"
                        status = "is-danger"
                        break;
                    case "C":
                        text = "Умеренный риск сердечно-сосудистых осложнений"
                        status = "is-warning"
                        break;
                    case "D":
                        text = "Низкий риск сердечно-сосудистых осложнений"
                        status = "is-success"
                        break;
                }
                return {text: text, status: status}
            }
        }
    }
</script>

<style scoped>
    td, th {
        vertical-align: middle;
    }
</style>