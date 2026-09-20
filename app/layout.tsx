import type { Metadata } from "next";
import "./globals.css";
import Cursor from "./components/cursor";
import { Navbar } from "./components/navbar";
import ScrollProgress from "./components/scroll-progress";
import SmoothScroll from "./components/smooth-scroll";

export const metadata: Metadata = {
  title: "Aashish - AI Full Stack Developer",
  description:
    "Portfolio which showcases my skills, projects, and achievements.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ScrollProgress />
        <Cursor />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
