import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Amarjot's Portfolio",
  description: "My portfolio showcasing projects amd skills",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {


  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen bg-gradient-to-r from-blue-300 via-ice_blue to-blue-400 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-800 dark:to-black dark:text-white">
        <Header />
        <div className="flex-grow">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
