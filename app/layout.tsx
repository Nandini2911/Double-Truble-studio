// app/layout.tsx
import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Double Trouble Studio",
  description: "Digital, PR, web & experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dts-black text-dts-fog" 
          suppressHydrationWarning>
        <Navbar />
       
        {/* IMPORTANT: no max-w here */}
        <main className="min-h-screen">
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
