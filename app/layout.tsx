import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import { ScrollThemeProvider } from "@/components/ScrollThemeContext";
import ScrollThemeWrapper from "@/components/ScrollThemeWrapper";
import CustomCursor from "@/components/CustomCursor";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VASA",
  description: "Vasanth's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <CustomCursor />
        <ScrollThemeProvider>
          <ScrollThemeWrapper>
            {/* Left Sidebar (Desktop) */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex flex-col w-full">
              {children}
            </main>

            {/* Right Sidebar (Desktop) */}
            <RightSidebar />
          </ScrollThemeWrapper>

          {/* Mobile Navigation */}
          <MobileNav />
        </ScrollThemeProvider>
      </body>
    </html>
  );
}
