// src/stores/playlist.ts

import { ref } from 'vue'
import { defineStore } from 'pinia'
import Playlist from '@/domain/Playlist'
import Service from '@/domain/service' // Asegurate de que exporte getSpotifyPlaylist()

export const usePlaylistStore = defineStore('playlist', () => {
    const playlists = ref<Playlist[]>([])

    // Método para cargar las playlists desde el backend y guardarlas
    async function setPlaylists(PlaylistsValue: Playlist[]) {
        playlists.value = PlaylistsValue;
    }

    // Limpiar playlists
    function clearPlaylists() {
        playlists.value = []
    }

    return {
        playlists,
        setPlaylists,
        clearPlaylists
    }
}, {
    persist: true // opcional, por si querés que se guarden en localStorage
})
