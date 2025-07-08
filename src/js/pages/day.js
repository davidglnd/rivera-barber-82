import { getStringMonth,formatDate,API_PORT } from '../utils.js';
import axios from 'https://cdn.skypack.dev/axios';
import { Appointment } from '../classes/Appointment.js';
import {notAvailibilityShifts} from '../logic/notAvailableShifts.js';
window.addEventListener('DOMContentLoaded', async () => {
  const selectedDay = localStorage.getItem('day');
  const notAvailableShifts = await notAvailibilityShifts(selectedDay);

  notAvailableShifts.data.forEach(shift => {
    const btnReserve = document.querySelector(`[data-shift="${shift.shift}"]`);
    btnReserve.textContent = 'No disponible';
    btnReserve.classList.remove('available');
    btnReserve.classList.add('unavailable');
  });
  
  const h2SelectedDay = document.querySelector('#selected-day');
  
  h2SelectedDay.textContent = 'Citas del día ' + selectedDay.split('-')[0] + ' ' + getStringMonth(selectedDay.split('-')[1] - 1);

  const h3BackToCalendar = document.querySelector('#back-to-calendar');
  h3BackToCalendar.addEventListener('click', () => window.location.href = '../pages/calendar.html');

  //TO DO: AÑADIR FUNCIONALIDAD A LOS BOTONES DE RESERVAR CITAS DE CADA HORA USANDO EL DATA-SHIFT PARA IDENTIFICAR
  //EL TURNO QUE SE ESTA RESERVANDO Y MOSTRAR EL FORMULARIO DE RESERVA QUERY SELECTOR DE LA CLASE AVAILABLE
  
  const btnReserve = document.querySelectorAll('.available');
  btnReserve.forEach(btn => btn.addEventListener('click',() => handleClickReserve(btn.dataset.shift,selectedDay)));

  document.addEventListener('submitFromAppointmentCard', (e) => AppointmentCardSubmit(e));
})
function handleClickReserve(shift,selectedDay){
  console.log(shift + ' ' + selectedDay);

  const AppointmentCard = document.createElement('appointment-card');
  AppointmentCard.daySelected = selectedDay;
  AppointmentCard.timeSelected = shift;
  document.querySelector('body').appendChild(AppointmentCard);

}

async function AppointmentCardSubmit(e){
  console.log(e.detail.time);

  const appointment = new Appointment(e.detail.name, e.detail.email, e.detail.phone, e.detail.date, e.detail.shift, new Date().toISOString());
  console.log(appointment)
  axios.post(`http://localhost${API_PORT}/createAppointment`, appointment)
  .then(res => {
    console.log('✅ Cita guardada:', res.data);
  })
  .catch(err => {
    console.error('❌ Error al guardar cita:', err.response.data);
  });
}