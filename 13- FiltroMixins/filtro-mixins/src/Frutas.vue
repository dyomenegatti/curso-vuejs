<template>
  <div>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">
        {{ fruta }}
      </li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import FrutasMixins from './FrutasMixins.js'; 

export default {
  mixins: [ FrutasMixins ],
  created() {
    console.log('Created - Usuário Frutas.vue!')
  }
}
</script>

<style scoped>

</style>