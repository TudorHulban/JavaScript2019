export function ValidateName(fieldName, name) {
    if (name === undefined) {
        return "Name is undefined for " + fieldName
    }

    if (name.length == 0) {
        return "Please enter name for " + fieldName
    }

    if (name.length == 1) {
        return "Name too short for " + fieldName
    }

    if (!name.startsWith(name[0].toUpperCase())) {
        return "Please capitalize " + fieldName
    };

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
