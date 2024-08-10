'use client'
import Sidebar from "@/components/Navigation/Sidebar";
import Topbar from "@/components/Navigation/Topbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapse, toggleCollapse] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar/>
        <Sidebar isCollapse={isCollapse} toggleCollapse={() => toggleCollapse(!isCollapse)}/>
        <div className={`transition-all duration-150 ${isCollapse? "ml-12" : "ml-48"}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
