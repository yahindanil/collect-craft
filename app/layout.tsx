import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "./components/navMenu/NavMenuServer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Collect Craft",
  description: "Create your own collections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavMenu />
        </header>
        {children}
      </body>
    </html>
  );
}
