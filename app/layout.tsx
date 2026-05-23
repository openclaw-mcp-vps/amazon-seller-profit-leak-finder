import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amazon Seller Profit Leak Finder',
  description: 'Find hidden costs eating your Amazon FBA profits. Analyze fees, ad spend, and get actionable recommendations.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="af6098b7-8080-4925-826e-f857b77efd74"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
