import type { Metadata } from 'next'
import { Inter } from "next/font/google";


import Header from '@/components/Header'
import '../../app/globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Borcelle Store",
    description: "Borcelle Ecommerce Store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={inter.className}>
                <main>
                    <Header />
                    {children}
                </main>
            </body>
        </html>


    )
}
