Servidor web para desenvolvimento
* Vue executa no Cliente mas a aplicação será servida por um servidor
  * O protocolo file:// não é o protocolo http://
  * No servidor da para:
    * Testar sua aplicação em um cenário mais realista
    * Requisições assíncronas (AJAX) precisa de um servidor

Fluxo de desenvolvimento
* código > recursos adicionais > servidor de produção > usuário
  * recursos adicionais:
    * amabiente de dev & build configurados
    * compila os componentes em um único arquivo
    * pré-processadores e mais
    * efeito: compilador é removido do pacote e causa uma redução de 30% do tamanho

Visão geral
* vue create
  * usar presente
  * configuração customizada
    * adiciona plugin (PWA, ESLint)
    * salvar como um preset
  * desenvolvimento & build
  * adicionar plugins - vue add @vue/nome-plugin

Instalação
* npm i -g @vue/cli
* vue create nome-projeto
* npm run serve - localhost - para desenvolvimento
* npm run build - os arquivos são geradas no disco (pasta dist) ai pega a pasta gerada, o conteúdo dela e publica no servidor (apache, aws) - construção dos arquivos para produção

Projeto - pastas
* node-modules: módulos do node que foram instalados - sem essa pasta o projeto não roda no npm run serve, porque é nesta pasta que fica as dependencias do node e para instalar ela de novo tem que roda npm i - esta pasta fica no gitignore para ela não ser enviada como commits
* index.html: no build que adiciona js e css etc nesta página
* src: código fonte - pasta fundamental, o arquivo de ponta de entrada do projeto fica aqui é o main.js - começa a criar a página por aqui 
* components
* assets
* arquivos .vue:
--------------

COMPONENTES
* a comunicação entre componente pai e componente filho se da a partir das propriedades (props) - do filho para o pai
* a comunicação em que o pai vai tratar o que vem do filho são eventos personalizados
* eventos personalizados ($emit) e props são tipos de comunicação diretas
* comunicação entre 'irmãos' é feita através do pai

vuex: gerenciador de estados

v-model

.lazy = adiciona os dados que foram preenchidos apenas quando sai do campo
.trin = retira espaços em branco do que foi digitado nas pontas
.number = modificador de números - adiciona como number e não string - que geralmente vai como string - se o campo for do tipo number

MÉTODOS HOOKS - MÉTODOS DE CICLO DE VIDA DE UMA DIRETIVA
* bind (el, binding, vnode) => quando a diretiva é interligada com elemento 
* inserted(el, binding, vnode) => elemento inserido no nó pai
* update(el, binding, vnode, oldNode) => quando o componente é atualizado (antes filhos) - garante que o elemento foi atualizado, mas os filhos não
* componentUpdated(el, binding, vnode, oldVNode) => quando o componente é atualizado (depois filhos) 
* unbind(el, binding, vnode) => quando a diretiva é desvinculada do elemento

FILTROS E MIXINS
* Filtros - transformações em cima de valores - em algumas situações são mais práticos
  * bind suporta o filtro
  * model não suporta o filtro
* Mixins - técnicas de reuso baseadas em composição

--------------------
JAVASCRIPT

FUNÇÃO PARA INVERTER UMA STRING
return valor.split('').reverse().join('')

- split pega todos os caracteres da string, o reverse vai inverter os caracteres e o join vai unir tudo em uma única string, resultando em uma string invertida -
--------------------

SERVIDOR HTTP

... - operador spread permite espalhar elementos de um objeto como um array - espalha todos os atributos dentro de um objeto que está sendo criado, por exemplo. ao invés de setar cada um, ele pega e coloca todos

----- ERROS DE AMBIENTES ----

em projetos futuros, quando der erro ao compilar com eslint adiciona no arquivo: vue.config.js dentro do projeto esse código:

lintOnSave: false
---------
ROTAS

VUE ROUTER E VUEX
* Vue Router plugin do vue que controla a navegação entre múltiplos componentes

MODO HASH
* localhost:8080/#/rota 
* não é enviado para o servidor, fica apenas no browser 
* a requisição é feita apenas na raiz

MODO HISTORY
* localhost:8080/rota
* a requisição vai ser enviada para o servidor e vai salvar em um histórico
* se não configurar certo ele não vai funcionar, não vai carregar a parte do vue

-------
VUEX

* gerenciador de estado: aplicações grandes podem também crescer em complexidade, principalmente devido a múltiplos dados de estado da aplicação espalhadas entre diversos componentes e interações entre elas. 
* para isso existe **vuex** uma biblioteca própria de gerencimando de estado. ela se integra ao vue-devtools, permitindo viajar pelo histórico de mudanças de estado (time travel) sem precisar de nenhuma configuração adicional
* porque usar gerenciamento de estado?
  * dificuldade em organizar e monitorar as mudanças
* entendendo o "estado centralizado"
  * existe um STORE (central) controlado pelo vuex, dentro dele existe dados que são compartilhados entre os componentes
  * a partir dele você tem mecanismos para partir de um componente alterar o estado e quando for alterado vai notificar o componente que deseja ler 
  * um componente notifica uma mudança em cima desse estado centralizado e uma vez mudando o estado central um componente que deseja ler essas infos é notificado e automaticamente é renderizado novamente
* GETTERS: função que lê uma info e retorna essa info - seja a info original ou a transformação dessa info que foi lido
  * colocados dentro de computed
* SETTERS: altera um dado na store - conhecido como mutation - altera o estado 
  * colocados dentro de methods

* Conceitos:
  * state: objeto que representa estado compartilhado da aplicação
  * getters: funções que le uma info e faz algum procedimento na info
  * mutations: funções que são responsáveis por alterar o estado global da sua aplicação
  * actions: complementam as mutations - dispatch: dispara uma açõa
  * mutations e actions são usados em conjuntos - commit: quando de fato você vai efetivar uma alteração
  * a diferença das duas é de organização - a mutation tem como objetivo apenas alterar o estado central já a action é o local que vai adicionar regras que quer ser compartilhada na hora de alterar o estado central - a partir de uma lógica, você altera o estado central de uma forma, ou de outra. ou alterar o estado central se uma condição for realizada 
  * dentro das mutations recebe apenas sincronos e nas actions metodos assincronos

* resumo:
  * define um estado geral (objeto) - store
  * que tem dois mecanismos imediatos 
  * getters: le - lógica que precisa compartilhar antes da info crua
  * setters (mutations): alterar estado
  * actions: adiciona uma lógica antes de alterar a store

