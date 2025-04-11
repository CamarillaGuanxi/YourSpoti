import axios from "axios";
import { api } from "../../config";
import { useUserStore } from "@/stores/userstore";
class User {
    private id: string;
    private TokenSpotify: string;
    private TokenSpotifyExpiration: Date;
    private TokenGoogle: string;
    private TokenGoogleExpiration: Date;
    constructor(
        id: string,
        TokenSpotify: string,
        TokenSpotifyExpiration: Date,
        TokenGoogle: string,
        TokenGoogleExpiration: Date
    ) {
        this.id = id;
        this.TokenSpotify = TokenSpotify;
        this.TokenSpotifyExpiration = TokenSpotifyExpiration;
        this.TokenGoogle = TokenGoogle;
        this.TokenGoogleExpiration = TokenGoogleExpiration;
    }
    getId(): string {
        return this.id;
    }
    getTokenSpotify(): string {
        return this.TokenSpotify;
    }
    getTokenSpotifyExpiration(): Date {
        return this.TokenSpotifyExpiration;
    }
    getTokenGoogle(): string {
        return this.TokenGoogle;
    }
    getTokenGoogleExpiration(): Date {
        return this.TokenGoogleExpiration;
    }
    setTokenSpotify(TokenSpotify: string): void {
        this.TokenSpotify = TokenSpotify;
    }
    setTokenSpotifyExpirtation(TokenSpotifyExpiration: Date): void {
        this.TokenSpotifyExpiration = TokenSpotifyExpiration;
    }
    setTokenGoogle(TokenGoogle: string): void {
        this.TokenGoogle = TokenGoogle;
    }
    setTokenGoogleExpiration(TokenGoogleExpiration: Date): void {
        this.TokenGoogleExpiration = TokenGoogleExpiration;
    }
    isTokenSpotifyExpired(): boolean {
        return this.TokenSpotifyExpiration < new Date();
    }
    isTokenGoogleExpired(): boolean {
        return this.TokenGoogleExpiration < new Date();
    }


}
export default User;