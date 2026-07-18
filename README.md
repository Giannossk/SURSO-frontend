<div align="center">

<br/>

```
███████╗██╗   ██╗██████╗ ███████╗ ██████╗
██╔════╝██║   ██║██╔══██╗██╔════╝██╔═══██╗
███████╗██║   ██║██████╔╝███████╗██║   ██║
╚════██║██║   ██║██╔══██╗╚════██║██║   ██║
███████║╚██████╔╝██║  ██║███████║╚██████╔╝
╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝
```

### Web Frontend — SURSO Event Management Platform

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Lightning-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Playwright](https://img.shields.io/badge/Playwright-E2E-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](LICENSE)

<br/>

</div>

## 🌟 Overview

This is the **React + Vite web client** for SURSO, an open-source event management platform. Customers can discover events, register with one click, download beautifully branded **QR-coded PDF tickets**, and post reviews. Organizers get a full dashboard to create and manage events, view participant lists, export CSVs, and perform **real-time check-ins** via Socket.IO — all in a responsive, dark-mode-ready UI.

SURSO is split across three repositories:

- [SURSO-backend](https://github.com/Giannossk/SURSO-backend) — Express + MongoDB REST API
- **[SURSO-frontend](https://github.com/Giannossk/SURSO-frontend)** — this repo
- [SURSO-mobile](https://github.com/Giannossk/SURSO-mobile) — Flutter mobile client

This app talks to [SURSO-backend](https://github.com/Giannossk/SURSO-backend) over HTTP + Socket.IO — you'll need it running locally (or deployed) to use most features.

<br/>

## 🛠 Tech Stack

| | Technology | Purpose |
|---|---|---|
| <img src="https://skillicons.dev/icons?i=react" width="30"/> | **React 19** | UI library |
| <img src="https://skillicons.dev/icons?i=vite" width="30"/> | **Vite** | Lightning-fast dev bundler |
| <img src="https://skillicons.dev/icons?i=tailwind" width="30"/> | **Tailwind CSS** | Utility-first styling |
| <img src="https://skillicons.dev/icons?i=react" width="30"/> | **React Router** | Client-side routing |
| <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white" height="24"/> | **Axios** | HTTP client |
| <img src="https://img.shields.io/badge/jsPDF-FF0000?style=flat&logoColor=white" height="24"/> | **jsPDF + html2canvas** | Branded PDF ticket generation |
| <img src="https://skillicons.dev/icons?i=playwright" width="30"/> | **Playwright** | End-to-end testing |

<br/>

## ✨ Key Features

<table>
<tr>
<td width="33%" valign="top">

### 👤 Customers
- 🔍 Browse & discover events
- 📝 Register for events instantly
- 🎫 Download branded **PDF tickets with QR codes**
- ⭐ Post event reviews & ratings
- 🌙 Full dark mode support

</td>
<td width="33%" valign="top">

### 🎪 Organizers
- ➕ Create & manage events
- 👥 View participant lists
- 📊 Export attendee data as **CSV**
- 📡 **Real-time QR check-in** via Socket.IO
- 📈 Live event statistics

</td>
<td width="33%" valign="top">

### 🔧 Admin
- ✅ Approve / reject event submissions
- 🏠 Homepage recommendations engine
- 📉 Platform-wide statistics
- 🔔 Toast notifications
- 📱 Fully responsive UI

</td>
</tr>
</table>

<br/>

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+**
- A running instance of [SURSO-backend](https://github.com/Giannossk/SURSO-backend) (local or deployed)

### 1. Clone & Install

```bash
git clone https://github.com/Giannossk/SURSO-frontend.git
cd SURSO-frontend
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and point `VITE_API_URL` at your running backend:

```bash
cp .env.example .env
```

### 3. Run Locally

```bash
npm run dev
# → App running at http://localhost:5173
```

<br/>

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start **Vite** dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

<br/>

## 🧪 Testing

This repo includes Playwright specs under `tests/` and `e2e/`. They exercise the full stack, so they need a running [SURSO-backend](https://github.com/Giannossk/SURSO-backend) (and this app) at the URLs configured via the `CLIENT_URL` / `API_URL` env vars:

```bash
npx playwright install --with-deps
npx playwright test
```

The CI workflow runs these against a live backend checked out from SURSO-backend — see `.github/workflows/ci.yml`.

<br/>

## 🌐 Deployment

This repo ships with a `Dockerfile`, `nginx.conf`, and `docker-compose.yml` for containerized deployment, plus a `vercel.json` for static hosting on Vercel. Either way:

1. Build with `npm run build` and serve the `dist/` directory via any static host (Vercel, Netlify, Nginx, CDN).
2. Set `VITE_API_URL` at build time to your deployed backend's URL.

<br/>

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.
