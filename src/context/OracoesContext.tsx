"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

export interface Publicacao {
  titulo: string;
  conteudo: string;
  autor: string;
  data: string;
  anonimo: boolean;
}

interface OracoesContextType {
  oracoes: Publicacao[];
  adicionarOracao: (oracao: Publicacao) => void;
  excluirOracao: (idx: number) => void;
}

const OracoesContext = createContext<OracoesContextType | undefined>(undefined);

export function OracoesProvider({ children }: { children: ReactNode }) {
  const [oracoes, setOracoes] = useState<Publicacao[]>([]);

  function adicionarOracao(oracao: Publicacao) {
    setOracoes(prev => [oracao, ...prev]);
  }

  function excluirOracao(idx: number) {
    setOracoes(prev => prev.filter((_, i) => i !== idx));
  }

  return (
    <OracoesContext.Provider value={{ oracoes, adicionarOracao, excluirOracao }}>
      {children}
    </OracoesContext.Provider>
  );
}

export function useOracoes() {
  const ctx = useContext(OracoesContext);
  if (!ctx) throw new Error('useOracoes deve ser usado dentro de OracoesProvider');
  return ctx;
} 