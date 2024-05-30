import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StateProvider from "./redux/StateProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redux Course",
  description: "Next.JS & Redux Integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider>{children}</StateProvider>
      </body>
    </html>
  );
}
