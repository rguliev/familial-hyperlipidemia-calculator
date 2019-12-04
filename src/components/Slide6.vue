<template>
<div class="container">
    <h1 class="title is-4">Оценка риска</h1>
    <div class="columns">
      <div class="column is-full">
          <p>
              Есть ли у больного факторы риска атеросклероза (помимо семейной гиперлипидемии)?
          </p>
      </div>
    </div>
    <div class="columns">
        <div class="column"><b-button type="is-primary is-medium" outlined expanded>Нет</b-button></div>
        <div class="column"><b-button type="is-primary is-medium" outlined expanded>Да</b-button></div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Slide2",
        data() {
            return {
                answer: null
            }
        }
    }
</script>