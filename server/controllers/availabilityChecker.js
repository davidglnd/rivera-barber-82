import { Appointment } from '../models/Appointment.js';
export async function availabilityChecker(req, res) {
    const day = req.params.date;

    const appointment = await Appointment.find({ date: day }).countDocuments();
    
    res.send(appointment);

}

export async function notAvailibilityShifts(req, res) {
    const day = req.params.date;

    const shifts = await Appointment.find({date: day},{shift: 1, _id: 0});
    
    res.send(shifts);
}