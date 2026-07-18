import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./navigation.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian Bakhit | Full-Stack Engineer",
  description: "Full-stack engineer building React applications, AWS serverless systems, REST APIs, and AI-assisted workflows.",
  openGraph: { title: "Christian Bakhit | Full-Stack Engineer", description: "React, AWS, REST APIs, cloud systems, and AI-assisted product development." },
  twitter: { card: "summary", title: "Christian Bakhit | Full-Stack Engineer", description: "React, AWS, REST APIs, cloud systems, and AI-assisted product development." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
