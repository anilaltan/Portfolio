import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import GoogleAnalytics from '../components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anıl Altan',
  description: 'Software Engineer Portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
