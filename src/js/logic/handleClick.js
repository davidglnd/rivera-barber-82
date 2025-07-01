import { printMonth } from '../pages/calendar.js';
const handleClick = (currentDate, seeNextMonth, isNextMonth) => {
        cleanMonth();
        if (!isNextMonth.value) {
            currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
            printMonth(currentDate);
            seeNextMonth.textContent = 'Volver al mes actual';
        } else {
            currentDate = new Date(); 
            printMonth(currentDate);
            seeNextMonth.textContent = 'Ver mes siguiente';
        }
        isNextMonth.value = !isNextMonth.value; //cambiamos el estado de la variable true a false o viceversa
    };

export { handleClick };
//CLEAN MONTH
export function cleanMonth(){
    const table = document.querySelector('#calendar tbody');
    table.innerHTML = ``;
}