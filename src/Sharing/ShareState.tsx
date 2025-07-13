import { useState } from "react";
import type { Favourite } from "../types/GameTypes";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

export default function ShareState() {
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  return (
    <>
      <Navbar />
      <Outlet context={{ favourites, setFavourites }} />
    </>
  );
}
