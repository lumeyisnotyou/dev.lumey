import './globals.css'
import type { Metadata } from 'next'
import '@fontsource/dm-sans/'
import '@fontsource/major-mono-display/'

export const metadata: Metadata = {
  title: 'lumey',
  description: 'lumey profile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='motion-safe:transition-all overflow-hidden'>{children}</body>
    </html>
  )
}
