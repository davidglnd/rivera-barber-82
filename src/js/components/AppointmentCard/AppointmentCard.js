import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';
import ResetCSS from '../../../css/reset.css' with { type: 'css' };
import AppointmentCardCSS from './AppointmentCard.css' with { type: 'css' };
import {formatDate} from '../../utils.js';
import {handleShift} from '../../logic/handleShift.js';
export class AppointmentCard extends LitElement {
    static styles = [ResetCSS, AppointmentCardCSS];
    static properties = {
        daySelected: { type: String },
        timeSelected: { type: String },
    };
    constructor() {
        super();
        this.daySelected = '';
        this.timeSelected = '';
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
            <div class="overlay" @click=${this._handleClickClose}></div>
            <div class="overlay-1">
                <form class="appointment-card" @submit=${this._handleSubmit}>
                    <img src="../assets/icons8-cerrar-ventana-26.png" class="close-btn" @click=${this._handleClickClose}>
                    <p>${formatDate(this.daySelected)} - ${handleShift(this.timeSelected)}</p>
                    <input type="text" name="name" placeholder="Nombre" placeholder="Nombre" required>
                    <input type="email" name="email" placeholder="Correo electrónico" required>
                    <input type="tel" name="phone" placeholder="Teléfono" required>
                    <button type="submit">Reservar</button>
                    <div class="response"></div>
                </form>
            </div>
        `;
    }
}
customElements.define('appointment-card', AppointmentCard);