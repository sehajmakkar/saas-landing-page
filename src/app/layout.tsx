import type { Metadata } from "next";
// custom font
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "SAAS Landing Page",
  description: "Made with Love by Sehaj Makkar - KryptoKodes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          twMerge(
            dmSans.className, 
            "antialiased bg-[#EAEEFE]"
          )  
        }
      >
        {children}
      </body>
    </html>
  );
}
