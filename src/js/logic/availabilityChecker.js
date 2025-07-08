import axios from 'https://cdn.skypack.dev/axios';
import { API_PORT } from '../utils.js';
export async function availabilityChecker(date) {
    const freeSlots = await axios.get(`http://localhost${API_PORT}/freeSlots/${date}`)
    return 18 - freeSlots.data;
}