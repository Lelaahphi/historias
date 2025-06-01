'use client'

import { useState, useEffect, useRef } from 'react'
import { db } from '@/firebase'
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, deleteDoc, doc } from 'firebase/firestore'

export default function ChatPage() {
  const [mensagem, setMensagem] = useState('')
  const [mensagens, setMensagens] = useState<any[]>([])
  const [erro, setErro] = useState<string | null>(null)
  const [nome, setNome] = useState('')
  const [nomeSalvo, setNomeSalvo] = useState('')
  const [telaNome, setTelaNome] = useState(true)
  const mensagensEndRef = useRef<HTMLDivElement>(null)

  // Carregar nome do usuário do localStorage (opcional, mas sempre mostrar tela de nome)
  useEffect(() => {
    const nomeLocal = localStorage.getItem('chat_nome')
    if (nomeLocal) {
      setNome(nomeLocal)
    }
  }, [])

  // Carregar mensagens do Firestore
  useEffect(() => {
    if (!nomeSalvo) return
    const q = query(collection(db, 'chat'), orderBy('timestamp', 'asc'))
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        setMensagens(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      },
      (error) => {
        setErro('Erro ao carregar mensagens: ' + error.message)
      }
    )
    return () => unsubscribe()
  }, [nomeSalvo])

  useEffect(() => {
    mensagensEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [mensagens])

  async function enviarMensagem(e: React.FormEvent) {
    e.preventDefault()
    if (!mensagem.trim()) return
    setErro(null)
    setMensagem('') // Limpa imediatamente
    try {
      await addDoc(collection(db, 'chat'), {
        texto: mensagem,
        usuario: nomeSalvo,
        timestamp: serverTimestamp(),
      })
    } catch (err: any) {
      setErro('Erro ao enviar mensagem: ' + (err?.message || err))
    }
  }

  async function excluirMensagem(id: string) {
    try {
      await deleteDoc(doc(db, 'chat', id))
    } catch (err: any) {
      setErro('Erro ao excluir mensagem: ' + (err?.message || err))
    }
  }

  function handleSalvarNome(e: React.FormEvent) {
    e.preventDefault()
    if (!nome.trim()) return
    localStorage.setItem('chat_nome', nome)
    setNomeSalvo(nome)
    setTelaNome(false)
  }

  function handleAnonimo() {
    setNome('Anônimo')
    localStorage.setItem('chat_nome', 'Anônimo')
    setNomeSalvo('Anônimo')
    setTelaNome(false)
  }

  // Sempre mostrar tela de nome ao entrar
  if (telaNome) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <form onSubmit={handleSalvarNome} className="bg-white p-8 rounded-lg shadow-md flex flex-col gap-4 w-full max-w-xs">
          <h2 className="text-xl font-bold text-center">Digite seu nome para entrar no chat</h2>
          <input
            type="text"
            placeholder="Seu nome (ex: Maria, João, Admin)"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={nome}
            onChange={e => setNome(e.target.value)}
            maxLength={20}
            required
          />
          <button type="submit" className="btn-primary">Entrar</button>
          <button type="button" className="btn-secondary" onClick={handleAnonimo}>Entrar como Anônimo</button>
        </form>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="title-main text-center mb-12">Chat Comunitário</h1>

      {erro && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{erro}</span>
        </div>
      )}

      {/* Regras do Chat */}
      <section className="card mb-10">
        <h2 className="title-section">Regras do Chat</h2>
        <ul className="list-disc list-inside space-y-2 text-text">
          <li>Respeite todos os participantes</li>
          <li>Mantenha o foco em temas de fé e espiritualidade</li>
          <li>Evite discussões polêmicas ou ofensivas</li>
          <li>Use linguagem apropriada e edificante</li>
        </ul>
      </section>

      {/* Interface do Chat */}
      <section className="card">
        <div className="h-[500px] flex flex-col">
          {/* Área de Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 rounded-t-lg">
            {mensagens.length === 0 && (
              <div className="text-center text-text-muted">Nenhuma mensagem ainda. Seja o primeiro a enviar!</div>
            )}
            {mensagens.map((msg) => {
              const podeExcluir = msg.usuario === nomeSalvo || nomeSalvo === 'Admin'
              return (
                <div className="flex items-start space-x-3" key={msg.id}>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {msg.usuario?.[0] || '?'}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-text">{msg.usuario}</span>
                      <span className="text-sm text-text-muted">
                        {msg.timestamp?.toDate ? msg.timestamp.toDate().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '--:--'}
                      </span>
                      {podeExcluir && (
                        <button
                          className="ml-2 text-xs text-red-500 hover:underline"
                          title="Excluir mensagem"
                          onClick={() => excluirMensagem(msg.id)}
                        >
                          Excluir
                        </button>
                      )}
                    </div>
                    <p className="text-text">{msg.texto}</p>
                  </div>
                </div>
              )
            })}
            <div ref={mensagensEndRef} />
          </div>

          {/* Área de Input */}
          <div className="border-t p-4">
            <form className="flex space-x-4" onSubmit={enviarMensagem}>
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={mensagem}
                onChange={e => setMensagem(e.target.value)}
                maxLength={300}
                required
              />
              <button type="submit" className="btn-primary">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
} 