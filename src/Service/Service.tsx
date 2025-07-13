import type { Game, Favourite } from "../types/GameTypes";

export function addToFavourite(favourites: Favourite[], game: Game) {
  if (favourites.find((f) => f.id === game.id)) return favourites;
  const newFav: Favourite = {
    id: game.id,
    title: game.title,
    timestamp: new Date().toLocaleString(),
  };
  return [...favourites, newFav];
}

export function removeFavourite(favourites: Favourite[], id: number) {
  return favourites.filter((f) => f.id !== id);
}

export function filteredGames(games: Game[], search: string) {
  return games.filter((g) =>
    g.title.toLowerCase().includes(search.toLowerCase())
  );
}
