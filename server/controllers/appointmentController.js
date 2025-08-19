import { Appointment } from '../models/Appointment.js';

export async function createAppointment(data){
    try {
        const body = data;
        
        const existingAppointment = await Appointment.findOne({
            date: body.date,
            shift: body.shift
        });

        if (existingAppointment) {
            return {
                statusCode: 400,
                body: JSON.stringify('Ya hay una cita en esa fecha y hora.')
            }
        };

        const appointment = new Appointment({
            name: body.name,
            email: body.email,
            phone: body.phone,
            date: body.date,
            shift: body.shift,
            createdAt: new Date().toISOString()
        });

        await appointment.save();
        return {
            statusCode: 200,
            body: JSON.stringify(`${body.date}`)
        }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
}
export async function searchByPhone(phone) {
    try {
        const appointments = await Appointment.find({ phone: phone });
        return appointments;
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
}
export async function searchByEmail(email) {
    try {
        const appointments = await Appointment.find({ email: email });
        return appointments;
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        };
    }
}
export async function getCountAppointments(req, res) {
    const count = await Appointment.countDocuments();
    return count;
}