import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: {
    default: "Paolo Jiménez | Portfolio",
    template: "%s | Paolo Jiménez",
  },
  description: "Software Engineer portfolio: projects, experience, and contact.",
  metadataBase: new URL("https://portfolio-beta-weld-27.vercel.app/"),
  openGraph: {
    title: "Paolo Jiménez | Portfolio",
    description:
      "Software Engineer portfolio: projects, experience, and contact.",
    url: "https://portfolio-beta-weld-27.vercel.app/",
    siteName: "Paolo Jiménez",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paolo Jiménez | Portfolio",
    description:
      "Software Engineer portfolio: projects, experience, and contact.",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-50`}>
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto max-w-5xl px-4 py-12">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

