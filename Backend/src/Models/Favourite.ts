import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Favourite extends Model {
  public id!: number;
  public name!: string;
  public timestamp!: string;
}

Favourite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Favourite",
    tableName: "favourites",
    timestamps: false,
  }
);
