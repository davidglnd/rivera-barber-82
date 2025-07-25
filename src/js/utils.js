export const API_BASE = '';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function firstLetterUpperCase(text) { 
    return text
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
}

export function getStringMonth(numberMonth){
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return months[numberMonth];
}

export function getDaysMonth(year, month){
    const date = new Date(year, month, 1);
    const days = [];
    while(date.getMonth() === month){
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}

export function numberMonth(month){
    return month + 1;
}
export function formatDate(fechaStr) {
    const [day, month, year] = fechaStr.split('-').map(Number);
    const fecha = new Date(year, month - 1, day);
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    let result = fecha.toLocaleDateString('es-ES', options);
    result = result.replace(',', '');

    return result.charAt(0).toUpperCase() + result.slice(1);
}






