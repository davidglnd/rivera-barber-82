import { numberMonth } from '../../js/utils.js';
import { handleClick } from '../logic/handleClick.js'
import { renderCalendarTitle, getsDaysInMonth, getFirstDayWeek, createEmptyCellsBeforeFirstDay } from '../logic/printMonth.js';

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

export function printMonth(currentDate){// TO DO: TERMINAR DE SEPARAR EN FUNCIONES LOS DIFERENTES BLOQUES Y SACAR DE MAIN.JS
    const month = currentDate.getMonth();
    const table = document.querySelector('#calendar');
    const daysMonth = getsDaysInMonth(currentDate);
    const firstDayWeek = getFirstDayWeek(currentDate);

    renderCalendarTitle(currentDate,month);
    
    let row = createEmptyCellsBeforeFirstDay(firstDayWeek);
    const firstDayMonth = new Date(currentDate.getFullYear(), month, 1);

    for (let days = 1; days <= daysMonth; days ++){
        const cell = document.createElement('td');
        cell.textContent = days;
        cell.id = days + '-' + numberMonth(month) + '-' + currentDate.getFullYear();
        cell.addEventListener('click', () => daySelected(cell.id));
        row.appendChild(cell);

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