import { ValidateName } from "./model_validator.js"

document.getElementById("btnSubmit").onclick = validate;

function validate() {
    let messages = []

    const el = document.getElementById("login").getElementsByTagName("input");

    for (let i = 0; i < el.length; i++) {
        const v = el[i].getAttribute("validation")
        if (v === null) {
            continue
        }

        if (v.length > 0) {
            console.log(el[i].id, "needs validation")
            const msgValidation = assignValidator(v, el[i].id, el[i].value)

            if (msgValidation.length > 0) {
                messages.push(msgValidation)
            }
        }
    }

    let elError = document.getElementById("error");
    elError.innerText = messages.join(', ') + "."
}

function assignValidator(validationType, fieldName, val) {
    switch (validationType) {
        case "name":
            return ValidateName(fieldName, val);
    }
}