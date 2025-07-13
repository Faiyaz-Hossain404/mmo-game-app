import type { Favourite } from "../types/GameTypes";
import FavouriteItem from "./FavouriteItem";

interface Props {
  favourites: Favourite[];
  onDelete: (id: number) => void;
}

export default function FavoritesList({ favourites, onDelete }: Props) {
  return (
    <div className="mt-8">
      <h2 className="text-xl text-center text-white font-bold mb-4">
        Favorites
      </h2>
      {favourites.length === 0 ? (
        <p className="text-white text-center">No favorites added yet.</p>
      ) : (
        <ul className="space-y-2">
          {favourites.map((fav) => (
            <FavouriteItem key={fav.id} favourite={fav} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </div>
  );
}
