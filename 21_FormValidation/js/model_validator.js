const Messages = Object.freeze({
    nameUndefined: "Name is undefined for ",
    nameNull: "Please enter name for ",
    nameShort: "Name too short for ",
    nameCapitalize: "Please capitalize "
});

export function ValidateName(fieldName, name) {
    if (name === undefined) {
        return Messages.nameUndefined.concat(fieldName, ".")
    }

    if (name.length == 0) {
        return Messages.nameNull.concat(fieldName, ".")
    }

    if (name.length == 1) {
        return Messages.nameShort.concat(fieldName, ".")
    }

    if (name[0] != name[0].toUpperCase()) {
        return Messages.nameCapitalize.concat(fieldName, ".")
    }

    return ""
}

export function ULMessages(appendTo, messages) {
    removeChilds(appendTo)

    let ul = document.createElement('ul');
    ul.setAttribute("type", "none");
    ul.setAttribute("style", "padding-left: 0px; color:rgb(74, 8, 90);");

    for (let i = 0; i < messages.length; i++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(messages[i]));

        ul.appendChild(li)
    }

    appendTo.appendChild(ul);
}

function removeChilds(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};
