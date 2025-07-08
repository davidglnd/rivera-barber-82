import { Appointment } from '../models/Appointment.js';
export async function availabilityChecker(req, res) {
    const day = req.params.date;

    const appointment = await Appointment.find({ date: day }).countDocuments();
    
    res.send(appointment);

}