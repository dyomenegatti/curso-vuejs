import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio.vue';
import Menu from './components/template/Menu';
import Usuario from './components/usuario/Usuario.vue';
import UsuarioLista from './components/usuario/UsuarioLista';
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe';
// import UsuarioEditar from './components/usuario/UsuarioEditar';

Vue.use(Router)

const UsuarioEditar  = () => import('./components/usuario/UsuarioEditar')

const router = new Router({
  mode: 'history',
  scrollBehavior(to, rom, savedPosition) {
    // return { x: 0, y: 1000 }
    if(savedPosition) {
      return savedPosition
    } else if(to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [{
    path: '/',
    // component: Inicio,
    name: 'inicio',
    components: {
      default: Inicio,
      menu: Menu
    }
  }, {
    path: '/usuario',
    component: Usuario,
    props: true,
    children: [
      { path: '', component: UsuarioLista },
      { path: ':id', component: UsuarioDetalhe, props: true, beforeEnter: (to, from, next) => {
        console.log('antes da rota - usuário detalhe')
        next()
      } },
      { path: ':id/editar', component: UsuarioEditar, props: true, name:'editarUsuario' },
    ]
  }, {
    path: '/redirecionar',
    redirect: '/usuario'
  }, {
    path: '*',
    redirect: '/'
  }]
})

router.beforeEach((to, from, next) => {
  console.log('antes das rotas - forma global')
  // if(to.path !== '/usuario') {
  //   next('/usuario')
  // }
  next()
})

export default router