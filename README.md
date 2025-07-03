# IT 服務公司網站模板

這是一個基於 Vue 3 和 Vite 構建的 IT 服務公司網站模板，採用 Element Plus UI 框架，並整合了 GSAP 動畫庫、Swiper 輪播組件和 ScrollTrigger 滾動觸發器，為提供動態的互動體驗。

## 🎨 設計參考

- **模板網址**: [Template Monster Demo](https://demo.templatemonster.com/demo/450607.html?_gl=1*iyiwq4*_gcl_aw*R0NMLjE3NTAwNTc5NjYuQ2p3S0NBandnYl9DQmhCTUVpd0EwcDNvT1BKWjBwZlhsQl9ib0dFV3FXN2I3Z25KXzEzd0cwZy1LbGZCbE1Vd0pMVFF1YUtqNHpOMWVob0NyOU1RQXZEX0J3RQ..*_gcl_au*OTg4OTI5MTE5LjE3NTAwNTU3NTU.*_ga*MTA0MzEyNzY4OC4xNzUwMDU1NzUx*_ga_FTPYEGT5LY*czE3NTAwNTc5MTYkbzIkZzEkdDE3NTAwNTg2MzUkajU5JGwwJGgw)
- **設計參考**: [Nexus UI Paradox](https://nexus.uiparadox.com/)

## 🛠️ 技術棧

- **前端框架**: Vue 3 (Composition API)
- **構建工具**: Vite
- **UI 組件庫**: Element Plus
- **動畫庫**: GSAP (GreenSock Animation Platform)
- **輪播組件**: Swiper.js
- **滾動觸發**: ScrollTrigger
- **路由管理**: Vue Router
- **樣式**: CSS3

## ✨ 主要功能

- 🎨 **現代化 UI**: 基於 Element Plus 的美觀界面
- 🎭 **流暢動畫**: GSAP 驅動的頁面動畫效果
- 📱 **觸控友好**: Swiper 輪播組件支援觸控操作
- 📜 **滾動觸發**: ScrollTrigger 實現滾動觸發動畫
- ⚡ **快速載入**: Vite 提供極速的開發和構建體驗

## 📁 專案結構

```
src/
├── components/          # Vue 組件
│   ├── AboutSection.vue
│   ├── BlogSection.vue
│   ├── BottomSection.vue
│   ├── ContactSection.vue
│   ├── FeedbackSection.vue
│   ├── FooterSection.vue
│   ├── HeroSection.vue
│   ├── NavSection.vue
│   ├── PortfolioSection.vue
│   ├── ProcessSection.vue
│   └── ServiceSection.vue
├── views/              # 頁面視圖
├── router/             # 路由配置
├── styles/             # 樣式文件
├── utils/              # 工具函數
└── main.js             # 應用入口
```

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

啟動後訪問 `http://localhost:5173` 查看效果

### 生產構建

```bash
npm run build
```

### 代碼檢查

```bash
npm run lint
```

## 🎨 自定義配置

### Vite 配置

詳見 [Vite 配置參考](https://vite.dev/config/)

### 樣式自定義

- 全局樣式: `src/styles/global.css`
- 變數定義: `src/styles/variables.css`
- 響應式設計: `src/styles/rwd.css`
- Element Plus 覆蓋: `src/styles/el-override.css`

### 動畫配置

動畫相關配置位於 `src/utils/animations.js`
