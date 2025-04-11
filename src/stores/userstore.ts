import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import User from '@/domain/User' // asegurate que el path sea correcto

export const useUserStore = defineStore('user', () => {
    const userInstance = ref<User | null>(null)

    // Computed
    const isLoggedIn = computed(() => userInstance.value !== null)
    const spotifyToken = computed(() => userInstance.value?.getTokenSpotify() || '')
    const googleToken = computed(() => userInstance.value?.getTokenGoogle() || '')
    const userId = computed(() => userInstance.value?.getId() || '')
    const spotifyTokenExpiration = computed(() => userInstance.value?.getTokenSpotifyExpiration() || null)
    const googleTokenExpiration = computed(() => userInstance.value?.getTokenGoogleExpiration() || null)
    const isSpotifyTokenExpired = computed(() => userInstance.value?.isTokenSpotifyExpired() || true)
    const isGoogleTokenExpired = computed(() => userInstance.value?.isTokenGoogleExpired() || true)

    // Setter principal
    function setUser(u: User) {
        userInstance.value = u
    }

    // Logout
    function logout() {
        userInstance.value = null
    }

    // Métodos para modificar propiedades del usuario
    function updateSpotifyToken(newToken: string) {
        if (userInstance.value) {
            userInstance.value.setTokenSpotify(newToken)
        }
    }

    function updateSpotifyTokenExpiration(newExpiration: Date) {
        if (userInstance.value) {
            userInstance.value.setTokenSpotifyExpirtation(newExpiration)
        }
    }

    function updateGoogleToken(newToken: string) {
        if (userInstance.value) {
            userInstance.value.setTokenGoogle(newToken)
        }
    }

    function updateGoogleTokenExpiration(newExpiration: Date) {
        if (userInstance.value) {
            userInstance.value.setTokenGoogleExpiration(newExpiration)
        }
    }

    return {
        userInstance,
        isLoggedIn,
        spotifyToken,
        googleToken,
        userId,
        spotifyTokenExpiration,
        googleTokenExpiration,
        isSpotifyTokenExpired,
        isGoogleTokenExpired,
        setUser,
        logout,
        updateSpotifyToken,
        updateSpotifyTokenExpiration,
        updateGoogleToken,
        updateGoogleTokenExpiration
    }
}, {
    persist: true
})