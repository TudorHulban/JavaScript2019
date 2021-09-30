const Messages = Object({
    isUndefined: "Value is undefined for ",
    isNull: "Please enter value for ",
    tooShort: "Value too short for ",
    noCapitalize: "No capitalization for ",
    hasSpecialChar: "Value has special characters for ",
    noSpecialChar: "Value has no special characters for ",
    hasNumber: "Input has numbers in ",
    noNumber: "Input has no numbers in ",
    hasSpace: "Input has spaces in ",
    noMonkeyTail: "Value missing @ in ",
    notValid: "Value is not valid for ",
});

var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var numberChar = "0123456789";

function commonValidations(fieldName, string) {
    if (string === undefined) {
        return Messages.isUndefined.concat(fieldName, ".")
    }

    if (string.length == 0) {
        return Messages.isNull.concat(fieldName, ".")
    }

    const hasSpaces = string.split(" ")
    if (hasSpaces.length > 1) {
        return Messages.hasSpace.concat(fieldName, ".")
    }

    return ""
}

export function ValidateName(fieldName, name) {
    const commonValids = commonValidations(fieldName, name);
    if (commonValids.length > 0) {
        return commonValids
    }

    if (name.length == 1) {
        return Messages.tooShort.concat(fieldName, ".")
    }

    if (name[0] != name[0].toUpperCase()) {
        return Messages.noCapitalize.concat(fieldName, ".")
    }

    const hasSpecial = containsChar(name, specialChars)
    if (hasSpecial.contains) {
        return Messages.hasSpecialChar.concat(fieldName, " (" + hasSpecial.value + ")", ".")
    }

    const hasNumbers = containsChar(name, numberChar)
    if (hasNumbers.contains) {
        return Messages.hasNumber.concat(fieldName, " (" + hasNumbers.value + ")", ".")
    }

    return ""
}

export function ValidateEmail(fieldName, name) {
    const commonValids = commonValidations(fieldName, name);
    if (commonValids.length > 0) {
        return commonValids
    }

    const hasMonkeyTail = containsChar(name, "@")
    if (!hasMonkeyTail.contains) {
        return Messages.noMonkeyTail.concat(fieldName, ".")
    }

    const hasDomain = containsChar(name, ".")
    if (!hasDomain.contains) {
        return Messages.notValid.concat(fieldName, ".")
    }

    const posMonkey = name.indexOf("@")
    const posDomain = name.indexOf(".")

    if (posDomain - posMonkey < 1) {
        return Messages.notValid.concat(fieldName, ".")
    }

    return ""
}

export function ValidatePassword(fieldName, string) {
    const commonValids = commonValidations(fieldName, string);
    if (commonValids.length > 0) {
        return commonValids
    }

    const minPassLength = 8;
    if (string.length < minPassLength) {
        return Messages.tooShort.concat(fieldName, " (minimum " + minPassLength + ")", ".")
    }

    const hasSpecial = containsChar(string, specialChars)
    if (!hasSpecial.contains) {
        return Messages.noSpecialChar.concat(fieldName, ".")
    }

    const hasNumbers = containsChar(string, numberChar)
    if (!hasNumbers.contains) {
        return Messages.noNumber.concat(fieldName, ".")
    }

    return ""
}

export function ULMessages(appendTo, messages) {
    RemoveChilds(appendTo)

    let list = document.createElement('ul');
    list.setAttribute("type", "none");
    list.setAttribute("style", "padding-left: 0px; color:rgb(74, 8, 90);");

    for (let i = 0; i < messages.length; i++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(messages[i]));

        list.appendChild(li)
    }

    appendTo.appendChild(list);
}

export function RemoveChilds(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

function containsChar(toCheck, inChars) {
    if (inChars.length == 1) {
        return {
            contains: toCheck.indexOf(inChars) != -1
        }
    }

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
