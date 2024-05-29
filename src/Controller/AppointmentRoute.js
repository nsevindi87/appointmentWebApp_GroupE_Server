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

//ADD NEW APPOINTMENT
router.post("/", async (req, res, next) => {
  try {
    const appointment = req.body;
    const newApp = await Appointment.create(appointment);
    return res.send(newApp);
  } catch (error) {
    return next({ status: 500, message: error.message });
  }
});

export default router;
