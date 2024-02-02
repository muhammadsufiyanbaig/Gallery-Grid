
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Components/Header";
import "./globals.css";
import Provider from "./Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gallery Grid",
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

          <Provider>
            <Header />
            {children}
          </Provider>

      </body>
    </html>
  );
}
