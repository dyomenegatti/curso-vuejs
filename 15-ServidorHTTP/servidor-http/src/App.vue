<template>
  <v-app>
    <div id="app" class="container">
      <h1>HTTP com Axios</h1>
      <v-card class="mx-auto" max-width="600">
        <v-card-text>
          <v-alert
            dense
            type="error"
            dismissible
            v-for="mensagem in mensagens"
            :key="mensagem.texto"
            :variant="mensagem.tipo"
          >{{ mensagem.texto }}</v-alert>
          <v-form @submit.prevent="submit">
            <v-text-field
              v-model="usuario.nome"
              label="Nome"
              placeholder="Informe o nome"
            ></v-text-field>
            <v-text-field
              v-model="usuario.email"
              label="Email"
              placeholder="Informe o email"
            ></v-text-field>
            <v-btn
              color="primary"
              @click="salvar"
            >Salvar</v-btn>
          </v-form>
          <v-divider class="mt-4" />
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="obterUsuarios"
            depressed
            large
            class="mb-5 px-12 mx-auto"
          >Obter usuários</v-btn>
        </v-card-actions>
        <v-card-text>
          <v-list>
            <v-list-item
              v-for="(usuario, id) in usuarios"
              :key="id"
            > 
              <v-list-item-content>
                <v-list-item-title>
                  <strong>Nome:</strong>  {{ usuario.nome }}
                </v-list-item-title>
                <v-list-item-title>
                  <strong>Email:</strong>  {{ usuario.email }}
                </v-list-item-title>
                <v-list-item-title>
                  <strong>ID:</strong>  {{ id }}
                </v-list-item-title>
                <v-list-item-title>
                  <v-list-item-action>
                    <v-btn 
                      depressed
                      class="mx-auto"
                      color="warning"
                      @click="carregar(id)"
                    >Carregar</v-btn>
                  </v-list-item-action>
                  <v-list-item-action>
                    <v-btn 
                      depressed
                      class="mx-auto"
                      color="red"
                      @click="excluir(id)"
                    >Excluir</v-btn>
                  </v-list-item-action>
                </v-list-item-title>
                <v-divider class="mt-4" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    mensagens: [],
    usuarios: [],
    id: null,
    usuario: {
      nome: '',
      email: ''
    }
  }),
  methods: {
    limpar() {
      this.usuario.nome = ''
      this.usuario.email = ''
      this.id = null,
      this.mensagens = []
    },
    carregar(id) {
      this.id = id 
      this.usuario = { ...this.usuarios[id] }
    },
    excluir(id) {
      this.$http.delete(`/usuarios/${id}.json`)
          .then(() => this.limpar())
          .catch(() => {
            this.mensagens.push({
              texto: 'Problema para excluir!',
              tipo: 'danger'
            })
          })
    },
    salvar() {
      // this.$http.post('usuarios.json', this.usuario)
      //     .then(() => this.limpar())
      // Chamada de post apenas

      const metodo = this.id ? 'patch' : 'post' 
      const finalUrl = this.id ? `/${this.id}.json` : '.json'
      this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
          .then(() => {
            this.limpar()
            this.mensagens.push({
              texto: 'Operação realizada com sucesso!',
              tipo: 'success'
            })
          })
    },
    obterUsuarios() {
      this.$http.get('usuarios.json').then(res => {
        this.usuarios = res.data
      })
    },
    // obterUsuarios() {
    //   axios('https://curso-vue-dm-default-rtdb.firebaseio.com/').then(res => {
    //     this.usuarios = res.data
    //   })
    // },
    // Chamada do axios localmente - importa e cria assim
  },
  // created() {
  //   this.$http.post('usuarios.json', {
  //     nome: 'Dyovana',
  //     email: 'dyovana@test.com'
  //   }).then(res => console.log(res))
  // },
  // .json é padrão do firebase - axios usa promisses
};
</script>

<style scoped>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
