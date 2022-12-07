<template>
    <table>
        <thead>
            <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Âge</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="personne in list_inscrits" :key="personne.id">
                <td>{{ personne.prenom }}</td>
                <td>{{ personne.nom }}</td>
                <td>{{ personne.age }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default{

    name: 'InscritsList',
    props:{
        list_inscrits: Array
    }

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
