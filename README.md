# Dr Jon Tutorial Website

個人網站，用 Next.js + React + Tailwind 構建，glassmorphism 設計風格。

## 功能

- 專業 Hero Section
- 響應式設計 (手機/平板/電腦)
- Framer Motion 動畫
- WhatsApp / Email 快速連絡

## 免費部署到 Vercel (3 步)

### 1️⃣ 準備代碼

將所有文件上傳到 GitHub:
```bash
# 如果你有 GitHub 賬戶，用 GitHub Desktop 或 git 上傳
# 如果冇，跳到步驟 2，直接用 Vercel 上傳
```

### 2️⃣ 連接到 Vercel

1. 去 https://vercel.com
2. 按「Sign Up」(免費)
3. 用 GitHub / Google / Email 登入

### 3️⃣ Deploy 項目

**方法 A - 用 GitHub (推薦)**
1. 將代碼推到 GitHub
2. 在 Vercel 選 「Import Project」
3. 選擇你的 GitHub repo
4. 按「Deploy」 — 完成！

**方法 B - 用 Vercel CLI (快速)**
```bash
npm i -g vercel
cd vercel-project
vercel
```
跟著指示做，會自動 deploy。

## 自訂

編輯 `components/Hero.tsx` 改文案：
- 標題：「Expert A-Level & GCSE Tuition」
- 副標：改成你想講嘅野
- WhatsApp 號碼：改你自己個號

編輯 `components/Navbar.tsx` 改導航菜單。

## 費用

完全免費。Vercel 免費版：
- 100GB 月頻寬（足夠用）
- 無時間限制
- 無隱藏費用

## 域名

想用 `yourname.com`？
- 可以自己買域名（Namecheap, GoDaddy £1-10/年）
- 連接到 Vercel（免費，5 分鐘）

有問題就聯繫我。
