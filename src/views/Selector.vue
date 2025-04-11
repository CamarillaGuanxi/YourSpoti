<script setup>
import { ref } from 'vue';
import Service from '../domain/service.js';
import  Playlist from '../domain/Playlist.js';
import router from '@/router/index.js';
import { usePlaylistStore } from '@/stores/playliststore.js';
// Estado para manejar la selección
const selectedOption = ref(null);
const PlaylistStore = usePlaylistStore()
// Función para manejar la selección
const  selectOption = async (option) => {
    PlaylistStore.clearPlaylists()
    selectedOption.value = option;
    if(option === 'spotify') {
        await Service.getSpotifyPlaylist()
        router.push({ path: '/playlist', query: { name: 'Spotify' } }) // Pasar el nombre de la playlist como query param   
    } else if (option === 'youtube') {
        await Service.getYoutubePlaylist()
        router.push({ path: '/playlist', query: { name: 'youtube' } }) // Pasar el nombre de la playlist como query param   
    }
};
</script>

<template>
    <div class="container">
        <div class="container2">

        <h1 class="app-name">Choose Your Platform</h1>

        <!-- Botones para elegir entre Spotify y YouTube -->
        <div class="button-container">
            <button @click="selectOption('spotify')">Spotify</button>
            <button @click="selectOption('youtube')">YouTube</button>
        </div>

        <!-- Mostrar contenido dependiendo de la selección -->
        <div v-if="selectedOption === 'spotify'">
            <h2>You selected Spotify</h2>
            <!-- Aquí puedes agregar el contenido relacionado con Spotify -->
        </div>
        <div v-if="selectedOption === 'youtube'">
            <h2>You selected YouTube</h2>
            <!-- Aquí puedes agregar el contenido relacionado con YouTube -->
        </div>
    </div>
</div>

</template>

<style scoped>
html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* Evita scroll innecesario */
    box-sizing: border-box;
    /* Asegura que el tamaño incluya bordes y padding */
}

.black-backgorund {
    background-color: rgba(65, 16, 99, 0.5);
    /* Azul más oscuro y semi-transparente */
    /* Azul más oscuro y semi-transparente */
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5vh;
}

/* Contenedor principal que ocupa toda la pantalla */
.container {
    height: 100vh;
    /* Ocupa el 100% de la altura de la ventana */
    width: 100vw;
    /* Ocupa el 100% del ancho de la ventana */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('../assets/background.webp');
    background-size: cover;
    /* Asegura que el fondo cubra todo el contenedor */
    background-position: center;
    /* Centra la imagen de fondo */
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* Fija el fondo mientras se hace scroll */
    position: fixed;
    /* Fija el header en la parte superior */
    top: 0;
    left: 0;
    z-index: 10;
}
.container2 {
   
    /* Ocupa el 100% del ancho de la ventana */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;
    /* Asegura que el fondo cubra todo el contenedor */
    background-position: center;
    /* Centra la imagen de fondo */
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* Fija el fondo mientras se hace scroll */
    position: center;
    padding: 2%;
    background-color: rgba(30, 21, 77, 0.8);
    border-radius: 2%;
}
.app-name {
    font-size: 4em;
    margin-bottom: 20px;
    color: white;
}

.button-container button {
    padding: 10px 20px;
    margin: 10px;
    font-size: 2.2em;
    cursor: pointer;
    background-color: #295EA5;
    color: white;
    border: none;
    border-radius: 5px;
}

.button-container button:hover {
    background-color: #4CA4FC;
}

h2 {
    margin-top: 20px;
    font-size: 1.5em;
}
</style>
