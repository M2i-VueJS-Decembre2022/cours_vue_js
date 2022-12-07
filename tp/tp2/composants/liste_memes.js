const liste_memes = {
    template: `
    
    <h2>Voici {{ nb_memes }} meme{{ nb_memes > 1 ? 's' : '' }}</h2>
    <slot name="button"></slot>

    <section class="d-flex flex-wrap">
        <div v-for="(meme,index) in liste_memes.slice(0,nb_memes)" class="card me-3 mt-2" style="width: 18rem;">
            <img :src="meme.url" class="card-img-top" alt="...">
            <div class="card-body">
                <slot name="nom_meme" :nom_meme="meme.name" :numero_meme="index+1"></slot>
            </div>
        </div>
    </section>
    
    `,
    props: ['liste_memes', 'nb_memes', 'voir_nom_meme']
}