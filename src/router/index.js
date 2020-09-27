import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: () => import(/* webpackChunkName: "ventas" */ '../views/Ventas.vue')
  },
  {
    path: '/busqueda',
    name: 'Busqueda',
    component: () => import(/* webpackChunkName: "busqueda" */ '../views/Busqueda.vue')
  },
  {
    path: '/inventario',
    name: 'Inventario',
    component: () => import(/* webpackChunkName: "inventario" */ '../views/Inventario.vue')
  },
  {
    path: '/total',
    name: 'Total',
    component: () => import(/* webpackChunkName: "total" */ '../views/Total.vue')
  },
  {
    path: '*',
    name:"NotFound",
    component: () => import(/* webpackChunkName: "notfound" */ '../views/Notfound.vue'),
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
