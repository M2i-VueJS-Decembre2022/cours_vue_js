const liste_jeux = {
    template: `
    <h2 class="mt-5">{{ capitalizeBizarre }}</h2>
    <slot name="presentation"></slot>
    <section class="d-flex mt-3">
        <div class="card" style="width: 18rem;" v-for="jeu in listjeux">
            <div class="card-body">
                <h5 class="card-title"><slot :jeu="jeu"></slot></h5>
                <p class="card-text">{{ jeu.description }}</p>
                <a href="#" class="btn btn-primary btn-sm" @click="$emit('checkdispo')">Checker disponibilité</a>
            </div>
        </div>
    </section>
    <slot name="phrase_finale"></slot>
    
    `,
    props:['titre','listjeux'],
    computed:{
        capitalizeBizarre(){
            const lettre = this.titre.split('');
            for(i=0;i<lettre.length;i++){

                if(i%2 == 0){
                    lettre[i] = lettre[i].toUpperCase()
                }

            }
            return lettre.join('');
        }
    }
}