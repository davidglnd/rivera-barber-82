import { firstLetterUpperCase, getStringMonth } from '../utils.js';
window.addEventListener('DOMContentLoaded', () => {
    const selectedDay = localStorage.getItem('day');

    const h2SelectedDay = document.querySelector('#selected-day');
    
    h2SelectedDay.textContent = 'Citas del día ' + selectedDay.split('-')[0] + ' ' + getStringMonth(selectedDay.split('-')[1] - 1);

})