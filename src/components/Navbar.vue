<template>
  <div>
    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/busqueda">Busqueda</router-link> |
       <router-link to="/ventas">Ventas</router-link> |
        <router-link to="/inventario">Inventario</router-link> |
        
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>