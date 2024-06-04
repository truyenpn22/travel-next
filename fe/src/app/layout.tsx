
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import './globals.css'
import { useRouter } from 'next/navigation';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DefaultLayout from '@/components/DefaultLayout';
import 'remixicon/fonts/remixicon.css';
import { AuthProvider } from '@/context/authContext';


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
        <AuthProvider>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </AuthProvider>

      </body>

    </html>


  )
}
