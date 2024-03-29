import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AI } from "./action";
import "./globals.css";
 
const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AI>
          <div className="flex flex-col min-h-screen">
            <div className="flex-1 border-t flex flex-col">
              {children}
            </div>
          </div>
        </AI>
      </body>
    </html>
  );
}