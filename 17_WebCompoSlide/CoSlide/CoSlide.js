const currentDocumentSlide = document.currentScript.ownerDocument;

class CompoSlide extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
    };

    connectedCallback() {
        const template = currentDocumentSlide.getElementById('teID');
        const instance = template.content.cloneNode(true);
        this.shadowRoot.appendChild(instance);

        const objInfoForm = JSON.parse(this.getAttribute('config'));
        this.elContainer = this.shadowRoot.querySelector('div');
        this.addImages(this.shadowRoot, objInfoForm.img, this.elContainer);

        this.slideshow = new SlideShow(this.shadowRoot, objInfoForm.ms);
        this.hide();
    };

    addImages(pShadow, pImages, pContainer) {
        pImages.forEach(el => {
            let elImg = document.createElement('img');
            elImg.src = el;
            pContainer.appendChild(elImg);
        });
    };

    stop() {
        this.slideshow.stop();
    }

    init() {
        this.slideshow.init();
    }

    hide() {
        this.stop();
        this.elContainer.style.display = 'none';
    };

    show() {
        this.init();
        this.elContainer.style.display = 'flex';
    };
};

class SlideShow {
    constructor(pShadow, pInterval) {
        this.aElements = pShadow.querySelectorAll('img');
        this.currentEl = 0;
        pInterval !== undefined ? this.interval = pInterval : this.interval = 3000;

        this.init();
    }

    init() {
        this.nextEl();
    }

    stop() {
        clearTimeout(this.run);
    }

    nextEl() {
        this.currentEl === (this.aElements.length - 1) ? this.currentEl = 0 : this.currentEl += 1;
        this.slide(this.currentEl);

        this.run = setTimeout(() => {
            this.nextEl(this.interval)
        }, this.interval);
    }

    slide(pIx) {
        this.stop();
        this.aElements.forEach((el, ix) => {
            ix === pIx ? el.style.display = 'inline-block' : el.style.display = 'none';
        });
    }
};

customElements.define('compo-slide', CompoSlide);
