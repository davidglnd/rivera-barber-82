import axios from 'https://cdn.skypack.dev/axios';
import { API_PORT } from '../utils.js';
export async function notAvailibilityShifts(day) {
    return axios.get(`http://localhost${API_PORT}/notAvailibilityShifts/${day}`)
    
}