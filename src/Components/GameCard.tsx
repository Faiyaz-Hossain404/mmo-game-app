import type { Game } from "../types/GameTypes";
import Button from "./Button";
import Card from "./Card";

//

interface Props {
  game: Game;
  onAdd: (game: Game) => void;
}

export default function GameCard({ game, onAdd }: Props) {
  return (
    <Card>
      <img
        src={game.thumbnail}
        alt={game.title}
        className="w-full h-60 object-cover"
      />
      <h2 className="font-bold text-lg mt-2">{game.title}</h2>
      <p className="text-sm text-yellow-500">Genre: {game.genre}</p>
      <Button
        label="Add to Favourites"
        onClick={() => onAdd(game)}
        className="mt-2"
      />
    </Card>
  );
}
