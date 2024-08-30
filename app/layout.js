"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./componets/sidebar";
import Navbar from "./componets/Navbar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });





export default function RootLayout({ children }) {

const [showSidebar, SetShowSidebar] = useState(true)


  return (
    <html lang="en">
      <body className={inter.className}>
        
      <div className='w-full flex p-6 bg-blue-100 h-full pb-20'>
       <Sidebar   showSidebar={showSidebar} />
       
       <main className="w-full">
        <div className="flex flex-col bg-white mb-5 p-2 rounded-lg shadow-md">
        <Navbar SetShowSidebar={SetShowSidebar} showSidebar={showSidebar} />
        </div>
        <div className="flex flex-col  h-full ">
        {children}
        </div>
      
       </main>
      
        </div>
       
        </body>
    </html>
  );
}
