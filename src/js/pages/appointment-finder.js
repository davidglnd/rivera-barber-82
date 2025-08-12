window.addEventListener('DOMContentLoaded', () => {
    const finderButton = document.querySelector('#submit-finder');

    finderButton.addEventListener('click', handleSubmitFinder);
});

function handleSubmitFinder(e) {
    e.preventDefault();
    
    const phoneInput = document.querySelector('#phone');
    const emailInput = document.querySelector('#email');
    const finderResults = document.querySelector('#finder-results');

    const appointmentData = {
        phone: phoneInput.value,
        email: emailInput.value,
    }
    
    if(appointmentData.phone === '' && appointmentData.email === ''){
        finderResults.textContent = 'Por favor, introduce un telefono o un correo electronico';
        finderResults.classList = 'text-red-500';
        setTimeout(() => finderResults.textContent = '', 1000);
    }else if(appointmentData.phone !== '' && appointmentData.email === ''){
        finderResults.textContent = 'Buscando cita por telefono';
        // desarrollar function de busqueda 
    }else if(appointmentData.phone === '' && appointmentData.email !== ''){
        finderResults.textContent = 'Buscando cita por correo electronico';
        // desarrollar function de busqueda 
    }else{
        finderResults.textContent = 'Buscando cita por telefono aun que hayas puesto ambos';
        // desarrollar function de busqueda 
    }
}