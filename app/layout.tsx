import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PFEMYWYBL1"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PFEMYWYBL1');
        `}</Script>

        {/* MS Teams live chat widget — attributes passed directly on the script element */}
        <Script
          src="https://res.public.onecdn.static.microsoft/customerconnect/v1/7dttl/init.js"
          id="chatbot"
          strategy="lazyOnload"
          crossOrigin="anonymous"
          // @ts-expect-error non-standard attributes required by MS Teams widget
          environmentId="bb1c4a61-b840-ee53-8798-05d8087c5f0a"
          region="unitedstates"
        />
      </body>
    </html>
  );
}
