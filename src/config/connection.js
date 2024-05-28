import { Sequelize } from "sequelize";

const sequelize = new Sequelize("appointment", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});
export default sequelize;
