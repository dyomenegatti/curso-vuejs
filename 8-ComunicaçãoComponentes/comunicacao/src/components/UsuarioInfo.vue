<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Nome do Usuário: <strong>{{ nomeAlternativo }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>
import barramento from '@/barramento';

export default {
    props: ['nome', 'idade'],
    // props: {
    //     nome: {
    //         type: String,
    //         required: true,
    //         default: 'Anônimo',
    //         default: function() { 
    //           return Array(10).fill(0).join(',')
    //         }
    //     }
    // },
    data() {
        return {
            nomeAlternativo: this.nome
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            const antigo = this.nome
            this.nome = 'Pedro'
            this.$emit('nomeMudou', {
                novo: this.nome,
                antigo
            })
        }
    },
    created() {
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
