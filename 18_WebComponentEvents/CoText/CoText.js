const currentDocumentText = document.currentScript.ownerDocument;

class CompoText extends HTMLElement {
    constructor() {
        super();
    };

    static get observedAttributes() {
        return ['isVisible'];
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });

        const template = currentDocumentText.getElementById('teID');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);
    };

    manageElement(pEl, pHide, pShadow) {
        let theEl = pShadow.querySelector(pEl);
        pHide ? theEl.style.display = 'none' : theEl.style.display = 'block';
    };
};

customElements.define('compo-text', CompoText);
