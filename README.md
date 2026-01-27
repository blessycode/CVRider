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

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment & Database Setup

This project is set up for Vercel deployment with Prisma and Auth.js (NextAuth).

### Prerequisites

1.  **Database**: Create a PostgreSQL database (e.g., on Vercel Postgres, Supabase, or Railway).
2.  **Auth**: Set up a GitHub and/or Google OAuth application to get credentials.

### Environment Variables

Add the following to your `.env` (local) or Vercel Environment Variables:

- `DATABASE_URL`: Your PostgreSQL connection string.
- `AUTH_SECRET`: Generate one with `npx auth secret`.
- `GITHUB_ID` / `GITHUB_SECRET`: From GitHub Developer Settings.
- `GOOGLE_ID` / `GOOGLE_SECRET`: From Google Cloud Console.

### Local Setup

1.  Run `npm install`.
2.  Run `npx prisma db push` to sync your database schema.
3.  Run `npm run dev`.

### Vercel Deployment

1.  Connect your repository to Vercel.
2.  Add the environment variables listed above.
3.  Vercel will automatically run `next build`, which includes the Prisma client generation.
