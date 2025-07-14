import "./App.css";
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShareState from "./Sharing/ShareState";
import FavouritesPage from "./Pages/FavouritesPage";
import GameDetailPage from "./Pages/GameDetailPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ShareState />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/favourites", element: <FavouritesPage /> },
        { path: "/game/:id", element: <GameDetailPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
