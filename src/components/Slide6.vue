<template>
<div class="container">
    <h1 class="title is-4">Оценка риска</h1>
    <div class="columns">
      <div class="column is-full">
          <p>
              Есть ли у больного факторы риска атеросклероза (помимо семейной гиперлипидемии) или перенесенное сердечно-сосудистое заболевание(осложнение)?
          </p>
      </div>
    </div>
    <div class="columns">
        <div class="column">
          <b-button type="is-primary is-medium" outlined expanded @click="$emit('next', false)">Нет</b-button>
        </div>
        <div class="column">
          <b-button type="is-primary is-medium" outlined expanded @click="$emit('next', true)">Да</b-button>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Slide2",
        data() {
            return {
                answer: undefined
            }
        }
    }
</script>