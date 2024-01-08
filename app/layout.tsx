import type { Metadata } from 'next'
import {roboto} from '@/app/ui/utilities/fonts'
import './globals.css'



export const metadata: Metadata = {
  title: '👨‍💻 Portfolio Matias Baeza - Analista Programador, Desarrollador FrontEnd',
  description: 'Portfolio de Matias Baeza, Desarrollador FrontEnd. Tecnologias: Html5, css3, TailwindCss, React, JavaScript',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-white`}>{children}</body>
    </html>
  )
}
