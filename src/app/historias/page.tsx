"use client";
import Link from 'next/link'
import { useState } from 'react'
import { useOracoes, Publicacao } from '@/context/OracoesContext'

// Definir tipo para história/oração
// interface Publicacao {
//   titulo: string;
//   conteudo: string;
//   autor: string;
//   data: string;
//   anonimo: boolean;
// }

export default function HistoriasPage() {
  // Simulação de usuário logado (pode ser 'Você', 'admin', ou outro)
  const usuarioAtual: string = 'Você' // Troque para 'admin' para simular admin

  const [historias, setHistorias] = useState<Publicacao[]>([
    {
      titulo: 'Um Milagre em Minha Vida',
      conteudo: 'Há alguns meses, enfrentei um momento muito difícil em minha vida. Estava passando por problemas de saúde e sentia que não havia saída. Em meio à dor, orei e pedi a Deus por um milagre. Com o tempo, fui sentindo paz no coração e, para minha surpresa, os exames começaram a mostrar melhoras inesperadas. Hoje estou curado e sou muito grato a Deus por esse milagre. Compartilho minha história para fortalecer a fé de quem está passando por dificuldades. Nunca perca a esperança!',
      autor: 'João Silva',
      data: '15/02/2024',
      anonimo: false,
    },
  ])
  const [titulo, setTitulo] = useState('')
  const [conteudo, setConteudo] = useState('')
  const [anonimo, setAnonimo] = useState(false)

  // Contexto global de orações
  const { oracoes, adicionarOracao, excluirOracao } = useOracoes()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!titulo.trim() || !conteudo.trim()) return
    setHistorias([
      {
        titulo,
        conteudo,
        autor: anonimo ? 'Anônimo' : usuarioAtual,
        data: new Date().toLocaleDateString('pt-BR'),
        anonimo,
      },
      ...historias,
    ])
    setTitulo('')
    setConteudo('')
    setAnonimo(false)
  }

  function handleCompartilharOracao() {
    if (!titulo.trim() || !conteudo.trim()) return
    adicionarOracao({
      titulo,
      conteudo,
      autor: anonimo ? 'Anônimo' : usuarioAtual,
      data: new Date().toLocaleDateString('pt-BR'),
      anonimo,
    })
    setTitulo('')
    setConteudo('')
    setAnonimo(false)
  }

  function handleExcluirHistoria(idx: number) {
    setHistorias(historias.filter((_, i) => i !== idx))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="title-main text-center mb-12">Histórias de Fé</h1>

      {/* Formulário de Nova História */}
      <div className="card mb-10 flex flex-col items-center text-center">
        <h2 className="title-section">Compartilhe Sua História</h2>
        <form className="space-y-4 w-full max-w-3xl flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="w-full text-left">
            <label htmlFor="title" className="block text-text mb-2 font-semibold">
              Título
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Dê um título à sua história"
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
            />
          </div>

          <div className="w-full text-left">
            <label htmlFor="content" className="block text-text mb-2 font-semibold">
              Sua História
            </label>
            <textarea
              id="content"
              rows={6}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Compartilhe sua experiência de fé..."
              value={conteudo}
              onChange={e => setConteudo(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4 self-start">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" checked={anonimo} onChange={e => setAnonimo(e.target.checked)} />
              <span className="text-text">Postar anonimamente</span>
            </label>
          </div>

          <div className="flex w-full max-w-xs gap-4 mt-2">
            <button type="submit" className="btn-primary w-1/2">
              Compartilhar História
            </button>
            <button type="button" className="btn-secondary w-1/2" onClick={handleCompartilharOracao}>
              Compartilhar Oração
            </button>
          </div>
        </form>
      </div>

      {/* Lista de Histórias */}
      <div className="space-y-8 mb-16">
        {historias.map((hist, idx) => {
          const podeExcluir = hist.autor === usuarioAtual || usuarioAtual === 'admin'
          return (
            <article className="card text-left relative" key={idx}>
              <h3 className="title-section mb-2">{hist.titulo}</h3>
              <p className="text-text mb-4">{hist.conteudo}</p>
              <div className="flex items-center justify-between text-sm text-text-muted">
                <span>Por: {hist.autor}</span>
                <span>Publicado em: {hist.data}</span>
              </div>
              {podeExcluir && (
                <button
                  className="absolute top-6 right-6 text-xs bg-primary text-white px-3 py-1 rounded-full shadow hover:bg-primary-dark transition-all"
                  onClick={() => handleExcluirHistoria(idx)}
                  title="Excluir história"
                >
                  Excluir
                </button>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
} 