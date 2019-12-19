<template>
<div class="container content">
    <a href="http://cgma.su/" target="_blank" class="cgma-link">
        <table class="cgma-table">
            <tr>
                <td><img src="../assets/cgma_logo.png" alt="Герб"></td>
                <td>
                    <p>«Центральная  государственная  медицинская академия»</p>
                    <p>Управления делами Президента Российской Федерации</p>
                </td>
            </tr>
        </table>
    </a>
    <h1 class="title">Заключение</h1>

    <BMessageWithHTML :title="fhMessage.title" :type="fhMessage.status" has-icon :text="fhMessage.text"/>
    <BMessageWithHTML v-for="(message, index) in fhGeneMessages" :key="`fh-${index}`" :type="message.status" has-icon :text="message.text"/>
    <BMessageWithHTML :title="statinMessage.title" :type="statinMessage.status" has-icon :text="statinMessage.text"/>
    <BMessageWithHTML v-for="(message, index) in statinGeneMessages" :key="`statin-${index}`" :type="message.status" has-icon :text="message.text"/>

    <hr class="no-print">
    <div class="columns no-print">
        <div class="column">
            <b-button type="is-light is-medium" expanded @click="print()" icon-left="printer">Печатать</b-button>
        </div>
        <div class="column">
            <b-button type="is-primary is-medium" expanded @click="$emit('home')" icon-left="redo">В начало</b-button>
        </div>
    </div>
</div>
</template>

<script>
    import BMessageWithHTML from "./BMessageWithHTML";
    export default {
        name: "Conclusion",
        components: {BMessageWithHTML},
        props: {
            fhMessage: Object,
            statinMessage: Object,
            fhGeneMessages: Object,
            statinGeneMessages: Object
        },
        data() {
            return {}
        },
        methods: {
            print: function () {
                window.print()
            }
        }
    }
</script>

<style scoped>
div.container {
    background-color: white !important;
}
table.cgma-table {
    width: auto;
    margin: auto;
    margin-top: -1.5em;
}
table.cgma-table * {
    margin: 0px;
    font-size: 0.8em;
}
table.cgma-table td {
    vertical-align: middle;
}
table.cgma-table img {
    max-height: 50px;
    height: 100%;
}
@media print {
    .no-print { display: none; }
}
</style>