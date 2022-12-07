const liste_memes = {
    template: `
    
    <h1>Voici {{ nb_memes }} meme{{ nb_memes > 1 ? 's' : '' }}</h1>
    <slot name="button"></slot>

    <section class="d-flex flex-wrap">
        <div v-for="(meme,index) in liste_memes.slice(0,nb_memes)" class="card me-3 mt-2" style="width: 18rem;">
            <img :src="meme.url" class="card-img-top" alt="...">
            <div class="card-body">
                <transition enter-active-class="animate__animated animate__bounceInLeft" leave-active-class="animate__animated animate__bounceOutRight">
                    <h5 v-if="voir_nom_meme" class="card-title">{{ index + 1}} - {{ meme.name }}</h5>
                </transition>
            </div>
        </div>
    </section>
    
    `,
    props: ['liste_memes', 'nb_memes', 'voir_nom_meme']
}