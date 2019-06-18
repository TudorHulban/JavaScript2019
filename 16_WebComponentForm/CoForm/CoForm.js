const currentDocumentWebForm = document.currentScript.ownerDocument;

class CompoForm extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });

        const template = currentDocumentWebForm.getElementById('teID');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        const objInfoForm = JSON.parse(this.getAttribute('config'));
        this.addFormInput(shadowRoot, objInfoForm, "item");

        if (objInfoForm.showElemID !== null && objInfoForm.showElemID !== undefined) {
            this.elShow = document.getElementById(objInfoForm.showElemID)
        };
    };

    showDOMElement() {
        this.elShow.show();
    };

    hideDOMElement() {
        this.elShow.hide();
    };

    showElement(pArrayEl, pIx) {
        pArrayEl.forEach((el, ix) => {
            if (ix !== pIx) {
                el.style.display = 'none';
            } else {
                el.style.display = 'block';
            };
        });
    };

    cleanName(pName) {
        const toReplace = [" ", "{", "}", "[", "]"];
        let elResult = pName;

        toReplace.forEach(v => elResult = elResult.replace(v, ""));
        return elResult;
    };


    addFormInput(pAddTo, pInfoForm, pClassCSS) {
        let elContainer = document.createElement('div');
        let elH1 = document.createElement('h1');
        elH1.textContent = pInfoForm.h1;

        elContainer.appendChild(elH1);

        let oTandem = {
            aInputs: [],
            elLabels: [],
            elInputs: [],
            elTandem: {}
        };

        pInfoForm.info.forEach((el, ix) => {

            let elLabel = document.createElement('label');
            elLabel.textContent = el.n;
            elContainer.appendChild(elLabel);
            let elName = this.cleanName(el.n);

            if (el.o.length > 0) {
                let elSelection = document.createElement('select');
                elSelection.setAttribute('name', elName);
                elSelection.setAttribute('id', elName);
                elSelection.style.borderColor = pInfoForm.color_bg;
                elSelection.selectedIndex = -1;

                if (pClassCSS.length > 0) {
                    elSelection.classList = pClassCSS;
                };

                el.o.forEach(el => {
                    let elOption = document.createElement('option');
                    elOption.text = el;
                    elSelection.appendChild(elOption);
                });

                elContainer.appendChild(elSelection);
            } else {
                var elInput = document.createElement('input');
                elInput.setAttribute('name', elName);
                elInput.setAttribute('id', elName);
                elInput.style.borderColor = pInfoForm.color_bg;

                if (pClassCSS.length > 0) {
                    elInput.classList = pClassCSS;
                };

                elContainer.appendChild(elInput);
            };

            if (el.mode === "tandem") {
                oTandem.aInputs.push(ix);
                oTandem.elLabels.push(elLabel);
                oTandem.elInputs.push(elInput);
            } else {
                if (elInput !== undefined) {
                    elInput.value = "f" + ix;
                };
            };
        });

        if (oTandem.aInputs.length > 0) {
            //update elements based on tandem info
            this.showElement(oTandem.elLabels);
            this.showElement(oTandem.elInputs);

            const elParentNodes = oTandem.elInputs[0].parentNode.childNodes;

            elParentNodes.forEach((el, ix) => {
                if (el === oTandem.elInputs[0]) {
                    oTandem.elTandem = elParentNodes[ix - 2];
                };
            });

            let elOption = document.createElement('option');
            elOption.text = "";
            elOption.setAttribute("selected", "");
            elOption.setAttribute("disabled", "");
            elOption.setAttribute("hidden", "");
            oTandem.elTandem.appendChild(elOption);

            oTandem.elTandem.addEventListener('change', e => {
                const ixToShow = oTandem.elTandem.options.selectedIndex;
                this.showElement(oTandem.elLabels, ixToShow);
                this.showElement(oTandem.elInputs, ixToShow);
            }, false);
        };

        let elSubmit = document.createElement('button');
        elSubmit.style.backgroundColor = pInfoForm.color_bg;
        elSubmit.style.color = pInfoForm.color_text;
        elSubmit.appendChild(document.createTextNode(pInfoForm.btn));

        elSubmit.addEventListener('click', e => {
            let dataForm = new FormData();

            pInfoForm.info.forEach(el => {
                const elName = this.cleanName(el.n);
                const elForm = this.shadowRoot.querySelector('#' + elName);
                console.log("each:", el, elName, elForm);
                dataForm.append(elName, this.shadowRoot.querySelector('#' + elName).value);
            });

            for (let pair of dataForm.entries()) {
                console.log("data:", pair[0] + ', ' + pair[1]);
            }

            let request = new XMLHttpRequest();
            if (this.elShow !== undefined) {
                this.showDOMElement()
            };

            request.onreadystatechange = () => {

                if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
                    console.log("response:", request.responseText);
                    alert(request.responseText);

                    if (this.elShow !== undefined) {
                        this.hideDOMElement();
                    };
                } else {
                    //check also putsreq.com
                    console.log("status:", request.status, request.readyState, XMLHttpRequest.DONE, request.responseText)
                };
            };

            request.onerror = () => console.log("An error occurred during the transaction");

            request.open(pInfoForm.url[0].p, pInfoForm.url[1].u);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            request.send(dataForm);
        }, false);

        elContainer.appendChild(elSubmit);
        pAddTo.appendChild(elContainer);
    };
};

customElements.define('compo-form', CompoForm);
