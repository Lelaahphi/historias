import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { OracoesProvider } from '@/context/OracoesContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Histórias com Deus',
  description: 'Um espaço para compartilhar histórias de fé, esperança e amor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Histórias</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DV6QMXNCP9"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DV6QMXNCP9');
        ` }} />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} font-sans bg-background min-h-screen`}>
        <OracoesProvider>
          <Navbar />
          <main className="container mx-auto px-4 py-8 min-h-[80vh] bg-background">
            {children}
          </main>
          <footer className="w-full bg-background border-t border-primary py-6 mt-8 shadow-inner">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
              <span className="font-serif text-primary-dark text-lg font-bold">Histórias com Deus</span>
              <span className="text-text-muted text-sm mt-2 md:mt-0">© {new Date().getFullYear()} - Feito com fé e amor</span>
              <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="/sobre" className="text-primary hover:underline">Sobre</a>
                <a href="mailto:contato@historiascomdeus.com" className="text-primary hover:underline">Contato</a>
              </div>
            </div>
          </footer>
        </OracoesProvider>
      </body>
    </html>
  )
} 