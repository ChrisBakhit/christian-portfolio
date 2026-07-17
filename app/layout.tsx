import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian Bakhit | AI, Robotics & Data",
  description: "Christian Bakhit is a computer scientist building at the edge of artificial intelligence, robotics, data, and human possibility.",
  openGraph: { title: "Christian Bakhit | Software, Data & Product", description: "Computer science graduate with experience building software products, research systems, and technical communities." },
  twitter: { card: "summary", title: "Christian Bakhit | Software, Data & Product", description: "Computer science graduate with experience across software, data, and product." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
