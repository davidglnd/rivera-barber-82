import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';
import ResetCSS from '../../../css/reset.css' with { type: 'css' };
import AppointmentCardCSS from './AppointmentCard.css' with { type: 'css' };
export class AppointmentCard extends LitElement {
    static styles = [ResetCSS, AppointmentCardCSS];
    static propperties = {
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
            day: this.daySelected,
            time: this.timeSelected,
        }
        console.log(appointmentData);

        this.dispatchEvent(new CustomEvent('submitFromAppointmentCard', { 
            detail: appointmentData,
            bubbles: true,
            composed: true 
        }));
    }
    render() {
        return html`
            <div class="overlay" @click=${this._handleClickClose}></div>
            <div class="overlay-1">
                <form class="appointment-card" @submit=${this._handleSubmit}>
                    <img src="../assets/icons8-cerrar-ventana-26.png" class="close-btn" @click=${this._handleClickClose}>
                    <p>${this.daySelected} - ${this.timeSelected}</p>
                    <input type="text" name="name" placeholder="Nombre" placeholder="Nombre" required>
                    <input type="email" name="email" placeholder="Correo electrónico" required>
                    <input type="tel" name="phone" placeholder="Teléfono" required>
                    <button type="submit">Reservar</button>
                </form>
            </div>
        `;
    }
}
customElements.define('appointment-card', AppointmentCard);