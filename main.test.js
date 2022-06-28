const changeIntegerToRoman = require("./main")

describe("測試 正整數轉換成羅馬數字", () => {

  test("1 to I", () => {
    const result = changeIntegerToRoman(1)
    expect(result).toBe("I");
  });

  test("256 to CCLXV", () => {
    const result = changeIntegerToRoman(265)
    expect(result).toBe("CCLXV");
  });

});