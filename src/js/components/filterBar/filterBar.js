import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';


export class FilterBar extends LitElement {
    static properties = {
        daySelected: { type: String },
        timeSelected: { type: String },
    }
    constructor() {
        super();
        this.daySelected = '';
        this.timeSelected = '';
        
    }
    createRenderRoot() {
        return this; 
    }
    render() {
        return html`
            <div class="w-full flex flex-row justify-center items-center mt-10">
                <ul class="flex flex-row justify-center gap-2 items-center">
                    <li>
                        <a href="#" class=" text-center px-4 py-3 rounded-xl transition-all duration-200 bg-gray-300 hover:bg-gray-500 hover:text-white shadow-md text-base">
                            Citas pasadas
                        </a>
                    </li>
                    <li>
                        <a href="#" class=" text-center px-4 py-3 rounded-xl transition-all duration-200 bg-gray-300 hover:bg-gray-500 hover:text-white shadow-md text-base">
                            Citas futuras
                        </a>
                    </li>
                </ul>
            </div>
        `;
    }
}

customElements.define('filter-bar', FilterBar);