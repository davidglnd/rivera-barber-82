//utils
import { numberMonth } from '../../js/utils.js';
//logic
import { handleClick } from '../logic/handleClick.js';
import {availabilityChecker} from '../logic/availabilityChecker.js';
import { renderCalendarTitle, getsDaysInMonth, getFirstDayWeek, createEmptyCellsBeforeFirstDay } from '../logic/printMonth.js';
//animations
import { showLoader, hideLoader, animateCalendarCells, getColorBySlots} from '../animations/calendarAnimations.js';

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

export async function printMonth(currentDate){// TO DO: TERMINAR DE SEPARAR EN FUNCIONES LOS DIFERENTES BLOQUES Y SACAR DE MAIN.JS
    const month = currentDate.getMonth();
    const table = document.querySelector('#calendar');
    const daysMonth = getsDaysInMonth(currentDate);
    const firstDayWeek = getFirstDayWeek(currentDate);
    
    showLoader(table);

    renderCalendarTitle(currentDate,month);
    
    let row = createEmptyCellsBeforeFirstDay(firstDayWeek);
    const firstDayMonth = new Date(currentDate.getFullYear(), month, 1);
    
    const allFreeSlots = await availabilityChecker(numberMonth(month),currentDate.getFullYear());
    console.log(allFreeSlots);
    
    for (let days = 1; days <= daysMonth; days ++){
        const fullDate = `${days}-${month + 1}-${currentDate.getFullYear()}`;
        const freeSlots = allFreeSlots[fullDate] || 0;
        
        const cell = document.createElement('td');

        const color = getColorBySlots(freeSlots);
        cell.style.backgroundColor = color;
        cell.style.color = freeSlots < 18 / 3 ? 'white' : 'black';

        cell.innerHTML = `<p>Dia: ${days}</p> <p>${freeSlots} citas libres</p>`;// poner en mayor tamaño el numero del dia y en menor el numero de citas

        cell.id = days + '-' + numberMonth(month) + '-' + currentDate.getFullYear();
        cell.addEventListener('click', () => daySelected(cell.id));
        row.appendChild(cell);

        const dayOfWeek = firstDayMonth.getDay() === 0 ? 7 : firstDayMonth.getDay();

        if(dayOfWeek === 7){
            table.querySelector('tbody').appendChild(row);
            row = document.createElement('tr');
            cell.innerText = 'Cerrado';
            const oldCell = document.getElementById(`${days}-${numberMonth(month)}-${currentDate.getFullYear()}`);
            const newCell = oldCell.cloneNode(true);
            oldCell.parentNode.replaceChild(newCell, oldCell);
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
    hideLoader(table);
    animateCalendarCells();
}