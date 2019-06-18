const currentDocumentNav = document.currentScript.ownerDocument;

class CompoNav extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        var menuState = false;
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });

        const template = currentDocumentNav.getElementById('teID');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        const theCategories = this.getAttribute('categs').split(",");
        let elNavMenu = shadowRoot.querySelector('ul');
        this.addCategories(elNavMenu, theCategories, "navi");

        const elIconImage = document.createElement('img');
        elIconImage.classList = 'menu-icon';
        elIconImage.src = "CoNav/menu_open.png";

        let elMenuLast = elNavMenu.childNodes[theCategories.length - 1];
        elMenuLast.appendChild(elIconImage);
        elMenuLast.classList = "";
        elMenuLast.firstChild.classList.add('item__right');

        const elSubMenuList = document.createElement('ul');
        elSubMenuList.classList = "menu-sub visible-not";
        elMenuLast.appendChild(elSubMenuList);
        this.addCategories(shadowRoot.querySelectorAll('ul')[1], theCategories, "menu-sub-item");

        //set colors
        const colorBackground = this.getAttribute('bg__color');
        const colorText = this.getAttribute('text__color');
        elNavMenu.style.backgroundColor = colorBackground;
        elNavMenu.style.color = colorText;
        elSubMenuList.style.backgroundColor = colorBackground;
        elSubMenuList.style.border = "1px solid " + colorText;

        //HTML ready now. configure events
        window.addEventListener('resize', e => {
            this.showMobileMenu(elSubMenuList, false);
            if (this.menuState) {
                this.manageMenuIcon(elIconImage);
            };
        });

        elIconImage.addEventListener('click', e => {
            this.showMobileMenu(e.target.nextElementSibling, true);
            this.manageMenuIcon(e.target);
        });

        elMenuLast.lastChild.childNodes.forEach(el => {
            if (el.tagName === 'LI') {
                el.addEventListener('mouseenter', e => {
                    e.currentTarget.style.backgroundColor = this.lightdarkenColor(colorBackground, 20);
                }, false);

                el.addEventListener('mouseleave', e => {
                    e.currentTarget.style.backgroundColor = colorBackground;
                }, false);
            };
        });
    };

    addCategories(pAddTo, pWhatTo, pClassCSS) {
        pWhatTo.forEach(el => {
            const elItem = document.createElement('li');

            if (pClassCSS !== undefined) {
                elItem.classList = pClassCSS;
            };

            const elAnchor = document.createElement('a');
            elAnchor.setAttribute('href', el.trim() + ".html");
            elAnchor.text = el.trim();
            elItem.appendChild(elAnchor);
            pAddTo.appendChild(elItem);
        });
    };

    showMobileMenu(elDOM, pToggle) {
        pToggle ? elDOM.classList.toggle('visible-not') : elDOM.classList.add('visible-not');
    };

    manageMenuIcon(elDOM) {
        elDOM.src = this.menuState ? "CoNav/menu_open.png" : "CoNav/menu_close.png";
        this.menuState = !this.menuState;
    };

    lightdarkenColor(col, amt) {
        let usePound = false;

        if (col[0] === "#") {
            col = col.slice(1);
            usePound = true;
        }

        let num = parseInt(col, 16);

        let r = (num >> 16) + amt;
        if (r > 255) r = 255;
        else if (r < 0) r = 0;

        let b = ((num >> 8) & 0x00FF) + amt;
        if (b > 255) b = 255;
        else if (b < 0) b = 0;

        let g = (num & 0x0000FF) + amt;
        if (g > 255) g = 255;
        else if (g < 0) g = 0;

        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    };

};

customElements.define('compo-nav', CompoNav);
