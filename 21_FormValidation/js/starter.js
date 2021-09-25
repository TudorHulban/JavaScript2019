import { ValidateName } from "./model_validator.js"

document.getElementById("btnSubmit").onclick = validate;

function validate() {
    console.log("submitted")

    let messages = []

    const fName = document.forms["login"]["firstName"].value
    let v = ValidateName("first Name", fName)
    if (v.length>0) {
        messages.push(v)
    }

    const lName = document.forms["login"]["lastName"].value
    v = ValidateName("last Name", lName)
    if (v.length>0) {
        messages.push(v)
    }

    let elError = document.getElementById("error");
    elError.innerText = messages.join(', ') + "."
}