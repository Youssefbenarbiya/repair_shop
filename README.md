# Repair Shop App Project Setup

This project consists of a React-based NextJS app (FullStack). Additionally, it utilizes a PostgreSQL database in Neon (IaaS - https://console.neon.tech/). Follow the steps below to set up the project.

## Prerequisites

- Git
- Node.js
- npm
- PostgreSQL
- Drizzle ORM (https://orm.drizzle.team/docs/zod) (`npm i drizzle-orm @neondatabase/serverless dotenv`) (`npm i -D drizzle-kit tsx`)
- React Hook Form
- ShadCN
- Tailwind CSS
- Lucide React
- Zod
- Kinde (for authentication and authotization)
- TanStack Table (https://tanstack.com/table/latest)


Additionally, you must to configure these variables in .env.local to run the project:

* KINDE_CLIENT_ID
* KINDE_CLIENT_SECRET
* KINDE_ISSUER_URL
* KINDE_SITE_URL
* KINDE_POST_LOGOUT_REDIRECT_URL
* KINDE_POST_LOGIN_REDIRECT_URL
* DATABASE_URL
* KINDE_DOMAIN
* KINDE_MANAGEMENT_CLIENT_ID
* KINDE_MANAGEMENT_CLIENT_SECRET


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
