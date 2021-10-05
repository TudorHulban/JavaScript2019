import { GETData } from "./model_comms.js"

(function () {
    let storage = window.localStorage;

    const sessionID = storage.getItem("sessionID")
    if ((sessionID === undefined) || (sessionID == null)) {
        window.location = "http://localhost:3000"
    }

    const validTo = storage.getItem("validTo")
    console.log("now:", Date.now())
    console.log("valid To:", validTo)

    if (Date.now() >= Number(validTo)) {
        window.location = "http://localhost:3000"
    }

    console.log("session ID valid another:", Number(validTo) - Date.now(), " miliseconds.")

    if (Number(validTo) - Date.now() < (4 * 1000)) {
        renewSessionID(sessionID)
    }
})()

async function renewSessionID(sessionID) {
    let serverResp = await GETData("http://localhost:3000/renew/" + sessionID).catch((err) => {
        console.error("Error renew session ID: ", err);
    });

    if (serverResp === undefined) {
        return
    }

    console.log("server response:", serverResp)

    let response = JSON.parse(serverResp)

    // succesfull renew, stay on page
    let storage = window.localStorage;
    storage.setItem("sessionID", response.sessionid);
    storage.setItem("validTo", Date.now() + response.validity);
}