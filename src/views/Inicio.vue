<template>
  <div class="home container px-5">
    <h1>32 Bits</h1>
    <h2>Juegos de Pc y Consolas</h2>


<label for>Nombre Juego</label>
   <b-form-select v-model="nombre" :options="options" class="mb-3">
      <!-- This slot appears above the options from 'options' prop -->
      <template v-slot:first>
        <b-form-select-option :value="null" disabled>-- Seleccione un Juego: --</b-form-select-option>
      </template>

      <!-- These options will appear after the ones from 'options' prop -->
      <b-form-select-option v-for="(juego, clave) in juegos" :key="clave" :value="juego.nombre">{{ juego.nombre }}</b-form-select-option>
    
    </b-form-select>


     

    <label for></label>
    <b-form-input
      :disabled="true"
      id="input-2"
      v-model="juego.stock"
      placeholder="Stock"
    ></b-form-input>
    <label for></label>
    <b-form-input
      :disabled="true"
      id="input-2"
      v-model="juego.precio"
      placeholder="Precio"
    ></b-form-input>
    <b-button type="submit" @click="Descontar" variant="primary"
      >Comprar</b-button
    >
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Inicio",
  methods: {
    Descontar() {
      this.$store.dispatch("descontar", this.nombre);
    },
  },
  data() {
    return {
      id: "",
      nombre:"",
      
    };
  },
  computed: {
    ...mapState(["juegos"]),
    juego() {
       
      let juego = {
        nombre: "",
        precio: "",
        stock: "",
      };
      return this.juegos.find((j) => j.nombre == this.nombre) || juego;
    },
  },
};
</script>
