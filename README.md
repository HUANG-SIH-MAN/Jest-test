## Jest 測試檔

- 主要撰寫 Jest 測試檔是如何運作的
- 提供一個範例
- 使用`npm run all-test`指令可以一次跑全部測試檔
- 使用`npm run test`指令可以只跑單一個測試檔
  - 執行之前必須到 package.json 的 script 改寫要測試的檔案名稱

## 測試檔案類別

- main.test.js 引用其他檔案的函式，進行測試
- assertion.test.js 說明 Jest 斷言庫基本語法
- jest.test.js 說明測試檔案架構
- asynchronous.test.js 非同步測試檔撰寫範例
- mock.test.js 模擬替身
