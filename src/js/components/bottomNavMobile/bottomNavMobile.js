import { LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';

export class BottomNavMobile extends LitElement {
    constructor() {
        super();
    }
    createRenderRoot() {
        return this; 
    }
    render() {
        return html`
        <nav class="fixed bottom-0 left-0 w-full bg-gray-200 text-gray-700 flex justify-around items-center md:hidden h-16 shadow-t z-50">
            <a href="./pages/admin/reserved-appointments.html" class="flex flex-col items-center text-sm hover:text-black">
            <span>📅</span>
            <span>Citas</span>
            </a>
            <a href="#" class="flex flex-col items-center text-sm hover:text-black">
            <span>🧾</span>
            <span>Opción 3</span>
            </a>
            <a href="#" class="flex flex-col items-center text-sm hover:text-black">
            <span>⚙️</span>
            <span>Opción 4</span>
            </a>
            <a href="#" class="flex flex-col items-center text-sm hover:text-black">
            <span>🔔</span>
            <span>Opción 5</span>
            </a>
        </nav>
        `;
    }
}

customElements.define('bottom-nav-mobile', BottomNavMobile);