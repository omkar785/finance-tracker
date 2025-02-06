import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "sonner";

const inter=Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "One stop expense tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className} bg-black dark`}
        
      >
        {/* header */}
        <Header></Header>
        <main className="min-h-screen">

        {children}
        </main>
        <Toaster richColors/>
        {/* footer */}
        <footer className="bg-custom-beigee py-12">
        <div className="container mx-auto px-4 text-center text-gray-600 font-bold">
          <p>&#9400; MoneyMint 2025</p>
        </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}