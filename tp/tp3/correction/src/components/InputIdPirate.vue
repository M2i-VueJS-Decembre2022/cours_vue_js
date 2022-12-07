<template>
  <div class="text-center mt-4">
    <slot>></slot>
    <div class="d-flex justify-content-center">
      <input type="text" class="form-control me-1" style="width:10%" v-model="idPirate" @keyup="$emit('updatePirateId',idPirate)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputIdPirate",
  data(){
    return{
      idPirate: ""
    }
  }
}
</script>