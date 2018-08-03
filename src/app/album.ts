import { Track } from  './track';

export interface Album {
    name: string;
    releaseDate: string;
    coverimgae: string;
    tracks: Track[];
}
