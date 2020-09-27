<template>
<div>
  <h1>Búsqueda de producto Disponible</h1>
  <input type="text" v-model="producto" />
  <ul v-if="check">
    <li v-for="(producto, clave) in productoDisponiblePorId" :key="clave">
      <label>{{producto.nombre}} | stock: {{producto.stock}} | precio: ${{producto.precio}}</label>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Busqueda",
  data() {
    return {
      producto: "",
    };
  },
  computed: {
    productoDisponiblePorId() {
      return this.$store.getters.productoDisponiblePorId(this.producto);
    },
    check() {
      return this.productoDisponiblePorId.length > 0 && this.producto !== "";
    },
  },
};
</script>





<style>

</style>