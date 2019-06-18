const currentDocumentXXX = document.currentScript.ownerDocument;

class CompoXXX extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });

        const template = currentDocumentXXX.getElementById('teID');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
    };
};

customElements.define('compo-xxx', CompoXXX);
