import { ValidateName, ValidateEmail, ValidatePassword, ULMessages } from "./model_validator.js"

document.getElementById("btnSubmit").onclick = validateAll;

var messages = []

function validateEl(el) {
    const v = el.getAttribute("validation");
    if (v === null) {
        return
    }

    if (v.length > 0) {
        console.log(el.id, "needs validation")
        const msgValidation = assignValidator(v, el.id, el.value.trim())

        if (msgValidation.length > 0) {
            messages.push(msgValidation)
            signalNotValid()
        }
    }

    if (messages.length > 0) {
        let elMessages = document.getElementById("messages");
        ULMessages(elMessages, messages)
        return
    }

    signalValid()
}

function validateAll() {
    messages = [];
    const el = document.getElementById("login").getElementsByTagName("input");

    for (let i = 0; i < el.length; i++) {
        validateEl(el[i])
    }
}

function assignValidator(validationType, fieldName, val) {
    switch (validationType) {
        case "name":
            return ValidateName(fieldName, val);
        case "email":
            return ValidateEmail(fieldName, val);
        case "password":
            return ValidatePassword(fieldName, val);
    }
}

function signalValid() {
    let el = document.getElementById("signal")
    el.classList.add("has-text-success")
}

function signalNotValid() {
    let el = document.getElementById("signal")
    el.classList.remove("has-text-success")
}