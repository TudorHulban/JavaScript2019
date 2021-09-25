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

    if (name[0] !== name[0].toUpperCase()) {
        return "Please capitalize " + fieldName
    };

    return ""
}