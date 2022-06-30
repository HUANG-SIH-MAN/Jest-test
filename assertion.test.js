describe("Jest 斷言庫測試", () => {

  test("判斷相等", () => {
    expect(1 + 1).toBe(2)

    // 檢查資料型別（data type）的話，官方建議使用 toEqual() 來判斷
    //（因為在 JavaScript 中物件會有記憶體存取位置不同而出錯）
    const person = {name: 'shawn', age: 25}
    expect(person).toEqual({name: 'shawn', age: 25}) // 成功
    expect(person).toBe({name: 'shawn', age: 25})  // 失敗
  });

  test("Truthiness 判斷值是否存在或真假", () => {
    expect(null).toBeNull
    expect(undefined).toBeUndefined
    expect(123).toBeDefined
    expect(true).toBeTruthy
    expect(false).toBeFalsy
  })

  test("Number 判斷數值大小", () => {
    expect(2).toBeGreaterThan(1)  //大於
    expect(1).toBeGreaterThanOrEqual(1)  //大於等於
    expect(1).toBeLessThan(2)  //小於
    expect(1).toBeLessThanOrEqual(2)  //小於等於

    // 浮點數判斷
    const value = 0.1 + 0.2;
    expect(value).toBe(0.3)       // 失敗
    expect(value).toBeCloseTo(0.3) // 成功
  })

  test("正規表達式", () => {
    expect('test').not.toMatch(/text/)
    expect('gres@gmail.com').toMatch(
      /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    );
  })

  test("array 是否含某個值", () => {
    let favoFruits = ['orange', 'banana', 'strawberry']
    expect(favoFruits).toContain('orange')
  })

  test("例外處理", () => {
    function throwErrorMsg (Msg) {
      throw new Error(Msg)
    }
    expect(throwErrorMsg('Error: Account data is missing.')).toThrow()
    expect(throwErrorMsg('Error: Account data is missing.')).toThrow(Error)
    expect(throwErrorMsg('Error: Account data is missing.')).toThrow('Error: Account data is missing.')
    expect(throwErrorMsg('Error: Account data is missing.')).toThrow(/missing/)
  })
});


