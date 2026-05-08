# 🏥 Liyana Health Care Ltd

> **Your Trusted Partner in Healthcare Supply**  
> Reliable pharmaceutical wholesale distribution across Kenya.

![Liyana Health Care Ltd](https://img.shields.io/badge/Industry-Pharmaceutical%20Wholesale-blue?style=for-the-badge)
![Location](https://img.shields.io/badge/Location-Thika%2C%20Kenya-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)

---

## 📋 Table of Contents

- [About](#-about)
- [Pages](#-pages)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Contact](#-contact)

---

## 🏢 About

**Liyana Health Care Ltd** is a licensed pharmaceutical wholesale distributor based in **Thika, Kiambu County, Kenya**. This repository contains the official company website, built to:

- Showcase products and services to healthcare institutions
- Build trust with pharmacies, hospitals, clinics, and NGOs
- Generate wholesale inquiries and business leads
- Provide an easy way for clients to request quotes

> ⚕️ *Regulated by the Pharmacy and Poisons Board of Kenya (PPB)*

---

## 🌐 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, stats, product categories, testimonials |
| About | `/about` | Company story, mission, vision, values, team |
| Products | `/products` | Filterable product categories and catalog |
| Services | `/services` | Wholesale distribution and supply services |
| Why Us | `/why-us` | Key differentiators and competitive advantages |
| Quote | `/quote` | Request a wholesale quote form |
| Contact | `/contact` | Location, phone, email, contact form |
| FAQ | `/faq` | Common questions about ordering and delivery |

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Build tool & dev server |
| **TanStack Router** | File-based routing |
| **shadcn/ui** | UI component library |
| **Tailwind CSS** | Styling |
| **Cloudflare Workers** | Deployment target (via Wrangler) |

---

## 📁 Project Structure

```
liyana-healthcare-ltd/
├── src/
│   ├── assets/              # Images and static files
│   ├── components/
│   │   ├── site/            # Site-wide components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── PageHero.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   └── ui/              # shadcn/ui components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── routes/              # Page components (file-based routing)
│   │   ├── index.tsx        # Home page
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── faq.tsx
│   │   ├── products.tsx
│   │   ├── qoute.tsx
│   │   ├── services.tsx
│   │   └── why-us.tsx
│   ├── router.tsx           # Router configuration
│   ├── routeTree.gen.ts     # Auto-generated route tree
│   └── styles.css           # Global styles
├── .gitignore
├── .prettierrc
├── components.json          # shadcn/ui config
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
└── wrangler.jsonc           # Cloudflare Workers config
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/wisecrac/liyana-healthcare-ltd.git

# 2. Navigate into the project folder
cd liyana-healthcare-ltd

# 3. Install dependencies
npm install
# or if using bun:
bun install
```

### Run Locally

```bash
# Start the development server
npm run dev
# or
bun dev
```

Open your browser and go to **http://localhost:5173**

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |
| `npm run format` | Format code using Prettier |

---

## ☁️ Deployment

This project is configured for deployment on **Cloudflare Workers** via `wrangler.jsonc`.

### Deploy to Cloudflare

```bash
# Install Wrangler CLI
npm install -g wrangler

# Authenticate with Cloudflare
wrangler login

# Build and deploy
npm run build
wrangler deploy
```

### Deploy to Vercel (Alternative)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select the `liyana-healthcare-ltd` repository
4. Vercel auto-detects Vite — click **"Deploy"**
5. Your site will be live at `liyana-healthcare-ltd.vercel.app`

---

## 📞 Contact

**Liyana Health Care Ltd**  
📍 Along Thika-Nairobi Highway, Thika Town, Kiambu County, Kenya  
📞 +254 700 000 000  
📧 info@liyanahealthcare.co.ke  
🕐 Mon–Fri: 8:00 AM – 6:00 PM | Sat: 9:00 AM – 2:00 PM  

---

## ⚖️ Legal

This is a private commercial website. All content, branding, and business information belongs to **Liyana Health Care Ltd**.  
Regulated by the **Pharmacy and Poisons Board of Kenya (PPB)**.

© 2025 Liyana Health Care Ltd. All Rights Reserved.