import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  shift: String,
  createdAt: { type: Date, default: Date.now }
});

export const Appointment = mongoose.model('Appointment', AppointmentSchema);