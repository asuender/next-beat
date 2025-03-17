export type Artist = {
  id: string;
  name: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
  uri: string;
};
