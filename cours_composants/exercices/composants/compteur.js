const compteur = {
    template: '<button type="button" @click="nombre++">{{ nombre }}</button>',
    data(){
        return{
            nombre: 0
        }
    }
}