import { Appointment } from '../models/Appointment.js';

export async function createAppointment(req,res){
    const existingAppointment = await Appointment.findOne({ date: req.body.date, shift: req.body.shift });
    if (existingAppointment) {
        return res.status(400).send('Ya hay una cita en esa fecha y hora.');
    }
    const appointment = new Appointment({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        date: req.body.date,
        shift: req.body.shift,
        createdAt: new Date().toISOString()
    });

    await appointment.save();
    res.send(`${req.body.date}`);
}