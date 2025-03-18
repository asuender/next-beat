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