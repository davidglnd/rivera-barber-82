import { Appointment } from '../models/Appointment.js';
export async function getFreeSlotsByMonth(data) {
    try{
        const monthYear = data;
        const [month, year] = monthYear.split('-');
        const TOTAL_SHIFTS = 18;
        const daysInMonth = new Date(year, month, 0).getDate();
        const result = {};
        for (let day = 1; day <= daysInMonth; day++) {
            const date = `${day}-${month}-${year}`;
            const count = await Appointment.find({ date }).countDocuments();
            result[date] = TOTAL_SHIFTS - count;
        }
        return result;
    }catch(err){
        console.log(err + ' getFreeSlotsByMonth');
    }
}

export async function notAvailibilityShifts(data) {
    const day = data;
    console.log(day);
    const shifts = await Appointment.find({date: day},{shift: 1, _id: 0});
    
    return shifts;
}