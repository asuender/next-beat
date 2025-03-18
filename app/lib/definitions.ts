type Image = {
  url: string;
  width: number;
  height: number;
}
 
type SimplifiedArtistObject = {
  id: string;
  name: string;
  uri: string;
};

export type Artist = SimplifiedArtistObject & {
  images: Image[];
  popularity: number;
};

export type AlbumObject = {
  id: string;
  name: string;
  images: Image[];
}

export type TrackObject = {
  id: string;
  name: string;
  artists: SimplifiedArtistObject[];
  album: AlbumObject;
  uri: string;
  duration_ms: number;
  popularity: number;
}

export type ShowObject = {
  id: string;
  name: string;
  images: Image[];
}

export type SavedEpisodeItem = {
  added_at: string;
  episode: SavedEpisodeObject;
}

export type SavedEpisodeObject = {
  id: string;
  name: string;
  show: ShowObject;
  duration_ms: number;
  resume_point: {
    fully_played: boolean;
    resume_position_ms: number;
  }
}