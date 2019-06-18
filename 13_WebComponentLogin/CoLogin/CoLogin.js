const currentDocument = document.currentScript.ownerDocument;

class CompoLogin extends HTMLElement {
    constructor() {
        super();
    };

    connectedCallback() {
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });

        var theConfiguration;
        var useCredentials = true;

        const template = currentDocument.getElementById('teID');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        //finish page presentation
        const backgColor = this.getAttribute('color_bg');
        const textColor = this.getAttribute('color_text');
        const elButton = shadowRoot.querySelector('button');
        elButton.style.backgroundColor = backgColor;
        elButton.style.color = textColor;

        const elName = shadowRoot.querySelector('#uname');
        elName.style.borderColor = backgColor;

        const elPassword = shadowRoot.querySelector('#upassword');
        elPassword.style.borderColor = backgColor;

        elPassword.addEventListener('input', e => {
            if ((elName.value.length > 0) && (elPassword.value.length > 0)) {
                elButton.disabled = false;
            } else {
                elButton.disabled = true
            };
        });

        shadowRoot.querySelectorAll('input')[0].value = "x@x.com";
        shadowRoot.querySelectorAll('input')[1].value = "xxx";


        //get configuration
        const theIP = this.getAttribute('ip');
        const thePort = this.getAttribute('port');
        const theRoute = this.getAttribute('route');
        const theURL = 'http://' + theIP + ':' + thePort + '/';
        const urlSucces = this.getAttribute('succes');

        fetch(theURL + theRoute)
            .then(response => response.text())
            .then(responseText => {
                theConfiguration = JSON.parse(responseText);
                console.log(responseText, theConfiguration, theConfiguration.usecredentials);

                if (!theConfiguration.usecredentials) {
                    useCredentials = false;
                    console.log("no credentials", useCredentials);
                };


                if (useCredentials) {
                    console.log("listener - with credentials");
                    elButton.addEventListener('click', e => {
                        let createdFormData = new FormData();
                        createdFormData.append("uname", elName.value);
                        createdFormData.append("upassword", elPassword.value);

                        let request = new XMLHttpRequest();
                        request.onreadystatechange = () => {
                            if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
                                if (JSON.parse(request.responseText).authorized === true) {
                                    window.location = urlSucces;
                                };
                            } else {
                                if (request.status !== 0) {
                                    console.log("alert", request.status)
                                };
                            };
                        };
                        request.onerror = () => console.log("An error occurred during the transaction");

                        request.open(theConfiguration.proto, theURL + theConfiguration.authroute);
                        request.send(createdFormData);
                    });
                } else {
                    elButton.addEventListener('click', e => window.location = urlSucces);
                };
            })
            .catch((error) => console.error(error));
    };

    controller(userData) {
        console.log("argument:", userData);
    };
};

customElements.define('compo-login', CompoLogin);
