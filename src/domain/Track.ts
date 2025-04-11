class Track {
    private id: string;
    private name: string;
    private artist: string;

    constructor(id: string, name: string, artist: string) {
        this.id = id;
        this.name = name;
        this.artist = artist;
    }
    getId(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getArtist(): string {
        return this.artist;
    }

}

export default Track;