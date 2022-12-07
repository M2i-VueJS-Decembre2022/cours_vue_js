<template>

    <MessageBox v-if="messageBoxVisible" :type="messageBoxType">{{ messageBoxMessage }}</MessageBox>

    <h1 class="fs-3 mt-4 text-center">Ajouter un bateau</h1>
    <InputIdPirate @updatePirateId="updatePirateId">Votre identifiant pirate<br/><small>(requis pour ajouter)</small></InputIdPirate>

    <div class="container mt-5">
        <form method="post" class="w-50 m-auto mt-4">

            <div class="row">
                <div class="col-6">
                    <label for="nomBateau" class="form-label">Nom du bateau *</label>
                    <input v-model="nomBateau" type="text" class="form-control" id="nomBateau">
                </div>
                <div class="col-6">
                    <label for="urlImageBateau" class="form-label">Image du bateau *</label>
                    <input v-model="urlImageBateau" type="text" class="form-control" id="urlImageBateau">
                </div>
                <div class="col-6">
                    <label for="nbCanons" class="form-label">Nombre de canons *</label>
                    <input v-model="nbCanons" type="text" class="form-control" id="nbCanons">
                </div>
                <div class="col-6">
                    <label for="tailleEquipage" class="form-label">Taille de l'équipage *</label>
                    <input v-model="tailleEquipage" type="text" class="form-control" id="tailleEquipage">
                </div>
                <div class="col-6">
                    <button type="button" class="btn btn-success mt-4" @click="ajouterBateau">Ajouter</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import MessageBox from '@/components/MessageBox.vue'
import InputIdPirate from "@/components/InputIdPirate";

export default {
    name: 'BateauEditer',
    components: {
      InputIdPirate,
        MessageBox
    },
    data() {
        return {
            nomBateau: '',
            urlImageBateau: '',
            nbCanons: '',
            tailleEquipage: '',
            messageBoxVisible: false,
            messageBoxMessage: '',
            messageBoxType: '',
            idPirate: ''
        }

    },
    methods: {
        async ajouterBateau() {

            let vm = this;

            if(this.idPirate.length < 5){
              vm.messageBoxVisible = true
              vm.messageBoxMessage = "Veuillez insérer votre ID pirate (5 caractères mini) !"
              vm.messageBoxType = "alert alert-danger"
              return false;
            }

            await axios.post(this.$url_backend+'/api/boat', {
                nom: this.nomBateau,
                idPirate: this.idPirate,
                image: this.urlImageBateau,
                nbCanon: parseInt(this.nbCanons),
                tailleEquipage: parseInt(this.tailleEquipage)
            })
                .then(function (response) {

                    if (response.data.message === "Bateau créé") {
                        vm.nomBateau = ''
                        vm.urlImageBateau = ''
                        vm.nbCanons = ''
                        vm.tailleEquipage = ''

                        vm.messageBoxVisible = true
                        vm.messageBoxMessage = "Le bateau a bien été ajouté !"
                        vm.messageBoxType = "alert alert-success"
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        updatePirateId(idPirate){
          this.idPirate = idPirate
        }
    }
}
</script>
