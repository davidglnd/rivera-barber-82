import { Appointment } from '../models/Appointment.js';
export async function getFreeSlotsByMonth(req, res) {
    const [month, year] = req.params.monthYear.split('-'); // ej: 7-2025
    const TOTAL_SHIFTS = 18;
    const daysInMonth = new Date(year, month, 0).getDate(); // ej: 31

    const result = {};

    for (let day = 1; day <= daysInMonth; day++) {
    const date = `${day}-${month}-${year}`;

    const count = await Appointment.find({ date }).countDocuments();
    result[date] = TOTAL_SHIFTS - count;
    }

    res.json(result); // { '1-7-2025': 12, '2-7-2025': 18, ... }

}

export async function notAvailibilityShifts(req, res) {
    const day = req.params.date;

    const shifts = await Appointment.find({date: day},{shift: 1, _id: 0});
    
    res.send(shifts);
}