import Track from './Track';
class Playlist {
    id: string;
    name: string;
    description: string;
    tracks: Track[];
    imageUrl?: string;
    constructor(id: string, name: string, description: string, tracks: Track[], imageUrl: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.tracks = tracks;
        this.imageUrl = imageUrl;
    }

}

export default Playlist;