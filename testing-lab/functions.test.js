const { returnTwo, greeting, add } = require("../functions")

//Test for returnTwo
test("returns two", () => {
    expect(returnTwo()).toEqual(2)
})

//Test for greeting
describe("greeting", () => {
    test("returns greeting to James", () => {
        expect(greeting("James").toBe("Hello, James")
    }
    test("returns greeting to Jill", () => {
        expect(greeting("Jill").toBe("Hello, Jill"))
    })
})


//Test for add
describe("add", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(add(1, 2)).toEqual(3)
    })
    test("adds 5 + 9 to equal 14", () => {
        expect(add(5, 9)).toEqual(14)
    })
})