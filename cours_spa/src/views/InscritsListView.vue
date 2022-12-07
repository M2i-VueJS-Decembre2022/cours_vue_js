<template>
    <h2>Liste des utilisateurs inscrits</h2>
    <InscritsList :list_inscrits="personnes" />
</template>

<script>
import InscritsList from '@/components/InscritsList'
import axios from 'axios'

export default{
    name:'InscritsListView',
    components:{
        InscritsList
    },
    data(){
        return{
            personnes: []
        }
    },
    methods:{
        async fetchUsers(){
            const userResponse = await axios.get('https://randomuser.me/api/?results=3');
            this.personnes = userResponse.data.results;
        }
    },
    mounted(){
        this.fetchUsers();
    }
}

</script>