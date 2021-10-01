import { ValidateName, ValidateEmail, ValidatePassword, ULMessages, RemoveChilds } from "./model_validator.js"
import { SendFormData } from "./model_comms.js"

// INIT
document.getElementById("btnSubmit").onclick = validateAllAndSubmit;
var sandboxURL = "https://hookb.in/kxpYxLGBNGUBjzggjzeY" // https://hookbin.com/
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
}

function validateAllAndSubmit() {
    messages = [];
    const form = document.getElementById("login")
    const el = form.getElementsByTagName("input");

    for (let i = 0; i < el.length; i++) {
        validateEl(el[i])
    }

    let elMessages = document.getElementById("messages");
    if (messages.length > 0) {
        ULMessages(elMessages, messages)
        return
    }

    RemoveChilds(elMessages);
    signalValid();

    SendFormData(form, "http://localhost:3000/login")
    // SendFormData(form, sandboxURL)
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