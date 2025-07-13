import { useEffect, useState } from "react";
import GameCard from "../Components/GameCard";
import FavoritesList from "../Components/FavouriteList";
import type { Favourite, Game } from "../types/GameTypes";
import {
  addToFavourite,
  filteredGames,
  removeFavourite,
} from "../Service/Service";
import { useOutletContext } from "react-router-dom";
import SearchInput from "../Components/SearchInput";

export default function Home() {
  const { favourites, setFavourites } = useOutletContext<{
    favourites: Favourite[];
    setFavourites: React.Dispatch<React.SetStateAction<Favourite[]>>;
  }>();
  const [games, setGames] = useState<Game[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://corsproxy.io/?https://www.mmobomb.com/api1/games"
        );
        const data = await response.json();
        setGames(data);
      } catch (err) {
        console.error("Error occure:", err);
      }
    };
    fetchGames();
  }, []);

  const handleAddtoFavourite = (game: Game) => {
    setFavourites((prev) => addToFavourite(prev, game));
  };

  const handleRemoveFavourite = (id: number) => {
    setFavourites((prev) => removeFavourite(prev, id));
  };

  const displayedGames = searchTerm ? filteredGames(games, searchTerm) : games;

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl text-white text-center font-bold mb-6">
            MMO Game
          </h1>
          {/* Search Input */}
          <SearchInput
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search game..."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedGames.map((g) => (
            <GameCard key={g.id} game={g} onAdd={handleAddtoFavourite} />
          ))}
        </div>
        <FavoritesList
          favourites={favourites}
          onDelete={handleRemoveFavourite}
        />
      </div>
    </div>
  );
}
