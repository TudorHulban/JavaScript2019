export function SendFormData(form, url) {
    const xhr = new XMLHttpRequest();
   

    xhr.addEventListener("load", function (ev) {
        console.log(ev.target.responseText)
    })

    xhr.addEventListener("error", function (ev) {
        console.log("error when loading")
    })

    xhr.open("POST", url)

    const formData = new FormData(form);
    xhr.send(formData)
}