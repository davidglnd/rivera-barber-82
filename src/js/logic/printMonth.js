import { firstLetterUpperCase, getStringMonth } from '../utils.js';
//LOGIC PRINT MONTH
export function renderCalendarTitle(currentDate,month){
    const h2Controls = document.querySelector('#calendar-title');
    h2Controls.textContent = `${firstLetterUpperCase(getStringMonth(month))} ${currentDate.getFullYear()}`;
}
export function getsDaysInMonth(currentDate){
    return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
}

export function getFirstDayWeek(currentDate) {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    return firstDay === 0 ? 7 : firstDay;
}
export function createEmptyCellsBeforeFirstDay(firstDayWeek) {
    let row = document.createElement('tr');

    for(let i = 1; i < firstDayWeek; i++) {
        row.appendChild(document.createElement('td'));//creamos una celda vacia para completar la semana
    }
    return row;
}
