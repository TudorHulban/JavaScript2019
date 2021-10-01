export function SendFormData(form, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();

        xhr.open("POST", url)

        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
                return
            }
            
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };

        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };

        const formData = new FormData(form);
        xhr.send(formData)
    });
}