import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import Footer from "@/components/Footer/Footer";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wishlists",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

  return (
    <html lang="en" data-theme="wishlists">
      <head>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: This script is used to inject environment variables into the global window object for client-side access
          dangerouslySetInnerHTML={{
            __html: `window.__ENV = { NEXT_PUBLIC_API_URL: ${JSON.stringify(
              apiUrl,
            )} };`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <NavigationBar />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
