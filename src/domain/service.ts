import axios from "axios";
import { api } from "../../config";
import { useUserStore } from "@/stores/userstore";
import type User from "./User";
import Track from "./Track";
import Playlist from "./Playlist";
import { usePlaylistStore } from "@/stores/playliststore";

class Service {
    // Helper para realizar solicitudes HTTP
    private static async makeRequest(url: string, method: string, body: any = null): Promise<Response> {
        const options: RequestInit = {
            method,
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        };
        if (body) options.body = JSON.stringify(body);

        const response = await fetch(url, options);
        if (!response.ok) {
            console.error(`Error en la solicitud a ${url}:`, response.statusText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response;
    }

    // Registrar usuario
    static async registrarUsuario(): Promise<void> {
        const userStore = useUserStore();
        if (!userStore.isLoggedIn || userStore.isGoogleTokenExpired || userStore.isSpotifyTokenExpired) {
            try {
                const response = await this.makeRequest(`${api}/authentication/`, 'POST');
                const data = await response.json();
                window.location.href = data.authURL; // Redirigir al usuario
            } catch (error) {
                console.error("Error al registrar usuario:", error);
                throw error;
            }
        }
    }

    // Obtener playlists de Spotify
    static async getSpotifyPlaylist(): Promise<void> {
        const playlistStore = usePlaylistStore();
        try {
            const response = await this.makeRequest(`${api}/spotify/playlists`, 'GET');
            const data = await response.json();
            const playlists = data.items.map((item: any) => {
                const missingImage = "https://cdn-icons-png.flaticon.com/512/25/25333.png";
                return new Playlist(
                    item.id,
                    item.name,
                    item.description,
                    [],
                    item.images?.[0]?.url || missingImage
                );
            });
            playlistStore.setPlaylists(playlists);
        } catch (error) {
            console.error("Error al obtener playlists de Spotify:", error);
            throw error;
        }
    }

    // Migrar playlists de Spotify
    static async migrateSpotifyPlaylist(playlist: any): Promise<boolean> {
        try {
            await this.makeRequest(`${api}/spotify/playlists/migration`, 'POST', playlist);
            return true;
        } catch (error) {
            console.error("Error al migrar playlist de Spotify:", error);
            return false;
        }
    }

    // Obtener playlists de YouTube
    static async getYoutubePlaylist(): Promise<void> {
        const playlistStore = usePlaylistStore();
        try {
            const response = await this.makeRequest(`${api}/youtube/playlists`, 'GET');
            const data = await response.json();
            const playlists = data.map((item: any) => {
                const snippet = item.snippet;
                const missingImage = "https://cdn-icons-png.flaticon.com/512/25/25333.png";
                return new Playlist(
                    item.id,
                    snippet.title,
                    snippet.description,
                    [],
                    snippet.thumbnails?.maxres?.url || missingImage
                );
            });
            playlistStore.setPlaylists(playlists);
        } catch (error) {
            console.error("Error al obtener playlists de YouTube:", error);
            throw error;
        }
    }

    // Migrar playlists de YouTube
    static async migrateYoutubePlaylist(playlist: any): Promise<boolean> {
        try {
            await this.makeRequest(`${api}/youtube/playlists/migration`, 'POST', playlist);
            return true;
        } catch (error) {
            console.error("Error al migrar playlist de YouTube:", error);
            return false;
        }
    }
}

export default Service;