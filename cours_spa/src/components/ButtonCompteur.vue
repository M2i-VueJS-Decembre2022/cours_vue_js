<template>
    <button type="button" @click="incremente">{{ compteur }}</button>
</template>

<script>

import sendMail from '@/mixins/sendMail';

export default{

    name: 'ButtonCompteur',
    props:{
        val: Number
    },
    data(){
        return{
            compteur:this.val
        }
    },
    methods:{
        incremente(){
            this.compteur = this.compteur * 2
            if(this.compteur > 30){
                this.sendMail();
            }
        }
    },
    mixins: [sendMail]

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
