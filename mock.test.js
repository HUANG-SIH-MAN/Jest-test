const axios = require("axios")

class Users {
  static all() {
    return axios.get('/users.json').then(resp => resp.data);
  }
}

// 將整組的 axios 套件方法 mock (不能寫在test內，會出現錯誤)
jest.mock('axios');


const add = function (a, b) {
  return a + b
}

describe("mock function", () => {
  it("mock function set return value", () => {
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

  it("mock function get information", () => {
    const mockFunction = jest.fn(add)
    mockFunction(1, 2)
    mockFunction(2, 3)
    mockFunction(3, 4)
    expect(mockFunction.mock.calls.length).toBe(3); // 確認函式被呼叫的次數
    expect(mockFunction.mock.calls[0][0]).toBe(1); // 確認函式被呼叫時傳入的參數(第一次、第一個參數)
    expect(mockFunction.mock.calls[1][0]).toBe(2); // 確認函式被呼叫時傳入的參數(第二次、第一個參數)
    expect(mockFunction.mock.results[2].value).toBe(7); // 確認函式被呼叫時的回傳值(第三次呼叫)
    console.log("calls", mockFunction.mock.calls)  // mock.calls 會記錄傳入的參數
    console.log("results", mockFunction.mock.results) //mock.results 會記錄函式的回傳值
    console.log("invocationCallOrder", mockFunction.mock.invocationCallOrder) // 回傳記錄了函式呼叫次數的陣列，用陣列長度來計算呼叫次數
  })

  it("mock module", async () => {
    const res = { data: "goods" }

    // 為 axios 中的 get 模擬回傳值為 res
    axios.get.mockResolvedValue(res)
    await expect(axios.get('url/allGoods')).resolves.toEqual(res)
  })

  test('should fetch users，官方範例', () => {

    const users = [{name: 'Bob'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);
  
    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))
  
    return Users.all().then(data => expect(data).toEqual(users));
  });

})
