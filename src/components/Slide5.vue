<template>
<div class="container">
    <div class="columns">
      <div class="column is-full">
          <p class="title is-4">
            При наличии 6 и более баллов по системе критериев Голландской сети липидных клиник больному может быть рекомендовано проведение NGS для выявления причинной мутации, а также обследование родственников
          </p>
          <p class="subtitle">
            При обследовании может быть рекомендовано тестирование по панели «ЛИПО-скрин-Б»
          </p>
          <p>
          <b-field label="Внесите результаты тестирования маркер rs5742904 в гене АроВ" custom-class="is-medium">
            <b-input v-model="geneApoB" size="is-medium"></b-input>
          </b-field>
          </p>
      </div>
    </div>
    <div class="columns">
        <div class="column"><b-button type="is-light is-medium" expanded>Пропустить</b-button></div>
        <div class="column"><b-button type="is-primary is-medium" outlined expanded>Далее</b-button></div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Slide5",
        data() {
            return {
                answer: null,
                geneApoB: null,
            }
        }
    }
</script>