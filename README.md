# 臺大智慧感測器聯盟 網站

本網站為「臺大智慧感測器聯盟」官方網站，使用 React + TypeScript + Material-UI 開發，建構工具為 Vite。

[Check out the DEMO](https://youtu.be/PFT0sg4XVTY)

---

## 專案啟動指南

### 1. 下載專案
```bash
git clone https://github.com/gyeozai/ntu-sensor-alliance.git
cd ntu-sensor-alliance
```

### 2. 安裝依賴套件
```bash
npm install
```

### 3. 啟動開發伺服器
```bash
npm run dev
```

### 4. 開啟瀏覽器訪問
- 瀏覽網址：`http://localhost:5173`

### 5. 環境變數（可選）
- 若需自訂 API 路徑或部署子路徑，請在專案根目錄新增 `.env` 檔案：
```env
VITE_API_URL=http://localhost:3000
VITE_BASE_URL=/
```

---

## 內容更新指南

### 1. 有關的檔案及路徑

| 檔案/ 路徑 | 用途說明 |
|----------|----------|
| `src/data/intro.json` | `成立宗旨、核心技術、加入我們` 等段落内容<br>`聯盟服務、聯盟技術` 等表格内容<br>記錄 LOGO 路徑 |
| `src/data/news.json` | 新聞的 title、tags 等資訊<br>記錄内文檔案、圖片的路徑 |
| `src/data/members.json` | 記錄 `聯盟成員` 的基本資料<br>分爲 `學界成員` 與 `業界會員` |
| `public/markdowns/` | 儲存 `新聞內文` 的 Markdown 檔案 |
| `public/images/logo/` | 儲存 LOGO 的變形版本 |
| `public/images/members/academic/` | 儲存 `學界成員` 頭像 |
| `public/images/members/industry/` | 儲存 `業界會員` 頭像 |
| `public/images/news/` | 儲存 `新聞圖片` 檔案 |

### 2. 更新新聞
1. 在 `public/markdowns/` 目錄下新增 Markdown 檔案
2. 在 `public/images/news/` 目錄下新增圖片
3. 在 `src/data/news.json` 中新增對應的新聞資料：
```json
{
  "id": 1,
  "title": "xxx",
  "date": "xxx",
  "tags": ["xxx", "xxx"],           // 至少一個標籤
  "markdownFile": "xxx.md",
  "image1": "/images/news/xxx.jpg", // 可以選擇不放照片
  "image2": "/images/news/xxx.jpg"
}
```
4. `最新消息` 頁面將根據 **id倒序** 呈現新聞列表

### 3. 更新成員資料
可以根據下列方式更新或新增成員資料：
```json
{
  "academic": [ // 學界成員
    {
      "id": 1,
      "name": "xxx",
      "title": "xxx",
      "department": "xxx",
      "research": "xxx",
      "website": "xxx",
      "image": "/images/members/academic/xxx.jpg"
    }
  ],
  "industry": [ // 業界會員
    {
      "id": 1,
      "name": "xxx",
      "image": "/images/members/industry/xxx.png"
    }
  ]
}
```