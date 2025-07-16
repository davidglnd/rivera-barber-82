import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';

export class SideBar extends LitElement {
    render(){
        return html`
        <aside class=" hidden md:flex col-span-1 row-span-2 bg-gray-200 text-gray-700 font-medium shadow-lg w-48">
        <ul class="flex flex-col items-stretch gap-2 p-4 h-full">
        <li>
            <a href="./pages/calendar.html" class="block text-center px-4 py-3 rounded-xl transition-all duration-200 bg-white hover:bg-black hover:text-white shadow hover:shadow-md text-base">
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
    </aside>
        `;
    }
}

customElements.define('side-bar', SideBar);