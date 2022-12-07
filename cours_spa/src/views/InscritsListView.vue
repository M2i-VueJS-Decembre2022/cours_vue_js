<template>
    <h2>Liste des utilisateurs inscrits</h2>
    <InscritsList :list_inscrits="personnes" />
</template>

<script>
import InscritsList from '@/components/InscritsList'

export default{
    name:'InscritsListView',
    components:{
        InscritsList
    },
    data(){
        return{
            personnes: [
                {
                    id: 1,
                    nom:"Jackson",
                    prenom:"Michael",
                    age:41
                },
                {
                    id: 2,
                    nom:"Hendrix",
                    prenom:"Jimmy",
                    age:27
                },
                {
                    id: 3,
                    nom:"Mandela",
                    prenom:"Nelson",
                    age:80
                }
            ]
        }
    }
}

</script>