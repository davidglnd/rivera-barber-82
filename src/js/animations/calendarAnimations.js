
export function showLoader(table){
    //btn disabled
    const btnNextMonth = document.querySelector('#next-month');
    btnNextMonth.disabled = true;
    //loader 
    const loader = document.querySelector('#calendar-loader');
    //show loader
    loader.style.display = 'block';
    table.style.display = 'none';
}
export function hideLoader(table){
    //btn enabled
    const btnNextMonth = document.querySelector('#next-month');
    btnNextMonth.disabled = false;
    //loader
    const loader = document.querySelector('#calendar-loader');
    //hide loader
    loader.style.display = 'none';
    table.style.display = 'table';

    setTimeout(() => {
        table.classList.add('show');
    }, 50);
}
export function animateCalendarCells() {
  const cells = document.querySelectorAll('#calendar td');

  cells.forEach((cell, index) => {
    cell.classList.add('animate-in');
    cell.style.animationDelay = `${index * 30}ms`; // Delay en cascada
  });
}
export function getColorBySlots(freeSlots,maxSlots = 18) {
    const percentage = (freeSlots / maxSlots) * 100;
    const color = `hsl(${percentage}, 50%, 50%)`;
    return color;
}