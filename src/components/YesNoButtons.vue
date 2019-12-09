<template>
  <b-field>
    <b-radio-button
        :native-value="scores.no"
        v-bind:value="value"
        v-on:input="$emit('input', $event)"><p>Нет<span v-if="showScores" class="tag is-dark"> {{scores.yes}}</span></p></b-radio-button>
    <b-radio-button
        :native-value="scores.yes"
        v-bind:value="value"
        v-on:input="$emit('input', $event)"><p>Да<span v-if="showScores" class="tag is-dark">  {{scores.yes}}</span></p></b-radio-button>
  </b-field>
</template>

<script>
export default {
    name: "YesNoButtons",
    props: {
        scores: {
            type: Object,
            default: function () {
                return {no: false, yes: true}
            }
        },
        showScores: {
            type: Boolean,
            default: false
        },
        value: {
            default: undefined
        }
    }
}
</script>
