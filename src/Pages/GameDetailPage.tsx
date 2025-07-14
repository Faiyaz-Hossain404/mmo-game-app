import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { GameDetail } from "../types/GameTypes";

const GameDetailPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState<GameDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(
          `https://corsproxy.io/?https://www.mmobomb.com/api1/games?id=$(id)`
        );
        const data = await response.json();
        setGame(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error || !game)
    return <p className="text-red-500">Error loading game.</p>;

  return (
    <div>
      <div>
        <img src={game.thumbnail} alt={game.title} />
        <h1>{game.title}</h1>
        <p>{game.description}</p>
        <p>
          Released: {game.releaseDate} | Platform: {game.platform} | Genre:
          {game.genre} | Publisher: {game.publisher} | Developer:
          {game.developer}
        </p>
      </div>
    </div>
  );
};

export default GameDetailPage;
