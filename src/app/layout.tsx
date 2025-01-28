"use client";

import { ReactNode } from "react";
import { PrimeReactProvider } from "primereact/api";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import "@/styles/globals.css";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/themes/lara-dark-indigo/theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>

      <QueryClientProvider client={queryClient}>
        <PrimeReactProvider value={{ ripple: true }}>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
        </PrimeReactProvider>
      </QueryClientProvider>
    </html>
  );
}
