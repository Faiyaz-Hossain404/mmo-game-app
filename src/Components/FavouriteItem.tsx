import type { Favourite } from "../types/GameTypes";
import Button from "./Button";

interface Props {
  favourite: Favourite;
  onDelete: (id: number) => void;
}

export default function FavouriteItem({ favourite, onDelete }: Props) {
  return (
    <li className="flex justify-between items-cnter p-2 bg-gray-100 rounded">
      <div>
        <p className="font-medium">{favourite.title}</p>
        <p className="text-sm text-gray-500">Added: {favourite.timestamp}</p>
      </div>
      <Button
        label="Remove"
        onClick={() => onDelete(favourite.id)}
        className="bg-red-600 hover:bg-red-700"
      />
    </li>
  );
}
