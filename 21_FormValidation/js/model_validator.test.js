const rewire = require("rewire")
const model_validator = rewire("./model_validator")
const comonValidations = model_validator.__get__("comonValidations")
// @ponicode
describe("model_validator.ValidateName", () => {
    test("0", () => {
        let result = model_validator.ValidateName("fName", "GEORGE")
        expect(result).toBe("")
    })

    test("1", () => {
        let result = model_validator.ValidateName("fName", "george")
        expect(result).toBe("Please capitalize fName.")
    })
})


// @ponicode
describe("comonValidations", () => {
    test("0", () => {
        let result = comonValidations("fName", "John")
        expect(result).toBe("")
    })

    test("1", () => {
        let result = comonValidations("fName", undefined)
        expect(result).toBe("Value is undefined for fName.")
    })

    test("2", () => {
        let result = comonValidations("fName", "")
        expect(result).toBe("Please enter value for fName.")
    })

    test("3", () => {
        let result = comonValidations("fName", "a a")
        expect(result).toBe("Input has spaces in fName.")
    })
})
