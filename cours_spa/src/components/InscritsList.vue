<template>
    <table>
        <thead>
            <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Âge</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="personne in list_inscrits" :key="personne.email">
                <td>{{ personne.name.first }}</td>
                <td>{{ personne.name.last }}</td>
                <td>{{ personne.dob.age }}</td>
                <td><button type="button" @click="sendMail">Envoyer email inscription</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script>

import sendMail from '@/mixins/sendMail';

export default{

    name: 'InscritsList',
    props:{
        list_inscrits: Array
    },
    mixins:[sendMail]

}
</script>

<style scoped>
table{
    margin: auto;
}
th{
    background: lightgrey;
    font-size: 140%;
}
td{
    width: 10rem;
    text-align: center;
}
</style>
