const compteur = {
    template: `<button type="button" @click="nombre++;$emit('calculersomme')">{{ nombre }}</button>`,
    data(){
        return{
            nombre: 0
        }
    }
}