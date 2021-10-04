import { ValidateName, ValidateEmail, ValidatePassword, ULMessages, RemoveChilds } from "./model_validator.js"
import { SendFormData } from "./model_comms.js"

// INIT
document.getElementById("btnSubmit").onclick = validateAllAndSubmit;
// var sandboxURL = "https://hookb.in/kxpYxLGBNGUBjzggjzeY" // https://hookbin.com/
var messages = []

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

async function submit() {
    const form = document.getElementById("login")

    let serverResp = await SendFormData(form, "http://localhost:3000/login").catch((err) => {
        // console.error("Error: ", err);

        messages.push("Server error.")
        let elMessages = document.getElementById("messages");
        ULMessages(elMessages, messages)
    });

    console.log("server response:", serverResp)

    if (serverResp === undefined) {
        return
    }

    let response = JSON.parse(serverResp)

    // succesfull authentication
    let storage = window.localStorage;
    storage.setItem("sessionID", response.sessionid);
    storage.setItem("validTo", Date.now() + response.validity);

    window.location = "http://localhost:3000/restricted/" + response.sessionid;
}

function validateAllAndSubmit() {
    messages = [];

    const el = document.getElementById("login").getElementsByTagName("input");
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

    submit()
}

function signalValid() {
    let el = document.getElementById("signal")
    el.classList.add("has-text-success")
}

function signalNotValid() {
    let el = document.getElementById("signal")
    el.classList.remove("has-text-success")
}