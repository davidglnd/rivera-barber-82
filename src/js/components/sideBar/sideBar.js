import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';

export class SideBar extends LitElement {
    static properties = {
        currentPath: { type: String },
    }
    constructor() {
        super();
        this.currentPath = '';
    }
    connectedCallback() {
        super.connectedCallback();
        this.currentPath = window.location.pathname;
    }
    createRenderRoot() {
        return this; 
    }
    render(){
        const menuItems = [
            { label: 'Inicio', href: '/admin.html'},
            { label: 'Citas reservadas', href: '/pages/admin/reserved-appointments.html'},
            { label: "Opción 3", href: "#" },
            { label: "Opción 4", href: "#" },
            { label: "Opción 5", href: "#" },
        ];
        return html`
            <ul class="flex flex-col items-stretch gap-2 p-4 h-full">
                ${menuItems.map(item => html`
                    <li>
                        <a
                            href="${item.href}"
                            class="${this._handleCurrentPath(item.href)}"
                        >
                            ${item.label}
                        </a>
                    </li>
                `)}
            </ul>
        `;
    }
    _handleCurrentPath(href) {
        let defaultClass = "block text-center px-4 py-3 rounded-xl transition-all duration-200 bg-white hover:bg-black hover:text-white shadow hover:shadow-md text-base";
        let classSelectedPage = "block text-center px-4 py-3 rounded-xl transition-all duration-200  bg-black text-white shadow shadow-md text-base";
        if(this.currentPath.endsWith(href)) {
            return classSelectedPage;
        } else {
            return defaultClass;
        }
    }
}

customElements.define('side-bar', SideBar);