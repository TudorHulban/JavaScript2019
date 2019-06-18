const currentDocumentFooter = document.currentScript.ownerDocument;

class CompoFooter extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });

        const template = currentDocumentFooter.getElementById('teID');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        const targetURL = this.getAttribute('url-target');
        const targetText = this.getAttribute('url-text');
        let elTarget = shadowRoot.querySelector('a');
        elTarget.setAttribute('href', targetURL);
        elTarget.innerText = targetText;

        const colorBackground = this.getAttribute('bg__color');
        const colorText = this.getAttribute('text__color');
        let elColor = shadowRoot.querySelector('div');
        elColor.style.background = colorBackground;
        elColor.style.color = colorText;
    };
};

customElements.define('compo-footer', CompoFooter);
