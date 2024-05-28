import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("appointment", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

const AppointmentModel = sequelize.define(
  "Appointment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default AppointmentModel;
