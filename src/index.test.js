const index = require("./index")
// @ponicode
describe("index.default", () => {
    test("0", () => {
        let callFunction = () => {
            index.default(["reply_click()", "reply_click()", "reply_click()"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
