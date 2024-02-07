import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'みまもり',
  description: '離れた家族を見守る優しい健康管理アプリ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <Head>
        <title>みまもり</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
