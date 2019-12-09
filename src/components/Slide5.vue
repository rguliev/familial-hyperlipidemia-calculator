<template>
<div class="container">
    <p class="title is-4">
      При наличии 6 и более баллов по системе критериев Голландской сети липидных клиник больному может быть рекомендовано проведение NGS для выявления причинной мутации, а также обследование родственников
    </p>
    <p class="subtitle">
      При обследовании может быть рекомендовано тестирование по панели «ЛИПО-скрин-Б»
    </p>

    <div class="columns">
      <div class="column has-text-justified">Внесите результаты тестирования маркер rs5742904 в гене АроВ:</div>
    </div>
    <div class="columns">
      <div class="column is-one-third is-offset-one-third">
        <b-field>
              <b-radio-button v-model="geneApoB" native-value="AA">AA</b-radio-button>
              <b-radio-button v-model="geneApoB" native-value="AG">AG</b-radio-button>
              <b-radio-button v-model="geneApoB" native-value="GG">GG</b-radio-button>
        </b-field>
      </div>
    </div>

    <div class="columns">
        <div class="column">
          <b-button type="is-light is-medium" expanded @click="$emit('next', undefined)">Пропустить</b-button>
        </div>
        <div class="column">
          <b-button type="is-primary is-medium" outlined expanded  @click="$emit('next', geneApoB)">Далее</b-button>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Slide5",
        data() {
            return {
                answer: undefined,
                geneApoB: undefined,
            }
        }
    }
</script>