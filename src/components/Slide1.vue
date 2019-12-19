<template>
<div class="container">
    <h1 class="title is-4">Отметьте наличие у больного следующих состояний</h1>
    <b-table
        :data="data"
        :columns="columns"
        :checked-rows.sync="checkedRows"
        checkable
        :header-checkable="headerCheckable"
        checkbox-position="right"></b-table>
        <hr>
        <b-button size="is-medium" type="is-primary" expanded @click="$emit('next', checkedRows)">Далее</b-button>
</div>
</template>

<script>
    export default {
        name: "Slide1",
        data() {
            return {
                data: [
                    { 'id': 1, 'label': 'Уровень холестерина ≥8 ммоль/л или ЛНП выше 4,9 ммоль/л'},
                    { 'id': 2, 'label': 'Наличие ИБС, развившейся в возрасте до 55 лет для муж или до 60 лет для женщин, у обследуемого'},
                    { 'id': 3, 'label': 'Наличие ИБС, развившейся в возрасте до 55 лет для муж или до 60 лет для женщин, у родственников'},
                    { 'id': 4, 'label': 'Наличие ксантом на сухожилиях (у обследуемого или у членов его семьи)'},
                    { 'id': 5, 'label': 'внезапная сердечная смерть у членов семьи (в раннем возрасте – до 55 лет муж, до 60 лет жен).уровень холестерина ≥8 ммоль/л или ЛНП выше 4,9 ммоль/л'}
                ],
                checkboxPosition: 'left',
                headerCheckable: false,
                checkedRows: [],
                columns: [
                    {
                        field: 'id',
                        label: '№',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'label',
                        label: 'Вопрос',
                    }
                ]
            }
        }
    }
</script>