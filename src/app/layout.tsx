import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cynthia Mukami | Computer Science Student & Software Developer",
  description:
    "Portfolio of Cynthia Mukami — a Computer Science student at Thika Technical, currently a Software/Technology Attaché at the Africa Centre of Data Science and Analytics, building practical software solutions.",
  keywords: [
    "Cynthia Mukami",
    "Computer Science student",
    "Software Developer",
    "Web Developer",
    "Portfolio",
    "Thika Technical",
    "Africa Centre of Data Science and Analytics",
  ],
  authors: [{ name: "Cynthia Mukami" }],
  openGraph: {
    type: "website",
    title: "Cynthia Mukami | Computer Science Student & Software Developer",
    description:
      "Portfolio of Cynthia Mukami — building practical software solutions in web development, data systems, and computer science.",
    siteName: "Cynthia Mukami — Portfolio",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
