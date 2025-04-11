<!--
Say Hello World with Vue!
-->

<script setup>
import { ref } from 'vue'

// A "ref" is a reactive data source that stores a value.
// Technically, we don't need to wrap the string with ref()
// in order to display it, but we will see in the next
// example why it is needed if we ever intend to change
// the value.
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style scoped>
/* Estilo general para que el div ocupe toda la pantalla */
.full-screen {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  background-color: #FFFFFF;

}

/* Estilos para el header */
.header {
  background-color: #4CAF50;
  padding: 10px;
  color: white;
  text-align: center;
  font-size: 24px;
}

/* Estilos para el body */
.body {
  flex-grow: 1;
  padding: 20px;
  background-color: #f4f4f4;
  text-align: center;
}
</style>