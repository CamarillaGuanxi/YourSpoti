<script setup>
import { ref } from 'vue'
import { usePlaylistStore } from '@/stores/playliststore.js'
import { useRoute } from 'vue-router'
import Service from '../domain/service.js'

// Instancia del router
const router = useRoute()

const name = router.query.name  // Accede al parámetro 'name'
// Instancia del store
const playlistStore = usePlaylistStore()

// Accedé a las playlists directamente como propiedad reactiva
const playlists = playlistStore.playlists

const activeIndex = ref(null)

// Estado para controlar la carga y el mensaje
const loading = ref(false)
const migrationMessage = ref('')
const showModal = ref(false) // Estado para mostrar el modal
const loadingPicture = "https://discuss.wxpython.org/uploads/default/original/2X/6/6d0ec30d8b8f77ab999f765edd8866e8a97d59a3.gif";
// Función para alternar el dropdown
const toggleDropdown = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

// Función para migrar la playlist
const migratePlaylist = async (playlist) => {
  showModal.value = true // Mostrar el modal bloqueante
  loading.value = true // Activar el estado de carga
  migrationMessage.value = 'Migrando playlist...' // Mensaje de carga
  let result
  // Llamada al servicio de migración
  if(name == "Spotify"){
    result = await Service.migrateSpotifyPlaylist(playlist)
  }else if(name == "youtube"){
    result = await Service.migrateYoutubePlaylist(playlist)
  }

  // Actualizar mensaje basado en el resultado
  if (result) {
    migrationMessage.value = '¡Migración exitosa! 🎉'
  } else {
    migrationMessage.value = 'Hubo un error al migrar la playlist 😞'
  }

  loading.value = false // Desactivar el estado de carga
}

// Función para cancelar la selección
const cancelSelection = () => {
  activeIndex.value = null
}
</script>

<template>
  <div class="background">
    <div class="playlist-container">
      <div
        v-for="(playlist, index) in playlists"
        :key="playlist.id"
        class="playlist-card"
        @click="toggleDropdown(index)"
        :style="{
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }"
      >
        <img :src="playlist.imageUrl" alt="Playlist Image" class="playlist-image" />

        <h3 class="playlist-name">{{ playlist.name }}</h3>
        <p class="playlist-description">{{ playlist.description }}</p>

        <div v-if="activeIndex === index" class="dropdown">
          <button @click.stop="migratePlaylist(playlist)">Migrar</button>
          <button @click.stop="cancelSelection">Cancelar</button>
        </div>
      </div>

      <!-- Modal de carga -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <div v-if="loading" class="loading-message">
            <img class="spinner" :src="loadingPicture" />
            {{ migrationMessage }}
          </div>
          <div v-if="!loading" class="migration-result">
            <!-- Mostrar spinner solo si el mensaje es "Migrando playlist..." -->
            {{ migrationMessage }}
            
            <!-- Botón para cerrar -->
            <button @click="showModal = false">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  position: fixed; /* Fija el fondo en la pantalla */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: 
    url('../assets/background.webp'), /* Imagen de fondo */
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%); /* Gradiente */
  background-repeat: no-repeat; /* Evita que se repita */
  background-size: cover; /* Asegura que cubra toda la pantalla */
  background-position: center; /* Centra la imagen */
  z-index: 0; /* Asegura que el fondo no bloquee el scroll */
}

.playlist-container {
  position: absolute; /* Cambié a absolute para que no se vea afectada por el fondo */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-template-rows: auto; /* Las filas se ajustan al contenido */
  gap: 20px;
  padding: 20px;
  max-width: 100vw;
  height: auto; /* La altura depende del contenido */
  overflow-y: auto; /* Habilita el scroll solo cuando el contenido excede la pantalla */
  z-index: 1; /* Mantiene el contenedor por encima del fondo */
}
.playlist-name {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #FFFF;
}

.playlist-description {
  font-size: 1em;
  color: #FFFF;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.playlist-card {
  background-color: #1E154F;
  border: 2px solid #2E5192;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.playlist-card:hover {
  transform: scale(1.03);
  border-color: #47A8FF;
}

.dropdown {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.dropdown button {
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: #673ab7;
  color: white;
  cursor: pointer;
}

.dropdown button:last-child {
  background-color: #9e9e9e;
}

.dropdown button:hover {
  opacity: 0.9;
}

.loading-message {
  text-align: center;
  font-size: 1.2em;
  color: #555;
}

.migration-result {
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  align-items: center;
  display: flex;
  padding-left: 1%;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Modal de carga */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
}
</style>
