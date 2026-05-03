import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DocuPull — The Operating System for Title Production",
  description:
    "Upload search packages or submit order details. DocuPull generates title reports, legal descriptions, and flags issues automatically — in seconds.",
  openGraph: {
    title: "DocuPull — The Operating System for Title Production",
    description:
      "From title search to final report, all in one system. Built for title production teams.",
    url: "https://docupull.com",
    siteName: "DocuPull",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
