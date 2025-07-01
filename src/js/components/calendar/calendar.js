import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';
import {firstLetterUpperCase,getStringMonth} from '../../utils.js';
export class Calendar extends LitElement {
    
    // static properties = {
    //     partido: {type: Object},
    //     jugadores: {type: Array},
    // }

    render() {
        return html`
            <div class="controls">
                <p id="prev-month" @click=${() => console.log('previo mes')}>⬅️</p>
                <h2 id="calendar-title"></h2>
                <p id="next-month" @click=${() => console.log('siguiente mes')}>➡️</p>
            </div>
            <table id="calendar">
                <thead>
                    <tr>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miércoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sábado</th>
                        <th>Domingo</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
    }

    firstUpdated(){
        const currentDate = new Date();
        const h2Controls = this.shadowRoot.querySelector('#calendar-title');
        h2Controls.textContent = `${firstLetterUpperCase(getStringMonth(currentDate.getMonth()))} ${currentDate.getFullYear()}`;
    }
}

customElements.define('calendar-component', Calendar);