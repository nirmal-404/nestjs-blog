# 📝 Next.js Blog Platform

A **modern, full-stack blog application** built with cutting-edge technologies like **Next.js**, **PostgreSQL**, and **Drizzle ORM**.

Users can create, edit, and delete their own blogs. The app includes **secure authentication**, **theme switching** with Zustand, and a sleek user-friendly UI with `next-themes` and `shadcn UI`.

## 🚀 Features

✅ **Authentication** – Secure sign-in/sign-up using modern auth practices  
✅ **Blog Management** – Add, edit, and delete your own blog posts  
✅ **Authorization** – Only authors can edit/delete their blogs  
✅ **Dark Mode** – Beautiful light/dark theme toggle via Zustand + next-themes  
✅ **PostgreSQL + Drizzle ORM** – Reliable and type-safe database interactions  
✅ **Optimized Routing** – Fast navigation with App Router and dynamic routing  
✅ **Clean UI/UX** – Minimal, distraction-free reading and writing experience

## 🛠️ Tech Stack

| Layer        | Tech                        |
| ------------ | --------------------------- |
| **Frontend** | Next.js (App Router), React |
| **Styling**  | Tailwind CSS, next-themes   |
| **Auth**     | Better Auth (Auth.js)       |
| **State**    | Zustand                     |
| **Database** | PostgreSQL + Drizzle ORM    |

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/nextjs-blog-platform.git
   cd nextjs-blog-platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Fill in your environment variables:

   ```env
   DATABASE_URL=
   BETTER_AUTH_SECRET=
   BASE_URL=
   ```

4. **Set up the database**

   ```bash
   # Run database migrations
   npx drizzle-kit generate
   npx drizzle-kit migrate


5. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.


## 🔧 Key Features Explained

### Authentication System

- Secure user registration and login
- Session management with Better Auth
- Protected routes for authenticated users
- Password hashing and validation

### Theme System

- Light/dark mode toggle
- Persistent theme preference
- Smooth transitions between themes
- System preference detection


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Drizzle ORM](https://orm.drizzle.team/) for type-safe database operations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
