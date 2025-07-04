import { getStringMonth,formatDate } from '../utils.js';
import { handleShift } from '../logic/handleShift.js';
import {activarLoggerErrores} from '../utils.js';
window.addEventListener('DOMContentLoaded', () => {
    activarLoggerErrores();
      const testCard = document.createElement('appointment-card');
  testCard.daySelected = 'Miércoles 3 de Julio';
  testCard.timeSelected = '10:00';
  document.body.appendChild(testCard);
  alert('🟢 Componente forzado montado');






    const selectedDay = localStorage.getItem('day');

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
    AppointmentCard.daySelected = formatDate(selectedDay)
    AppointmentCard.timeSelected = handleShift(shift);
    document.querySelector('body').appendChild(AppointmentCard);

}

function AppointmentCardSubmit(e){
    console.log(e.detail.time);
    console.log(handleShift(e.detail.time));
}