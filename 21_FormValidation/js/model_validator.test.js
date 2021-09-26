const model_validator = require("./model_validator")
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
