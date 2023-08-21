import TopBar from '@/components/shared/Topbar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import BottomBar from '@/components/shared/Bottombar'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Threads',
  description: 'Nextjs Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <TopBar />

        <main className="flex flex-row">
          <LeftSidebar />
          
          <section className="main-container">
            <div className="w-full max-w-4xl">
              {children}
            </div>
          </section>
          
          <RightSidebar />
        </main>

        {children}
        <BottomBar />
        </body>
    </html>
    </ClerkProvider>
  )
}
