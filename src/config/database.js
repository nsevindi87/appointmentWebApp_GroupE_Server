import sequelize from "./connection.js";
import AppointmentModel from "../model/AppointmentModel.js";
import User from "../model/UsersModel.js";

User.hasMany(AppointmentModel, { foreignKey: "userId", onDelete: "CASCADE" });
AppointmentModel.belongsTo(User, { foreignKey: "userId" });

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");

    await AppointmentModel.sync({ alter: true });
    await User.sync({ alter: true });
    console.log("OK!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectToDatabase();
