import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';
// import ResetCSS from '../../../css/reset.css' with { type: 'css' };
// import AppointmentCardCSS from './AppointmentCard.css' with { type: 'css' };
import {formatDate} from '../../utils.js';
import {handleShift} from '../../logic/handleShift.js';
export class AppointmentCard extends LitElement {
    //static styles = [ResetCSS, AppointmentCardCSS];
    static properties = {
        daySelected: { type: String },
        timeSelected: { type: String },
    };
    constructor() {
        super();
        this.daySelected = '';
        this.timeSelected = '';
    }
    createRenderRoot() {
        return this; 
    }
    _handleClickClose(e){
        e.preventDefault();
        this.remove();
    }
    _handleSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.target);
        const appointmentData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            date: this.daySelected,
            shift: this.timeSelected,
        }
        console.log(appointmentData);

        this.dispatchEvent(new CustomEvent('submitFromAppointmentCard', { 
            detail: appointmentData,
            bubbles: true,
            composed: true 
        }));
        const divResponse = this.shadowRoot.querySelector('.response');
        divResponse.textContent = 'Cita reservada';
        setTimeout(() => this.remove(), 3000);
    }
    render() {
        return html`
        <div 
        class="fixed top-0 left-0 w-screen h-screen bg-black/25  z-[9999] flex justify-center items-center pointer-events-auto"
        @click=${this._handleClickClose}>
        </div>

        <div 
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75vh] max-h-[80vh] bg-black/25 z-[10000] flex justify-center items-center p-4 backdrop-blur-md pointer-events-auto">
        
        <form 
            class="bg-white p-8 rounded-2xl shadow-xl border-l-[6px] border-r-[6px] border-[#d10000] min-w-[300px] w-full max-w-[400px] flex flex-col gap-4 font-sans text-[#333]"
            @submit=${this._handleSubmit}>
            
            <img 
            src="../assets/icons8-cerrar-ventana-26.png" 
            class="absolute top-4 right-4 w-[26px] h-[26px] cursor-pointer select-none" 
            @click=${this._handleClickClose}>
            
            <p class="font-bold text-lg mb-2 text-[#0033a0]">
            ${formatDate(this.daySelected)} - ${handleShift(this.timeSelected)}
            </p>

            <input 
            type="text" 
            name="name" 
            placeholder="Nombre" 
            required 
            class="p-3 border border-gray-300 rounded-lg text-base w-full focus:outline-none focus:border-[#d10000] focus:ring-2 focus:ring-[#d10000]/20">
            
            <input 
            type="email" 
            name="email" 
            placeholder="Correo electrónico" 
            required 
            class="p-3 border border-gray-300 rounded-lg text-base w-full focus:outline-none focus:border-[#d10000] focus:ring-2 focus:ring-[#d10000]/20">
            
            <input 
            type="tel" 
            name="phone" 
            placeholder="Teléfono" 
            required 
            class="p-3 border border-gray-300 rounded-lg text-base w-full focus:outline-none focus:border-[#d10000] focus:ring-2 focus:ring-[#d10000]/20">
            
            <button 
            type="submit" 
            class="bg-[#0033a0] text-white border-none p-3 rounded-lg font-bold text-base cursor-pointer hover:bg-[#0048e4] transition">
            Reservar
            </button>

            <div class="response"></div>
        </form>
        </div>

        `;
    }
}
customElements.define('appointment-card', AppointmentCard);