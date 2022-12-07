<template>
  <p v-if="!bateaux.length" class="text-center mt-5">Aucun navire mon capitaine.</p>
  <div class="d-flex justify-content-between flex-wrap mt-5 mx-5 mb-5">
    <div class="card mt-3" v-for="bateau in bateaux" :key="bateau._id" style="width: 18rem;">
      <img :src="bateau.image" class="card-img-top" style="height:200px">
      <div class="card-body">
        <h5 class="card-title">{{ bateau.nom }}</h5>
        <p class="card-text">{{ bateau.nbCanon }} canons
        <br/>{{ bateau.tailleEquipage }} pirates</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BateauList',
  props: {
    bateaux: Array
  }
}
</script>
