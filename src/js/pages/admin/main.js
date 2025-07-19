import axios from 'https://cdn.skypack.dev/axios';
import { API_BASE } from "../../utils.js";

window.addEventListener('DOMContentLoaded', async () => {
    const dashboardHome = document.querySelector('#dashboard-home');
    dashboardHome.textContent = 'Estadisticas basicas';

    const numberOfAppointments = await axios.get(`${API_BASE}/countAppointments`);
    
    const h2NumberOfAppointments = document.createElement('h2');
    h2NumberOfAppointments.textContent = 'Numero de citas procesadas: ' + numberOfAppointments.data;

    dashboardHome.appendChild(h2NumberOfAppointments);
});