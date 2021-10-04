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
})()