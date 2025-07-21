import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';

export class SideBar extends LitElement {
    constructor() {
        super();
    }
    createRenderRoot() {
        return this; 
    }
    render(){
        return html`
        <ul class="flex flex-col items-stretch gap-2 p-4 h-full">
            <li>
                <a href="../../admin.html" class="block text-center px-4 py-3 rounded-xl transition-all duration-200 bg-white hover:bg-black hover:text-white shadow hover:shadow-md text-base">
                    Inicio
                </a>
            </li>
            <li>
                <a id="btn-reserved-appointments" href="./pages/admin/reserved-appointments.html" class="block text-center px-4 py-3 rounded-xl transition-all duration-200  bg-black text-white shadow-md text-base">
                    Citas reservadas
                </a>
            </li>
            <li>
                <a href="#" class="block text-center px-4 py-3 rounded-xl transition-all duration-200 bg-white hover:bg-black hover:text-white shadow hover:shadow-md text-base">
                    Opción 3
                </a>
            </li>
            <li>
                <a href="#" class="block text-center px-4 py-3 rounded-xl transition-all duration-200 bg-white hover:bg-black hover:text-white shadow hover:shadow-md text-base">
                    Opción 4
                </a>
            </li>
            <li>
                <a href="#" class="block text-center px-4 py-3 rounded-xl transition-all duration-200 bg-white hover:bg-black hover:text-white shadow hover:shadow-md text-base">
                    Opción 5
                </a>
            </li>
        </ul>
        `;
    }
}

customElements.define('side-bar', SideBar);