# Next.js Full-Stack Setup Cheat Sheet

A comprehensive guide for setting up a Next.js application with Zustand, Drizzle ORM, Better Auth, and PostgreSQL.

## 📦 Initial Package Installation

```bash
# Core dependencies
npm i zustand next-themes
npm i react-hook-form zod @hookform/resolvers
npm i drizzle-orm pg
npm i -D drizzle-kit @types/pg
npm install better-auth
npm i @better-auth/cli

# Generate auth secret
npx @better-auth/cli@latest secret
```

## 🗄️ Database Setup

### 1. Create Database
Create a new database in pgAdmin or your PostgreSQL client.

---
### 2. Configure Drizzle
**💡 Tip:** Go to Drizzle docs → search for "drizzle.config.ts"

**📖 Reference:** [https://orm.drizzle.team/docs](https://orm.drizzle.team/docs)

**💡 Tip:**  Create `drizzle.config.ts` in the root directory:

```typescript
// drizzle.config.ts
import { Config, defineConfig } from 'drizzle-kit'

export default {
  schema: './src/lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || ''
  },
  verbose: true,
  strict: true
} satisfies Config
```

---
### 3. Create Database Schema

**💡 Tip:** Go to lib folder -> create db folder -> create schema.ts

**📖 Reference:** [https://www.better-auth.com/docs/concepts/database](https://www.better-auth.com/docs/concepts/database)

---

## 🔐 Authentication Setup


**⚠️ Important:** When using CLI, you must implement the `auth.ts` before running the command!

### 4. Create Auth Route Handler
**💡 Tip:**  Create `src/app/api/auth/[...all]/route.ts`:

**📖 Reference:** [https://www.better-auth.com/docs/integrations/next](https://www.better-auth.com/docs/integrations/next)

---

### 5. Setup Auth Configuration
**💡 Tip:** Create `src/lib/auth.ts`:

**📖 Reference:** 
- [Email/Password Authentication](https://www.better-auth.com/docs/authentication/email-password)
- [Configuration Options](https://www.better-auth.com/docs/reference/options)

---

## 🗃️ Database Schema & Connection


### 6. Create Database Schema
**💡 Tip:** Create `src/lib/db/schema.ts`:

**📖 Reference:** [https://www.better-auth.com/docs/concepts/database](https://www.better-auth.com/docs/concepts/database)

---

### 7. Database Connection
Create `src/lib/db/index.ts` for database connection setup.

---

### 8. Update Auth Configuration
Update `src/lib/auth.ts` with your database schemas and configuration.

---

## 🚀 Database Migration

### 9. Genearate and run migrations
```bash
# Generate migration files (creates the drizzzle folder)
npx drizzle-kit generate

# Run migrations (migrates the schemas)
npx drizzle-kit migrate
```

---

## 🛡️ Route Protection Middleware

### 10. Create Middleware
Create `src/middleware.ts`:

**📖 References:**
- [Next.js Middleware](https://nextjs.org/docs/app/api-reference/file-conventions/middleware#matcher)
- [Better Auth Next.js Middleware](https://www.better-auth.com/docs/integrations/next)

---

## 🎨 Theme Management

### 11. Theme Store
**💡 Tip:** Create `src/store/theme-store.ts` using Zustand for theme state management.

```typescript 
//theme-store.ts
'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
  isDarkMode: boolean
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      isDarkMode: false,
      toggleTheme: () => set(state => ({ isDarkMode: !state.isDarkMode }))
    }),
    {
      name: 'theme-stroage'
    }
  )
)

```
---

## 📝 Forms & Data Handling

**💡 Tip:** crete the forms and all

---

### 11. Server Actions
**💡 Tip** Create `src/actions/post-actions.ts`:

**📖 References:**
- [https://nextjs.org/docs/app/getting-started/updating-data#invoking-server-functions](https://nextjs.org/docs/app/getting-started/updating-data#invoking-server-functions)
- **just read- > ** [https://nextjs.org/docs/app/api-reference/functions/revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)

---

### 12. Database Queries
**💡 Tip:** Create lib/db/queries.ts

Create `src/lib/db/queries.ts` for all database query functions.

---

### 13. TypeScript Types
**💡 Final step:** Create the types in lib folder for post list props

Create `src/lib/types.ts` for type definitions (e.g., PostListProps).

---
## 🧩 UI Components


## 📁 Recommended File Structure

```
src/
├── app/
│   ├── api/auth/[...all]/route.ts
│   └── ...pages
├── lib/
│   ├── db/
│   │   ├── index.ts
│   │   ├── schema.ts
│   │   └── queries.ts
|   ├── types/
│   │   ├── index.ts
│   ├── auth.ts
│   ├── auth-client.ts
│   └── utils.ts
├── store/
│   └── theme-store.ts
├── actions/
│   └── post-actions.ts
├── components/
│   └── ...ui/components
└── middleware.ts
.env
```

---

## ⚡ Quick Start Commands

```bash
# After setup, run these in order:
npm install
npx @better-auth/cli@latest secret
npx drizzle-kit generate
npx drizzle-kit migrate
npm run dev
```

---

## 🔗 Essential Documentation Links

- [Better Auth Documentation](https://www.better-auth.com/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Zustand Documentation](https://zustand.docs.pmnd.rs/)
- [React Hook Form](https://react-hook-form.com/)

---

## 💡 Important Notes

- **Auth First:** Implement `auth.ts` before running Better Auth CLI commands
- **Environment Variables:** Ensure `DATABASE_URL` is set in your `.env.local`
- **Manual vs CLI:** This guide covers manual setup; CLI options are available for faster scaffolding
- **Schema Updates:** Run `drizzle-kit generate` and `drizzle-kit migrate` after schema changes

---