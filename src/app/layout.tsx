import type { Metadata } from 'next';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

import { Zen_Kaku_Gothic_New } from 'next/font/google';

const RampartOneFont = Zen_Kaku_Gothic_New({
    weight: '500',
    subsets: ['latin'],
});
export const metadata: Metadata = {
    title: '厚木高校戸陵祭',
    description: '厚木高校戸陵祭サイト',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <SpeedInsights />
            <Analytics />
            <body className={`${RampartOneFont.className} antialiased`}>{children}</body>
        </html>
    );
}
