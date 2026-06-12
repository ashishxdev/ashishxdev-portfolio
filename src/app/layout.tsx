import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aashish Rana Full Stack Developer",
  description:
    "Full Stack Software Engineer skilled in React.js, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB. Building production-ready SaaS products, AI-powered applications, and database-driven systems.",
  keywords: [
    "Aashish Rana",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Delhi",
    "India",
  ],
  authors: [{ name: "Aashish Rana" }],
  openGraph: {
    title: "Aashish Rana Full Stack Developer",
    description: "Building production-ready SaaS products, AI-powered applications, and database-driven systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
