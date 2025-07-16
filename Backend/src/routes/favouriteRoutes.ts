import { Router } from "express";
import {
  getFavourites,
  addFavourite,
  deleteFavourite,
} from "../controllers/addFavourite";

const router = Router();

router.use("/", getFavourites);
router.use("/", addFavourite);
router.use("/:id", deleteFavourite);

export default router;
