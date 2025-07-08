import axios from 'https://cdn.skypack.dev/axios';
import { API_PORT,API_BASE} from '../utils.js';
export async function availabilityChecker(date) {
    const freeSlots = await axios.get(`${API_BASE}/freeSlots/${date}`)
    return 18 - freeSlots.data;
}