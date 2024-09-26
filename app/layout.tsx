import "./globals.css";
import type { Metadata } from "next";
import "./Scripts/FireBase"
import Analytics from "./Components/Analytics";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const keywords = ["Infantino", "event", "seminars", "learning opportunities", "courses", "activities", "Greater Noida", "SJSSGN"];

export const metadata: Metadata = {
  title: "Infantino - Launching Soon!",
  description: "Get ready for Infantino! This event will be jam-packed with exciting activities, engaging seminars, and learning opportunities from a variety of courses and areas.",
  authors: [{ name: "Shlok Chaitanya" }],
  keywords: keywords,
  openGraph: {
    title: "Infantino - Launching Soon!",
    description: "Join us for Infantino, an exciting event with seminars and learning sessions.",
    url: "https://infantino.tech/launch",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infantino - Launching Soon!",
    description: "Be part of Infantino's exciting launch event packed with activities.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
