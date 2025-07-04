import { MongoClient, ObjectId } from "mongodb";

const URI = process.env.MONGO_URI;

export const db = {
    appointments:{
        count: CountAppointments,
        create: createAppointment,
    }
}

async function CountAppointments() {
    const client = new MongoClient(URI);
    const barberAppointments = client.db('Barber-Rivera-82');
    const appointments = barberAppointments.collection('appointments');
    return await appointments.countDocuments();
}

async function createAppointment(appointment) {
    const client = new MongoClient(URI);
    const barberAppointments = client.db('Barber-Rivera-82');
    const appointments = barberAppointments.collection('appointments');
    return await appointments.insertOne(appointment);
}