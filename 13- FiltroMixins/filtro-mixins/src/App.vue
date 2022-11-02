<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
    <hr>
    <p>{{ usuarioLogado }}</p>
    <p>{{ cpf | cpf | inverter }}</p>
    <input type="text" :value="cpf | cpf">
    <hr>
    <Frutas/>
    <hr>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">
        {{ fruta }}
      </li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add">
	</div>
</template>

<script>
import Frutas from './Frutas.vue';
import FrutasMixins from './FrutasMixins.js';
import UsuarioMixin from './UsuarioMixin.js';

export default {
  components: { Frutas },
  mixins: [ FrutasMixins, UsuarioMixin ],
  filters: {
    cpf(valor) {
      const arr = `${valor}`.split('') //garante que o valor seja interpretado e resolvido como string mesmo que não seja
      arr.splice(3, 0, '.')
      arr.splice(7, 0, '.')
      arr.splice(11, 0, '-')
      return arr.join('')
    },
  },
  data() {
    return {
      cpf: '60070080090',
    }
  },
  created() {
    console.log('Created - Usuário App.vue!')
  },
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
  font-size: 2.5rem;
}
</style>
