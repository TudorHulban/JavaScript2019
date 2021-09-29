const Messages = Object({
    nameUndefined: "Name is undefined for ",
    nameNull: "Please enter name for ",
    nameShort: "Name too short for ",
    nameCapitalize: "Please capitalize ",
    nameSpecialChar: "Please do not include special characters for ",
    nameNumber: "Please do not include numbers in ",
    nameHasSpaces: "Please do not include spaces in ",
});

var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var numberChar = "0123456789";

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

    let hasSpaces = name.split(" ")
    if (hasSpaces.length > 1) {
        return Messages.nameHasSpaces.concat(fieldName, ".")
    }

    let hasSpecial = containsChar(name, specialChars)
    if (hasSpecial.contains) {
        return Messages.nameSpecialChar.concat(fieldName, " (" + hasSpecial.value + ")", ".")
    }

    let hasNumbers = containsChar(name, numberChar)
    if (hasNumbers.contains) {
        return Messages.nameNumber.concat(fieldName, " (" + hasNumbers.value + ")", ".")
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

function containsChar(toCheck, inChars) {
    for (let i = 0; i < inChars.length; i++) {
        if (toCheck.indexOf(inChars[i]) > -1) {
            return {
                contains: true,
                value: inChars[i],
            }
        }
    }

    return { contains: false };
}
