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
export function activarLoggerErrores() {
  // Crear el div para mostrar errores si no existe
  if (!document.getElementById('error-log')) {
    const errorLog = document.createElement('div');
    errorLog.id = 'error-log';
    Object.assign(errorLog.style, {
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '100%',
      maxHeight: '150px',
      overflowY: 'auto',
      background: 'rgba(255,0,0,0.8)',
      color: 'white',
      fontSize: '12px',
      fontFamily: 'monospace',
      padding: '5px',
      zIndex: '99999',
      display: 'none',
    });
    document.body.appendChild(errorLog);
  }

  // Función para mostrar error
  function mostrarError(mensaje) {
    const errorLog = document.getElementById('error-log');
    if (!errorLog) return;

    errorLog.style.display = 'block';
    const errorMsg = document.createElement('div');
    errorMsg.textContent = mensaje;
    errorLog.appendChild(errorMsg);
    errorLog.scrollTop = errorLog.scrollHeight;
  }

  // Capturar errores globales
  window.onerror = function (message, source, lineno, colno, error) {
    mostrarError(`[Error] ${message} (${source}:${lineno}:${colno})`);
  };

  // Capturar promesas rechazadas no manejadas
  window.addEventListener('unhandledrejection', event => {
    mostrarError(`[Promise rejection] ${event.reason}`);
  });
}
