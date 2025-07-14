import { useOutletContext } from "react-router-dom";
import FavoritesList from "../Components/FavouriteList";
import { removeFavourite } from "../Service/Service";
import type { Favourite } from "../types/GameTypes";

export default function FavouritesPage() {
  const { favourites, setFavourites } = useOutletContext<{
    favourites: Favourite[];
    setFavourites: React.Dispatch<React.SetStateAction<Favourite[]>>;
  }>();

  const handleRemoveFavourite = (id: number) => {
    setFavourites((prev: Favourite[]) => removeFavourite(prev, id));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-black px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Your Favourites</h2>
      <FavoritesList favourites={favourites} onDelete={handleRemoveFavourite} />
    </div>
  );
}
