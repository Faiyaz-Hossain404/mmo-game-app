import { time } from "console";
import { Request, Response, NextFunction } from "express";
import Favourite from "../Models/Favourite";

export const addFavourite = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const {id, name, timestamp} = req.body;

        if(!id || !name || !timestamp){
            return res.status(400).json({error: "Missing required fields."})
        }

        const exists = await Favourite.findByPk(id);
        if(exists)[
            return res.status()
        ]
    }
}