import axios from 'https://cdn.skypack.dev/axios';
export async function notAvailibilityShifts(day) {
    return axios.get(`/api/notAvailibilityShifts/${day}`)
    
}