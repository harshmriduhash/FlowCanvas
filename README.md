<div align="center">

<br/>

```
███████╗██╗      ██████╗ ██╗    ██╗ ██████╗ █████╗ ███╗   ██╗██╗   ██╗ █████╗ ███████╗
██╔════╝██║     ██╔═══██╗██║    ██║██╔════╝██╔══██╗████╗  ██║██║   ██║██╔══██╗██╔════╝
█████╗  ██║     ██║   ██║██║ █╗ ██║██║     ███████║██╔██╗ ██║██║   ██║███████║███████╗
██╔══╝  ██║     ██║   ██║██║███╗██║██║     ██╔══██║██║╚██╗██║╚██╗ ██╔╝██╔══██║╚════██║
██║     ███████╗╚██████╔╝╚███╔███╔╝╚██████╗██║  ██║██║ ╚████║ ╚████╔╝ ██║  ██║███████║
╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝
```

### **The Intercom for Product-Led Growth**
#### Build interactive user onboarding flows — without a single line of code.

<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=for-the-badge)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

<br/>

> *"From first sign-up to 'aha moment' — in minutes, not months."*

<br/>

[**🚀 Live Demo**](#) · [**📖 Docs**](#) · [**💬 Discord**](#) · [**🐛 Report Bug**](#)

<br/>
<br/>

</div>

---

## 🧠 What Is FlowCanvas? *(Plain English)*

Imagine you just downloaded a new app. Within seconds, a friendly popup appears — it says *"Welcome! Let me show you around."* It guides you step-by-step, highlights buttons, asks for your opinion, and helps you achieve your first success before you get lost.

**That guided experience is called an onboarding flow.**

Building those flows used to require:
- A dedicated product manager writing specs
- A frontend engineer spending weeks coding it
- A backend engineer wiring up tracking events
- A data analyst to measure if it even worked

**FlowCanvas eliminates all of that.**

With FlowCanvas, any founder, product manager, or marketer can:
1. **Design** guided tours visually — like building a slide deck
2. **Publish** them to any website with one line of code
3. **Measure** exactly where users drop off and why
4. **Iterate** in real-time without redeployment

<br/>

---

## 💸 The Problem We're Solving — and the Money We're Saving

<br/>

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                     │
│    THE ONBOARDING TAX                                                               │
│                                                                                     │
│    Every SaaS company pays it. Most don't even notice.                              │
│                                                                                     │
│    ❌  40-60% of free trial users never return after Day 1                          │
│    ❌  Median cost to build an onboarding flow in-house: $25,000+                  │
│    ❌  Median time to ship: 6-12 weeks of engineering time                          │
│    ❌  Every code change requires a new deployment cycle                             │
│    ❌  Zero visibility into where users actually get stuck                           │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                     │
│    THE FLOWCANVAS SOLUTION                                                          │
│                                                                                     │
│    ✅  First flow live in under 30 minutes — no engineering required                │
│    ✅  Reduce Day-1 churn by up to 47% (industry avg for guided onboarding)        │
│    ✅  Save $20,000–$50,000 per year vs. custom-built solutions                    │
│    ✅  Real-time A/B testing to find the highest-converting copy & layout           │
│    ✅  Funnel analytics to pinpoint exactly where users abandon                     │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

<br/>

---

## ✨ Core Features

<br/>

| Feature | What it does | Who it's for |
|---|---|---|
| 🎨 **Visual Flow Editor** | Drag-and-drop canvas to place tooltips, modals, hotspots & NPS surveys directly on your product UI | Product Managers |
| 🧩 **One-Line Embed** | A single `<script>` tag activates FlowCanvas on any website — React, Vue, plain HTML | Developers |
| 🎯 **Smart Targeting** | Show flows only to the right users based on plan, role, session count or any custom trait | Growth Teams |
| 📊 **Funnel Analytics** | See step-by-step drop-off, completion rates, and time-on-step with beautiful charts | Data Analysts |
| 🔬 **A/B Testing** | Split-test two flow variants and get statistical confidence on which one converts better | Marketers |
| 🌿 **Conditional Branching** | Branch flows based on user properties — show `Pro Tour` for paid users, `Basic Tour` for free | Product Engineers |
| 🎨 **Theme System** | Match your brand colors, fonts, and border radius — no CSS knowledge needed | Designers |
| ⌘K **Command Palette** | Instant keyboard navigation across the entire platform | Power Users |
| 🔔 **Snippet Heartbeat** | Live monitoring to alert you if your embed is not receiving data from your production site | DevOps / Founders |

<br/>

---

## 🏗️ System Architecture

<br/>

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                           FLOWCANVAS PLATFORM ARCHITECTURE                        │
└──────────────────────────────────────────────────────────────────────────────────┘

                              ┌─────────────────┐
                              │   Your Website   │
                              │  (Customer App)  │
                              └────────┬─────────┘
                                       │
                        ┌──────────────▼──────────────┐
                        │      EMBED LAYER (SDK)       │
                        │  loader.ts  (1.2kb, async)   │
                        │                              │
                        │  • Identifies visitor        │
                        │  • Fetches targeting rules   │
                        │  • Renders flow steps        │
                        │  • Tracks events             │
                        └──────────────┬──────────────┘
                                       │ REST API
                        ┌──────────────▼──────────────┐
                        │         NEXT.JS API          │
                        │         (Edge Runtime)       │
                        │                              │
                        │  /api/embed/config   →  Targeting evaluation     │
                        │  /api/embed/events   →  Event ingestion + identify│
                        │  /api/auth/otp       →  Passwordless auth        │
                        │  /api/flows/*        →  CRUD for flows & steps   │
                        └──────────────┬──────────────┘
                                       │
             ┌─────────────────────────┼──────────────────────────┐
             │                         │                          │
┌────────────▼────────┐   ┌────────────▼────────┐   ┌────────────▼────────┐
│   PRISMA ORM LAYER  │   │    AI COPILOT        │   │   EMAIL SERVICE     │
│                     │   │   (Anthropic Claude) │   │   (Resend)          │
│  PostgreSQL (prod)  │   │                      │   │                     │
│  SQLite   (local)   │   │  • Copy suggestions  │   │  • OTP delivery     │
│                     │   │  • Growth insights   │   │  • Invite emails    │
│  Models:            │   │  • A/B recommendations│   │                     │
│  User, Project,     │   └─────────────────────-┘   └─────────────────────┘
│  Flow, FlowStep,    │
│  FlowSession,       │
│  StepEvent, etc.    │
└─────────────────────┘
```

<br/>

---

## 🔄 Data Flow Diagram

<br/>

```
USER VISITS YOUR WEBSITE
          │
          ▼
FlowCanvas SDK loads (async, non-blocking)
          │
          ├─── Reads: fc_visitor_id cookie (or creates one)
          │
          ├─── Reads: fc_test_flow_id (developer bypass param)
          │
          ▼
POST /api/embed/config  {projectKey, visitorId, userTraits}
          │
          ▼
  ┌───────────────────────────────────┐
  │     TARGETING ENGINE              │
  │                                   │
  │  Is flow active (published)?  YES │───► Return flow steps
  │  Does user match rules?       YES │
  │  Has user seen this flow?      NO │
  └───────────────────────────────────┘
          │
          ▼
SDK renders Step 1 (Tooltip / Modal / Hotspot)
          │
          ▼
User interacts (next / skip / dismiss)
          │
          ▼
POST /api/embed/events { sessionId, stepId, eventType }
          │
          ▼
StepEvent written to DB  ──────────────────────────────►  Analytics Dashboard
                                                          (Funnel, Completion Rate,
                                                           Drop-off per Step)
```

<br/>

---

## 📐 High-Level Design (HLD)

<br/>

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│    CLIENT    │     │   EDGE API   │     │   DATABASE   │     │  AI SERVICE  │
│              │     │              │     │              │     │              │
│  Next.js 16  │────►│  API Routes  │────►│  Prisma ORM  │     │   Claude     │
│  React 19    │     │  Auth (OTP)  │     │  PostgreSQL  │     │  Anthropic   │
│  Tailwind v4 │     │  Embed SDK   │◄────│  SQLite(dev) │◄───►│  API         │
│  Zustand     │◄────│  Analytics   │     │              │     │              │
│  Recharts    │     │  RBAC Guard  │     │  15 Models   │     │  Insights,   │
│              │     │              │     │  Audit Logs  │     │  Copy Gen    │
└──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
```

<br/>

---

## 🔩 Low-Level Design (LLD) — Core Modules

<br/>

### 1. Authentication Module
```
Email Input ──► POST /api/auth/otp/request
                   │
                   ├── Generate 6-digit code
                   ├── Hash with bcrypt (10 rounds)
                   ├── Store OtpCode {email, hash, expiresAt: +10min}
                   └── Send via Resend (prod) / console.log (dev)

OTP Entry  ──► POST /api/auth/otp/verify
                   │
                   ├── Lookup latest unused OtpCode for email
                   ├── bcrypt.compare(input, hash)
                   ├── Mark consumedAt = now()
                   ├── Upsert User record
                   └── Issue JWT session token (HttpOnly cookie)
```

### 2. Flow Execution & Rendering
```
FlowStep {
  stepOrder    // Sequence position
  stepType     // 'tooltip' | 'modal' | 'hotspot' | 'nps'
  content      // JSON: target selector, title, body, CTA
  branchConds  // JSON: [{property, operator, value, nextStepId}]
}

SDK renders based on stepType:
  tooltip  → Anchored to a DOM element, 12 positions
  modal    → Fullscreen overlay with backdrop
  hotspot  → Pulsing dot on element, click to reveal
  nps      → 1–10 score grid, captures sentiment
```

### 3. RBAC (Role-Based Access Control)
```
Roles:  owner > admin > editor > member

enforceRole(userId, projectId, minRole)
  │
  ├── Query Membership table
  ├── Compare role hierarchy
  └── 403 Forbidden if insufficient
```

<br/>

---

## 🛠️ Tech Stack

<br/>

```
FRONTEND                    BACKEND                     INFRASTRUCTURE
────────────────────        ────────────────────        ────────────────────
Next.js 16 (Turbopack)      Next.js API Routes          Vercel (Edge Deploy)
React 19                    Prisma ORM v5               PostgreSQL (Neon)
TypeScript 5                bcryptjs (auth)             SQLite (local dev)
Tailwind CSS v4             jsonwebtoken                Resend (email)
Framer Motion               Anthropic SDK               Turbopack (HMR)
Recharts                    Zod (validation)
Zustand (state)
Fabric.js (canvas)
cmdk (command palette)
sonner (toast)
```

<br/>

---

## 🗄️ Database Schema Overview

<br/>

```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│    User     │──┐    │   Project   │──┐    │    Flow     │
│─────────────│  │    │─────────────│  │    │─────────────│
│ id          │  │    │ id          │  │    │ id          │
│ email       │  └───►│ createdBy   │  └───►│ projectId   │
│ name        │       │ name        │       │ name        │
│ authProvider│       │ slug        │       │ status      │
└─────────────┘       │ projectKey  │       │ targetingRules│
                      │ appUrl      │       └──────┬──────┘
┌─────────────┐       └─────────────┘              │
│ Membership  │                             ┌──────▼──────┐
│─────────────│       ┌─────────────┐       │  FlowStep   │
│ userId      │       │  AbTest     │       │─────────────│
│ projectId   │       │─────────────│       │ flowId      │
│ role        │       │ variantAFlow│       │ stepOrder   │
└─────────────┘       │ variantBFlow│       │ stepType    │
                      │ trafficSplit│       │ content     │
┌─────────────┐       └─────────────┘       └──────┬──────┘
│ FlowSession │                                     │
│─────────────│       ┌─────────────┐       ┌──────▼──────┐
│ flowId      │──────►│  StepEvent  │◄──────│ (FK)        │
│ visitorId   │       │─────────────│       └─────────────┘
│ startedAt   │       │ eventType   │
│ completedAt │       │ occurredAt  │
└─────────────┘       └─────────────┘
```

<br/>

---

## ⚡ Getting Started in 3 Minutes

<br/>

### Prerequisites
- Node.js 18+
- npm 9+

### Clone & Install

```bash
git clone https://github.com/harshmriduhash/flowcanvas.git
cd flowcanvas
npm install
```

### Run Locally (Zero Config)

```bash
# Generate the database and seed demo data
npx prisma generate --schema packages/db/prisma/schema.prisma
npx prisma db push     --schema packages/db/prisma/schema.prisma
node packages/db/seed-demo.js

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Demo Login (No Email Required)
```
Email:            test@flowcanvas.dev
Verification Code: 123456
```

<br/>

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
# Database (use file:./dev.db for local SQLite)
DATABASE_URL="postgresql://user:password@host:5432/flowcanvas"

# Auth
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# Email (optional for local dev)
RESEND_API_KEY="re_..."

# AI Copilot (optional)
ANTHROPIC_API_KEY="sk-ant-..."
```

<br/>

---

## 📂 Project Structure

```
flowcanvas/
├── apps/
│   ├── web/                    # Main Next.js application
│   │   └── src/
│   │       ├── app/            # Next.js App Router pages
│   │       │   ├── api/        # Backend API routes
│   │       │   ├── dashboard/  # Main dashboard
│   │       │   ├── flows/      # Flow management
│   │       │   ├── themes/     # Theme customization
│   │       │   ├── settings/   # Project settings
│   │       │   └── ab-tests/   # A/B testing
│   │       ├── components/     # Reusable UI components
│   │       └── lib/            # Utilities, RBAC, helpers
│   └── embed/
│       └── src/loader.ts       # Lightweight SDK (async embed)
│
└── packages/
    └── db/
        ├── prisma/schema.prisma # Database schema (15 models)
        └── index.ts             # Prisma client singleton
```

<br/>

---

## 🚀 Production Deployment

### Deploy to Vercel (Recommended)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Link your project
vercel link

# 3. Set environment variables
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add RESEND_API_KEY

# 4. Deploy
vercel --prod
```

### Embed on Any Website

Once deployed, add this single line to your product's `<head>`:

```html
<script
  src="https://cdn.flowcanvas.dev/loader.js"
  data-project-key="YOUR_PROJECT_KEY"
  async
></script>
```

**That's it.** Your onboarding flows are now live.

### Advanced: Identify Users

```javascript
// Call this after your user logs in
window.FlowCanvas.identify({
  userId: "user_123",
  plan: "pro",
  role: "admin",
  signupDate: "2024-01-15"
});
```

### Developer Testing Bypass

```
https://yourapp.com?fc_test_flow_id=YOUR_FLOW_ID
```

This forces a specific flow to render regardless of targeting rules — perfect for QA.

<br/>

---

## 📊 How FlowCanvas Compares

<br/>

| Feature | FlowCanvas | Intercom | Appcues | Pendo |
|---|:---:|:---:|:---:|:---:|
| Visual Flow Builder | ✅ | ✅ | ✅ | ✅ |
| Self-hostable | ✅ | ❌ | ❌ | ❌ |
| Open Source | ✅ | ❌ | ❌ | ❌ |
| A/B Testing | ✅ | ❌ | ✅ | ✅ |
| Conditional Branching | ✅ | ❌ | ✅ | ✅ |
| AI Copy Assistant | ✅ | ❌ | ❌ | ❌ |
| Funnel Analytics | ✅ | ✅ | ✅ | ✅ |
| Embed Size | **1.2kb** | 80kb+ | 60kb+ | 100kb+ |
| Starting Price | **Free / OSS** | $74/mo | $249/mo | $7,000/yr |

<br/>

---

## 🗺️ Roadmap

<br/>

```
Q3 2025                    Q4 2025                    Q1 2026
─────────────────────      ─────────────────────      ─────────────────────
✅ Visual Flow Editor       🔄 Video Step Support       📋 Team Workspaces
✅ Embed SDK (1.2kb)        🔄 Mobile SDK (iOS/Android) 📋 Zapier / Webhooks
✅ A/B Testing              🔄 Segment Integration      📋 Custom Analytics API
✅ AI Copilot               🔄 Salesforce Sync          📋 White-label Mode
✅ NPS Surveys              🔄 HubSpot Integration      📋 SOC2 Certification
✅ Funnel Analytics         🔄 GDPR Compliance Mode     📋 Enterprise SSO (SAML)
```

<br/>

---

## 🤝 Contributing

We welcome contributors of all backgrounds and skill levels!

```bash
# Fork the repo, then:
git checkout -b feature/your-amazing-feature
git commit -m "feat: add amazing feature"
git push origin feature/your-amazing-feature
# Open a Pull Request
```

Read our [Contributing Guide](CONTRIBUTING.md) before submitting.

<br/>

---

## 📜 License

FlowCanvas is released under the **MIT License**. See [LICENSE](LICENSE) for details.

You're free to use, modify, and distribute — even commercially.

<br/>

---

<div align="center">

## Built with ❤️ for Product Teams Who Move Fast

*Stop losing users on Day 1. Start building experiences that stick.*

<br/>

**[⭐ Star us on GitHub](https://github.com/your-org/flowcanvas)** · **[🐦 Follow on Twitter](https://twitter.com/flowcanvas)** · **[💬 Join Discord](https://discord.gg/flowcanvas)**

<br/>

---

*© 2025 FlowCanvas, Inc. · San Francisco, CA · Made with Next.js, Prisma & 🫶*

</div>
