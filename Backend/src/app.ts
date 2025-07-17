import express from "express";
import cors from "cors";
import FavouriteRoutes from "./routes/favouriteRoutes";
import path from "path";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/favourites", FavouriteRoutes);

app.use((err: any, req: any, res: any, next: any) => {
  console.log(err.stack);
  res.status(500).json({
    message: "Error found ❌",
    error: err.message,
  });
});

export default app;
