export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  genre: string;
  publisher?: string;
}

export interface Favourite {
  id: number;
  title: string;
  timestamp: string;
}
