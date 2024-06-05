
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import './globals.css'
import { useRouter } from 'next/navigation';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DefaultLayout from '@/components/DefaultLayout';
import 'remixicon/fonts/remixicon.css';
import { AuthProvider } from '@/context/authContext';
import { Provider } from 'react-redux';
import StoreProvider from '@/hook/StoreProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

        {/* context */}
        <AuthProvider>
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </AuthProvider>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />

        {/* redux */}
        {/* <StoreProvider >
          <DefaultLayout>
            {children}
          </DefaultLayout>
        </StoreProvider> */}


      </body>

    </html>


  )
}
