import type { Metadata } from "next";
import { Zilla_Slab, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const slab = Zilla_Slab({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-slab-src" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body-src" });

export const metadata: Metadata = {
  title: "Twenty-Fourth Street Garage | Honest Auto Repair in Sacramento | (916) 456-9812",
  description:
    "Independent auto repair at 2740 24th St in Sacramento's Curtis Park. Owner Jeff confirms time and price before any extra work: engine repair, brakes, diagnostics and maintenance. 4.6 stars on Google. Mon-Thu 7:30 AM to 5 PM. Call (916) 456-9812.",
  openGraph: {
    title: "Twenty-Fourth Street Garage | Auto Repair in Sacramento",
    description: "Jeff answers the phone, quotes up front, and finishes when promised. Call (916) 456-9812.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${slab.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
