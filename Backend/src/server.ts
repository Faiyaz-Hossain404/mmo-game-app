import app from "./app";
import sequelize from "./config/database";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

async () => {
  try {
    await sequelize.sync({ alter: true }).then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    });
  } catch (err) {
    console.error("Failed to connect to DB:", err);
  }
};
