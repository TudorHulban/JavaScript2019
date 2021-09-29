const rewire = require("rewire")
const model_validator = rewire("./model_validator")
const commonValidations = model_validator.__get__("commonValidations")
// @ponicode
describe("model_validator.ValidateName", () => {
    test("0", () => {
        let result = model_validator.ValidateName("fName", "GEORGE")
        expect(result).toBe("")
    })

    test("1", () => {
        let result = model_validator.ValidateName("fName", "george")
        expect(result).toBe("No capitalization for fName.")
    })
})


// @ponicode
describe("model_validator.ValidateEmail", () => {
    test("0", () => {
        let result = model_validator.ValidateEmail("Email", undefined)
        expect(result).toBe("Value is undefined for Email.")
    })

    test("1", () => {
        let result = model_validator.ValidateEmail("Email", "x@")
        expect(result).toBe("Value is not valid for Email.")
    })
})

// @ponicode
describe("commonValidations", () => {
    test("0", () => {
        let result = commonValidations("fName", "John")
        expect(result).toBe("")
    })

    test("1", () => {
        let result = commonValidations("fName", undefined)
        expect(result).toBe("Value is undefined for fName.")
    })

    test("2", () => {
        let result = commonValidations("fName", "")
        expect(result).toBe("Please enter value for fName.")
    })

    test("3", () => {
        let result = commonValidations("fName", "a a")
        expect(result).toBe("Input has spaces in fName.")
    })
})
