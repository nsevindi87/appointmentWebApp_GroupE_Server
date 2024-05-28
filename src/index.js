import express from "express";
import cors from "cors";
import mysql from "mysql";
import "./config/database.js";

//ROUTES IMPORT

import errorHandler from "./middleware/errorHandler.js";
import errorHandler404 from "./middleware/errorHandler404.js";
/* import TodosRoute from "./controller/TodosRoute.js";
import UserRoute from "./controller/UserRoute.js"; */

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use(errorHandler404);

//ROUTES
app.get("/", (req, res) => {
  return res.json("From backside");
});

const port = 3302;

app.listen(port, () => {
  console.log(` app listening on port http://localhost:${port}`);
});
