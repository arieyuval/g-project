import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gazacommunitykitchen.com"),
  title: "Gaza Community Kitchen",
  description:
    "Hot meals, clean water, and essential supplies for families in Al-Maghazi Gaza refugee camp.",
  openGraph: {
    title: "Gaza Community Kitchen",
    description:
      "Hot meals, clean water, and essential supplies for families in Al-Maghazi Gaza refugee camp.",
    url: "https://gazacommunitykitchen.com",
    siteName: "Gaza Community Kitchen",
    images: [
      {
        url: "/og.jpg", // place a 1200x630 image in your /public folder
        width: 1200,
        height: 630,
        alt: "Gaza Community Kitchen",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaza Community Kitchen",
    description:
      "Hot meals, clean water, and essential supplies for families in Al-Maghazi refugee camp.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
