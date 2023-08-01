import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Nav/Header'
import ReduxProvider from './redux/provider'
import SearchBar from './components/Searchbar/SearchBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TelecomSoft',
  description: 'Crud for telecomsoft interview task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <header className='w-full'>
            <Header/>
          </header>
          <main className='px-24 py-4'>
            <SearchBar/>
            {children}
          </main>
        </ReduxProvider>
      </body>
    </html>
  )
}
