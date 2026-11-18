import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Manrope, Geist } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
    title: 'Wavvy — AI screening interviews for recruitment teams',
    description:
        'Wavvy runs your first-round interviews asynchronously and gives you structured, explainable insights on every candidate.',
    generator: 'v0.app',
    icons: {
        icon: [
            {
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme: light)',
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme: dark)',
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/apple-icon.png',
    },
};

export const viewport: Viewport = {
    colorScheme: 'light',
    themeColor: '#f5f5f0',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("font-sans", geist.variable, manrope.variable)}>
            <body className="antialiased">
                {children}
                {process.env.NODE_ENV === 'production' && <Analytics />}
            </body>
        </html>
    );
}
