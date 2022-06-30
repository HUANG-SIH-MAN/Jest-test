const axios = require("axios")

const add = function (a, b) {
  return a + b
}

const addNumber =	function (a, b) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) {
      reject("type error")
    }
    resolve(a + b)
  })
}

describe("mock function", () => {
  it("mock function", () => {
    // 沒有被 mock 
    expect(add(1, 1)).toBe(2)

    const mockFunction = jest.fn(add)
    // 指定 add 函式第一次呼叫的回傳值一定是 10
    mockFunction.mockReturnValueOnce(10)

    expect(mockFunction(1, 1)).toBe(10)
    expect(mockFunction(1, 1)).toBe(2)

    // 指定 add 函式回傳值永遠一定是 100
    mockFunction.mockReturnValue(100)
    expect(mockFunction(1, 1)).toBe(100)
  })



})