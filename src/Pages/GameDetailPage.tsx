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
          `https://corsproxy.io/?https://www.mmobomb.com/api1/game?id=${id}`
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
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-2xl mx-auto rounded p-6 shadow border">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-60 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{game.title}</h1>
        <p>
          <span className="text-yellow-500">Description: </span>
          <span className="text-whute">{game.short_description}</span>
        </p>
        <div className="text-sm space-y-1">
          <p>
            <span className="text-yellow-500">Platform: </span>
            <span className="text-white">{game.platform}</span>
          </p>
          <p>
            <span className="text-yellow-500">Genre: </span>
            <span className="text-white">{game.genre}</span>
          </p>
          <p>
            <span className="text-yellow-500">Publisher: </span>
            <span className="text-white">{game.publisher}</span>
          </p>
          <p>
            <span className="text-yellow-500">Developer: </span>
            <span className="text-white">{game.developer}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
