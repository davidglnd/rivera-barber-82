import { firstLetterUpperCase, getStringMonth,numberMonth } from './utils.js';
import { handleClick } from './logic/handleClick.js'
//import {cleanMonth} from './utils.js';


window.addEventListener('DOMContentLoaded', () => {
    let currentDate = new Date();
    
    let isNextMonth = {value: false};

    printMonth(currentDate);

    const seeNextMonth = document.querySelector('#next-month');

    seeNextMonth.addEventListener('click', () =>handleClick(currentDate, seeNextMonth, isNextMonth));
});

function daySelected(day){
    location.href = `../pages/day.html`;
    localStorage.setItem('day', day);
}
function renderCalendarTitle(currentDate,month){
    const h2Controls = document.querySelector('#calendar-title');
    h2Controls.textContent = `${firstLetterUpperCase(getStringMonth(month))} ${currentDate.getFullYear()}`;
}
export function printMonth(currentDate){// TO DO: TERMINAR DE SEPARAR EN FUNCIONES LOS DIFERENTES BLOQUES Y SACAR DE MAIN.JS
    const month = currentDate.getMonth();
    
    const table = document.querySelector('#calendar');

    renderCalendarTitle(currentDate,month);
 
    const firstDayMonth = new Date(currentDate.getFullYear(), month, 1);
    const lastDayMonth = new Date(currentDate.getFullYear(), month + 1, 0);

    const daysMonth = lastDayMonth.getDate();// esto me da el ultimo dia del mes que si es 30 ya se que tiene 30 dias y si es 31 ya se que tiene 31 dias

    let row = document.createElement('tr');

    let firstDayWeek = firstDayMonth.getDay();
    firstDayWeek = firstDayWeek === 0 ? 7 : firstDayWeek;//sacamos el primer dia de la semana del mes
    
    for(let i = 1; i < firstDayWeek; i++) {
        row.appendChild(document.createElement('td'));//creamos una celda vacia para completar la semana
    }

    for (let days = 1; days <= daysMonth; days ++){
        const cell = document.createElement('td');
        cell.textContent = days;
        cell.id = days + '-' + numberMonth(month) + '-' + currentDate.getFullYear();
        row.appendChild(cell);
        cell.addEventListener('click', () => daySelected(cell.id));

        const dayOfWeek = firstDayMonth.getDay() === 0 ? 7 : firstDayMonth.getDay();

        if(dayOfWeek === 7){
            table.querySelector('tbody').appendChild(row);
            row = document.createElement('tr');
        }
        firstDayMonth.setDate(firstDayMonth.getDate() + 1);
    }
    if(row.children.length > 0){
        while(row.children.length < 7){
            row.appendChild(document.createElement('td'));
        }
        table.querySelector('tbody').appendChild(row);
        row = document.createElement('tr');
    }
}