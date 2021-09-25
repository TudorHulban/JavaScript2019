export function ValidateName(fieldName, name) {
    if (name === undefined) {
        return "Name is undefined for " + fieldName
    }

    if (name.length == 0) {
        return "Please enter name for " + fieldName
    }

    console.log(name);
    return ""
}