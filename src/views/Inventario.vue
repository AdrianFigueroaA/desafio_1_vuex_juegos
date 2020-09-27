<template>
  <div>
      <h1>Inventario</h1>
      <b-table striped hover :items="juegos"></b-table>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
name:'Inventario',

computed:{
...mapState(['juegos']),
}

}
</script>

<style>

</style>