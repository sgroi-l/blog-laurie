import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "s g r o i",
  description: "a website, by laurie",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="w-full bg-violet-50 dark:bg-indigo-950">
            <div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-8">
              <ModeToggle />
              <nav className="ml-auto text-sm font-medium space-x-6">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
              </nav>
            </div>
          </header>
          <main className="max-w-2xl mx-auto py-10 px-4">{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
