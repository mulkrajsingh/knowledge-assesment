import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Layout from "@/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Knowledge Assesment",
  description: "Test your knowledge in your choice of document",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
