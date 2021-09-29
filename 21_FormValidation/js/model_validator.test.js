const rewire = require("rewire")
const model_validator = rewire("./model_validator")
const commonValidations = model_validator.__get__("commonValidations")
const containsChar = model_validator.__get__("containsChar")
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

// @ponicode
describe("containsChar", () => {
    test("0", () => {
        let result = containsChar("@", "@")
        expect(result).toEqual({ contains: true })
    })

    test("1", () => {
        let result = containsChar("@@@@@@@@", "@")
        expect(result).toEqual({ contains: true })
    })

    test("2", () => {
        let result = containsChar("111", "0123456789")
        expect(result).toEqual({ contains: true, value: "1" })
    })
})
