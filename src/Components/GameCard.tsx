import { Link } from "react-router-dom";
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
    <Link to={`/game/${game.id}`}>
      <Card className="cursor-pointer hover:shadow-lg transition">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-60 object-cover"
        />
        <h2 className="font-bold text-lg mt-2">{game.title}</h2>
        <p className="text-sm text-yellow-500">Genre: {game.genre}</p>
        <Button
          label="Add to Favourites"
          onClick={(e) => {
            e.preventDefault();
            onAdd(game);
          }}
          className="mt-2"
        />
      </Card>
    </Link>
  );
}
