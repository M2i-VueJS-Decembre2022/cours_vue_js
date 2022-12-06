const liste_legumes = {
    template:`
    
    <div v-for="legume in legumes" class="mt-2">

        Des {{ legume.nom }}, j'en possède {{ legume.quantite }}
        <button type="button" class="btn btn-primary btn-sm" @click="legume.quantite++">En acheter un</button>

    </div>
    <button type="button" class="mt-3 btn btn-success" @click="$emit('genererpdf')">Générer le PDF</button>
    `,
    props:['legumes']
}