import { Request, Response, NextFunction } from "express";
import Favourite from "../Models/Favourite";

export const getFavourites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const favourites = await Favourite.findAll();
    res.status(200).json(favourites);
  } catch (error) {
    next(error);
  }
};

export const addFavourite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, name, timestamp } = req.body;

    if (!id || !name || !timestamp) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const exists = await Favourite.findByPk(id);
    if (exists) {
      return res.status(404).json({ error: "Favourite already exists." });
    }
    const favourites = await Favourite.create({ id, name, timestamp });
    res
      .status(201)
      .json({ message: "Message Posted ✅", favourites: favourites });
  } catch (error) {
    next(error);
  }
};

export const deleteFavourite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deleted = await Favourite.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "Favourite not found." });
    }

    res.status(201).json({ message: "Deleted successfully." });
  } catch (error) {
    next(error);
  }
};
