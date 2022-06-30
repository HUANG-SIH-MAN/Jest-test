let time = 1
describe("一個獨立的測試群", () => {
  beforeAll(()=> {
    console.log(`beforeAll，第${time}次coonsole`)
    time++
  })
  beforeEach(()=> {
    console.log(`beforeEach，第${time}次coonsole`)
    time++
  })
  afterAll(()=> {
    console.log(`afterAll，第${time}次coonsole`)
    time++
  })
  afterEach(()=> {
    console.log(`afterEach，第${time}次coonsole`)
    time++
  })

  test("測試 1", () => {
    console.log(`在測試1裡面，第${time}次coonsole`)
    time++
  })

  test("測試 2", () => {
    console.log(`在測試2裡面，第${time}次coonsole`)
    time++
  })
})

