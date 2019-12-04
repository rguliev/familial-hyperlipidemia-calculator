<template>
<div class="container">
    <h1 class="title is-4">Назначение терапии</h1>

    <div class="columns">
      <div class="column has-text-justified">Перед назначением высоких доз розувастатина может быть рекомендовано генетическое тестирование по панели <b>Профиль «ФАРМА-скрин-транспорт»</b>.Внесите результаты тестирования маркер rs2231142 в гене ABCG2:</div>
    </div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <b-field>
            <b-radio-button v-model="geneABCG2" native-value="AA">AA</b-radio-button>
            <b-radio-button v-model="geneABCG2" native-value="AC">AC</b-radio-button>
            <b-radio-button v-model="geneABCG2" native-value="CC">CC</b-radio-button>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column has-text-justified">Перед назначением высоких доз статинов желательно тестирование маркера rs4149056 гена SLCO1B1. Внесите результаты тестирования:</div>
    </div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <b-field>
            <b-radio-button v-model="geneSLCO1B1" native-value="TT">TT</b-radio-button>
            <b-radio-button v-model="geneSLCO1B1" native-value="TC">TC</b-radio-button>
            <b-radio-button v-model="geneSLCO1B1" native-value="CC">CC</b-radio-button>
        </b-field>
      </div>
    </div>

    <div class="columns">
        <div class="column">
            <b-button type="is-light is-medium" expanded @click="$emit('next', null, null)">Пропустить</b-button>
        </div>
        <div class="column">
            <b-button type="is-primary is-medium" outlined expanded @click="$emit('next', geneABCG2, geneSLCO1B1)">Далее</b-button>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Slide5",
        data() {
            return {
                answer: null,
                geneABCG2: null,
                geneSLCO1B1: null,
            }
        }
    }
</script>