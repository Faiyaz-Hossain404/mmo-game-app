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

export interface GameDetail {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  releaseDate: string;
}
