import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Nav from './nav'


export const metadata = {
  title: 'Plataforma de vídeos',
  description: 'Its like a firework show, drop everything now!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-zinc-200">
      <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-slate-900/30 shadow-xl">
          <Nav/>
        </aside>
        <div className="flex-1 p-6">
        {children}
        </div>
        </div>
      <footer className="bg-slate-950/10 p-6 end-0 mt-1">
       <center> <h5>Autor? <Link href="/CadastroAutor" className="font-bold hover:underline">Cadastre-se.</Link></h5></center>
      </footer>
      </div>
      </body>
    </html>
  )
}
