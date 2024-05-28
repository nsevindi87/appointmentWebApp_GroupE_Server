import express from "express";
import Appointment from "../model/AppointmentModel.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let appointments = await Appointment.findAll();
    return res.status(200).send(appointments);
  } catch (error) {
    return next({ status: 404, message: error });
  }
});

export default router;
