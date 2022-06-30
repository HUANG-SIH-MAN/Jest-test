const addNumber =	function (a, b) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) {
      reject("type error")
    }
    resolve(a + b)
  })
}

describe("asychronous fuction", () => {
  it("async/await", async () => {
    let result = await addNumber("a", 1).catch(msg => msg)
    expect(result).toMatch("type error");

    await expect(addNumber(1, 1)).resolves.toBe(2);
    await expect(addNumber("a", 1)).rejects.toMatch("type error");
  })

  test('try/catch', async () => {
    try {
      await addNumber("a", 1)
    } catch (err) {
      expect(err).toMatch("type error");
    }
  });

  test('promise resolve', () => {
    return expect(addNumber(1, 1)).resolves.toBe(2);
  });

  test('promise rejects', () => {
    return expect(addNumber("a", 1)).rejects.toMatch("type error");
  });

  test("then", () => {
    return addNumber(1, 1).then(result => {
      expect(result).toBe(2);
    });
  })
})