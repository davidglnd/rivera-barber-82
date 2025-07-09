import axios from 'https://cdn.skypack.dev/axios';
import {API_BASE} from '../utils.js';
export async function availabilityChecker(month, year){
    const res = await axios.get(`${API_BASE}/freeSlots/month/${month}-${year}`);
    const allFreeSlots = res.data;
    return allFreeSlots;
}