import Header from '@/components/lib/ui/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-roboto-mono',
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href={`https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap`}
          rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-gray-100 text-black-primary`}>
        <div className='flex flex-col min-h-screen mx-auto w-full leading-13 font-title'>
          <Header />
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  )
}
