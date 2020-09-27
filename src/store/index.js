import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos:[

      {id:"001",nombre:"Seiko", stock:100,precio:30000 ,color:"red"},
      {id:"002",nombre:"Fifa 21", stock:100,precio:25000 ,color:"blue"},
      {id:"003",nombre:"Gears of War 4", stock:100,precio:15000 ,color:"green"},
      {id:"004",nombre:"Mario Tennis Aces", stock:100,precio:35000,color:"yellow"},
      {id:"005",nombre:"Bloodborne", stock:100,precio:10000,color:"blue"},
      {id:"005",nombre:"Forza Horizon 4", stock:100,precio:20000 ,color:"green"},
    ],

    historialDeVentas: [],
  },

  getters:{
    productosConStock: (state) =>{
      return state.juegos.filter((producto)=>{
        return producto.stock > 0;
      });
    },
    productoDisponiblePorId: (state, getters) => (producto) => {
      return getters.productosConStock.filter((p) => p.id == producto || p.nombre.includes(producto))
    },
  },
  mutations: {
      DESCONTAR(state, payload) {
        let registro ;
        state.juegos = state.juegos.map((e) => {
          if (e.nombre == payload.trim()) {
            e.stock--
            registro = e
          }
          return e
        })
        this.commit('REGISTRO' , registro )
      },
      REGISTRO(state , e) {
        state.historialDeVentas.push(e)
        
      }
    },
    actions: {
      descontar({ commit }, payload) {
        commit('DESCONTAR', payload)
      },
    },
  modules: {
  }
})

