"use client";
import Link from 'next/link'
import { useOracoes } from '@/context/OracoesContext'

// Lista de orações do dia
const oracoesDoDia = [
  {
    titulo: 'Oração da Manhã',
    conteudo: [
      'Senhor, neste dia que começa, venho diante de Ti com um coração grato. Agradeço por mais uma oportunidade de viver e servir ao Teu propósito.',
      'Guia-me em todos os meus caminhos, ilumina minhas decisões e fortalece minha fé. Que eu possa ser um instrumento do Teu amor para todos aqueles que encontrarem no meu caminho.',
      'Em nome de Jesus, amém.'
    ]
  },
  {
    titulo: 'Oração de Gratidão',
    conteudo: [
      'Pai amado, agradeço por todas as bênçãos que recebo diariamente. Mesmo diante das dificuldades, sei que estás comigo.',
      'Que eu nunca perca a esperança e a confiança em Ti. Ensina-me a ser grato em todas as circunstâncias.',
      'Amém.'
    ]
  },
  {
    titulo: 'Oração por Proteção',
    conteudo: [
      'Senhor Deus, peço Tua proteção sobre mim e minha família neste dia.',
      'Livra-nos de todo mal, guarda nossos passos e cobre-nos com Teu amor.',
      'Confio em Ti, meu Deus. Amém.'
    ]
  },
  {
    titulo: 'Oração por Sabedoria',
    conteudo: [
      'Deus, concede-me sabedoria para tomar as melhores decisões hoje.',
      'Que eu possa agir com discernimento, paciência e amor em todas as situações.',
      'Em nome de Jesus, amém.'
    ]
  },
  {
    titulo: 'Oração pela Família',
    conteudo: [
      'Senhor, abençoa minha família. Que haja união, paz e amor entre nós.',
      'Cuida de cada um, supre nossas necessidades e fortalece nossos laços.',
      'Amém.'
    ]
  },
  // Adicione mais orações se desejar
]

// Orações fixas iniciais
const oracoesFixas = [
  {
    titulo: 'Oração pela Família',
    conteudo: 'Senhor, abençoa minha família. Que haja união, paz e amor entre nós. Cuida de cada um, supre nossas necessidades e fortalece nossos laços. Amém.',
    autor: 'Equipe Histórias com Deus',
    data: '01/06/2025',
  },
  {
    titulo: 'Oração por Sabedoria',
    conteudo: 'Deus, concede-me sabedoria para tomar as melhores decisões hoje. Que eu possa agir com discernimento, paciência e amor em todas as situações. Em nome de Jesus, amém.',
    autor: 'Equipe Histórias com Deus',
    data: '01/06/2025',
  },
  {
    titulo: 'Oração de Gratidão',
    conteudo: 'Pai amado, agradeço por todas as bênçãos que recebo diariamente. Mesmo diante das dificuldades, sei que estás comigo. Ensina-me a ser grato em todas as circunstâncias. Amém.',
    autor: 'Equipe Histórias com Deus',
    data: '01/06/2025',
  },
]

function getOracaoDoDia() {
  const hoje = new Date()
  const inicioAno = new Date(hoje.getFullYear(), 0, 0)
  const diff = hoje.getTime() - inicioAno.getTime()
  const diaDoAno = Math.floor(diff / 86400000)
  return oracoesDoDia[diaDoAno % oracoesDoDia.length]
}

export default function OracoesPage() {
  const usuarioAtual: string = 'Você' // Troque para 'admin' para simular admin
  const { oracoes, excluirOracao } = useOracoes()
  const oracaoDia = getOracaoDoDia()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="title-main text-center mb-12">Orações e Salmos</h1>

      {/* Orações Compartilhadas */}
      {oracoes.length > 0 && (
        <div className="mb-10">
          <h2 className="title-section text-center mb-8">Orações Compartilhadas</h2>
          <div className="space-y-8">
            {oracoes.map((oracao, idx) => {
              const podeExcluir = oracao.autor === usuarioAtual || usuarioAtual === 'admin'
              return (
                <article className="card text-left relative" key={idx}>
                  <h3 className="title-section mb-2">{oracao.titulo}</h3>
                  <p className="text-text mb-4">{oracao.conteudo}</p>
                  <div className="flex items-center justify-between text-sm text-text-muted">
                    <span>Por: {oracao.autor}</span>
                    <span>Publicado em: {oracao.data}</span>
                  </div>
                  {podeExcluir && (
                    <button
                      className="absolute top-6 right-6 text-xs bg-primary text-white px-3 py-1 rounded-full shadow hover:bg-primary-dark transition-all"
                      onClick={() => excluirOracao(idx)}
                      title="Excluir oração"
                    >
                      Excluir
                    </button>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      )}

      {/* Oração do Dia */}
      <section className="card mb-10">
        <h2 className="title-section">Oração do Dia</h2>
        <div className="prose max-w-none text-text">
          <h3 className="font-bold text-primary mb-2">{oracaoDia.titulo}</h3>
          {oracaoDia.conteudo.map((par, idx) => (
            <p className="mb-4" key={idx}>{par}</p>
          ))}
        </div>
      </section>

      {/* Orações dos Usuários */}
      <section className="card mb-10">
        <h2 className="title-section">Orações</h2>
        {(oracoesFixas.length === 0 && oracoes.length === 0) ? (
          <div className="text-center text-text-muted">Nenhuma oração compartilhada ainda.</div>
        ) : (
          <div className="space-y-8">
            {oracoesFixas.map((oracao, idx) => (
              <article className="card text-left relative" key={"fixa-"+idx}>
                <h3 className="title-section mb-2">{oracao.titulo}</h3>
                <p className="text-text mb-4">{oracao.conteudo}</p>
                <div className="flex items-center justify-between text-sm text-text-muted">
                  <span>Por: {oracao.autor}</span>
                  <span>Publicado em: {oracao.data}</span>
                </div>
              </article>
            ))}
            {oracoes.map((oracao, idx) => (
              <article className="card text-left relative" key={idx}>
                <h3 className="title-section mb-2">{oracao.titulo}</h3>
                <p className="text-text mb-4">{oracao.conteudo}</p>
                <div className="flex items-center justify-between text-sm text-text-muted">
                  <span>Por: {oracao.autor}</span>
                  <span>Publicado em: {oracao.data}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
} 