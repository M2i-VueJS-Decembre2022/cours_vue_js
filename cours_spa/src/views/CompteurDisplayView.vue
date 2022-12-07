<template>
    <ButtonCompteur :val="val" />
</template>

<script>
import ButtonCompteur from '@/components/ButtonCompteur.vue'

export default{
    name:'CompteurDisplayView',
    components:{
        ButtonCompteur
    },
    data(){
        return{
            val: 1
        }
    }
}

</script>