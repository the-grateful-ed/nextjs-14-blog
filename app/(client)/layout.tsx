import type { Metadata } from 'next';
import { Kalam, Victor_Mono, Rubik } from 'next/font/google';
import React from 'react';

import './globals.css';

import MainContainer from '@/components/main-container';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
});

const victorMono = Victor_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-victor-mono',
});

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-kalam',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${rubik.variable} ${kalam.variable} ${victorMono.variable}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <MainContainer>
            <Navbar />
            <main>{children}</main>
          </MainContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
