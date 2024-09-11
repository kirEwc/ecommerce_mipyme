import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Banner } from "@/components/Publicity/Banner";
import { Providers } from "@/app/providers";
import Navbar_Main from "@/components/ui/Navbar/Navbar_Main";
import { Footer } from "@/components/ui/Footer";
import 'react-toastify/dist/ReactToastify.css';
import ToastContainerMessage from "@/messages/ToastContainerMessage";
import ClientOnlyLayout from "./clientLayout";



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

export const metadata: Metadata = {
  title: "Tropical Market",
  description: "Generated by create next app",
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
        <Providers>          
          <ClientOnlyLayout>
          {children}
          </ClientOnlyLayout>
        </Providers>      
        <ToastContainerMessage />
      </body>
    </html>
  );
}
