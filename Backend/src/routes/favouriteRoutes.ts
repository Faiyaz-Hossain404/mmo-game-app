import { Router } from "express";
import {
  getFavourites,
  addFavourite,
  deleteFavourite,
} from "../controllers/addFavourite";

const router = Router();

router.get("/", getFavourites);
router.post("/", addFavourite);
router.delete("/:id", deleteFavourite);

export default router;
