<template>
  <div id="app">
    <usuario-lista :usuarios="usuarios" />
    <usuario-detalhe />
  </div>
</template>

<script>
import UsuarioLista from './components/UsuarioLista.vue';
import UsuarioDetalhe from './components/UsuarioDetalhe.vue';

export default {
  name: 'App',
  components: {
    UsuarioLista,
    UsuarioDetalhe
  },
  data() {
    return {
      usuarios: [
        { id: 1, nome: 'Dyovana', idade: 25 },
        { id: 2, nome: 'Marco', idade: 27 },
        { id: 3, nome: 'Jocimar', idade: 62 },
        { id: 4, nome: 'Leila', idade: 58 },
        { id: 5, nome: 'Dory', idade: 40 },
        { id: 6, nome: 'Jade', idade: 41 }
      ]
    }
  }
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;

	display: flex;
	font-size: 2rem;
}

#app div {
	margin: 20px;
}
</style>
