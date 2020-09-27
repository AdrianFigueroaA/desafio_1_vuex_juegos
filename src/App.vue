<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/busqueda">Busqueda</router-link> |
       <router-link to="/ventas">Ventas</router-link> |
        <router-link to="/inventario">Inventario</router-link> |
        <router-link to="/total">Total</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
