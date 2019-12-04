<template>
<div class="container">
    <div class="columns">
      <div class="column is-full">
          <p>
              Вероятность семейной дислипидемии у больного низкая.
              Планируется ли назнаение больному высоких доз статинов?
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