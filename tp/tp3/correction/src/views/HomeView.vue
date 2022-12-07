<template>

  <div class="text-center">
    <h1 class="fs-3 mt-4">Bienvenue sur Navig'er</h1>
  </div>

  <InputIdPirate @updatePirateId="updatePirateId">Votre identifiant pirate</InputIdPirate>
  <BateauList :bateaux="bateaux" />

</template>

<script>
import BateauList from '@/components/BateauList.vue'
import InputIdPirate from "@/components/InputIdPirate";
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    BateauList, InputIdPirate
  },
  data() {
    return {
      bateaux: [],
      idPirate: process.env.URL_BACKEND
    }
  },
  methods: {
    async fetchBoats() {

      let vm = this;

      await axios.get(this.$url_backend+'/api/boat/'+this.idPirate)
        .then(function (response) {
          vm.bateaux = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    updatePirateId(idPirate){
      this.idPirate = idPirate
      if(this.idPirate.length >= 5){
        this.fetchBoats()
      }else{
        this.bateaux = ''
      }
    }
  }
}
</script>