import { searchAppointments } from "../logic/handleSearch.js";

window.addEventListener('DOMContentLoaded', () => {
    const finderButton = document.querySelector('#submit-finder');

    finderButton.addEventListener('click', handleSubmitFinder);
});

async function handleSubmitFinder(e) {
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
        try{
            let appointment = await searchAppointments(appointmentData);
            //renderAppointments(appointment);
        }catch(err){
            console.log(err.response.data, err.response.status);
            finderResults.textContent = err.response.data;
            finderResults.classList = 'text-red-500';
            setTimeout(() => finderResults.textContent = '', 1500);
        }
    }else if(appointmentData.phone === '' && appointmentData.email !== ''){
        try{
            let appointment = await searchAppointments(appointmentData);
            console.log(appointment);
            //renderAppointments(appointment);
        }catch(err){
            console.log(err.response.data, err.response.status);
            finderResults.textContent = err.response.data;
            finderResults.classList = 'text-red-500';
            setTimeout(() => finderResults.textContent = '', 1500);
        } 
    }else{
        try{
            let appointment = await searchAppointments(appointmentData);
            //renderAppointments(appointment);
        }catch(err){
            console.log(err.response.data, err.response.status);
            finderResults.textContent = err.response.data;
            finderResults.classList = 'text-red-500';
            setTimeout(() => finderResults.textContent = '', 1500);
        }
    }
}