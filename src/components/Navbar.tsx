"use client";
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b-2 border-primary shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-primary">
          Histórias com Deus
        </Link>

        {/* Menu para desktop */}
        <div className="hidden md:flex space-x-10 items-center">
          <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Iniciar
          </Link>
          <Link href="/historias" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Histórias
          </Link>
          <Link href="/oracoes" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Orações
          </Link>
          <Link href="/salmos" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Salmos
          </Link>
          <Link href="/propositos" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Propósitos
          </Link>
          <Link href="/chat" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Chat
          </Link>
          <Link href="/sobre" className="text-gray-700 hover:text-primary transition-colors font-medium">
            Sobre
          </Link>
        </div>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-7 w-7 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden py-4 bg-white border-t border-primary">
          <Link
            href="/"
            className="block py-2 text-gray-700 hover:text-primary font-medium"
          >
            Iniciar
          </Link>
          <Link
            href="/historias"
            className="block py-2 text-gray-700 hover:text-primary font-medium"
          >
            Histórias
          </Link>
          <Link
            href="/oracoes"
            className="block py-2 text-gray-700 hover:text-primary font-medium"
          >
            Orações
          </Link>
          <Link
            href="/salmos"
            className="block py-2 text-gray-700 hover:text-primary font-medium"
          >
            Salmos
          </Link>
          <Link
            href="/propositos"
            className="block py-2 text-gray-700 hover:text-primary font-medium"
          >
            Propósitos
          </Link>
          <Link
            href="/chat"
            className="block py-2 text-gray-700 hover:text-primary font-medium"
          >
            Chat
          </Link>
          <Link
            href="/sobre"
            className="block py-2 text-gray-700 hover:text-primary font-medium"
          >
            Sobre
          </Link>
        </div>
      )}
    </nav>
  )
} 