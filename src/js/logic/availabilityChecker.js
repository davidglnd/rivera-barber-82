import axios from 'https://cdn.skypack.dev/axios';
export async function availabilityChecker(month, year){
    const res = await axios.get(`/api/freeSlots/month/${month}-${year}`);
    const allFreeSlots = res.data;
    return allFreeSlots;
}