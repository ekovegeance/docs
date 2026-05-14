import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Geist } from 'next/font/google';
import type { ReactNode } from 'react';
import {Banner} from "fumadocs-ui/components/banner";
import {Metadata} from "next";



export const metadata: Metadata = {
    title: {
        template: '%s | vngne',
        default: 'vngne',
    },
    description: 'Personal knowledge management system',
    metadataBase: new URL('https://vngne.vercel.app/'),
}

const plusJakartaSans = Geist({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
});


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={plusJakartaSans.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
            <Banner id="developed" variant="rainbow">Work in Progress</Banner>
            {children}
        </RootProvider>
      </body>
    </html>
  );
}
