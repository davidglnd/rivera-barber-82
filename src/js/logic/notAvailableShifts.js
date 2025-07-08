import axios from 'https://cdn.skypack.dev/axios';
import { API_PORT,API_BASE} from '../utils.js';
export async function notAvailibilityShifts(day) {
    return axios.get(`${API_BASE}/notAvailibilityShifts/${day}`)
    
}