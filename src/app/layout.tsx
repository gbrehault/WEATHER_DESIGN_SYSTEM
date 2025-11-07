import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import React from "react";

  const [filtersDisabled, setFiltersDisabled] = React.useState(false);

  const handleToggleFiltersDisabled = () => {
    setFiltersDisabled((prev) => !prev);
  };
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Application Météo",
  description: "Projet météo développé avec Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} antialiased`}>
   <Header
          filtersDisabled={filtersDisabled}
          onToggleFiltersDisabled={handleToggleFiltersDisabled}
        />
        {children}
      </body>
    </html>
  );
}
