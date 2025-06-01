import Link from 'next/link'
import InspiracoesSlider from '@/components/InspiracoesSlider'

const versiculos = [
  {
    texto: 'Porque para Deus nada é impossível.',
    referencia: 'Lucas 1:37',
  },
  {
    texto: 'O Senhor é meu pastor, nada me faltará.',
    referencia: 'Salmo 23:1',
  },
  {
    texto: 'Tudo posso naquele que me fortalece.',
    referencia: 'Filipenses 4:13',
  },
  {
    texto: 'A fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.',
    referencia: 'Hebreus 11:1',
  },
  {
    texto: 'Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.',
    referencia: 'Salmo 37:5',
  },
  {
    texto: 'O Senhor é bom, um refúgio em tempos de angústia.',
    referencia: 'Naum 1:7',
  },
  {
    texto: 'Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto.',
    referencia: 'Isaías 55:6',
  },
]

function getVersiculoDoDia() {
  const hoje = new Date()
  const idx = hoje.getDate() % versiculos.length
  return versiculos[idx]
}

export default function Home() {
  const versiculo = getVersiculoDoDia()
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-primary-dark mb-4">
          Histórias com Deus
        </h1>
        <p className="text-lg text-gray-600">
          Um espaço para compartilhar histórias de fé, esperança e amor
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Seção de Histórias */}
        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            Histórias de Fé
          </h2>
          <p className="text-gray-600 mb-4">
            Compartilhe sua jornada de fé, suas superações e milagres.
          </p>
          <Link href="/historias" className="btn-primary inline-block">
            Compartilhar História
          </Link>
        </section>

        {/* Seção de Oração */}
        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            Oração Diária
          </h2>
          <p className="text-gray-600 mb-4">
            Encontre inspiração em orações e salmos para seu dia a dia.
          </p>
          <Link href="/oracoes" className="btn-primary inline-block">
            Ver Orações
          </Link>
        </section>

        {/* Chat Comunitário */}
        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            Chat Comunitário
          </h2>
          <p className="text-gray-600 mb-4">
            Conecte-se com outras pessoas em um ambiente acolhedor.
          </p>
          <Link href="/chat" className="btn-primary inline-block">
            Entrar no Chat
          </Link>
        </section>
      </div>

      {/* Versículo do Dia */}
      <section className="card border border-primary/20 mt-10 flex flex-col items-center text-center">
        <h2 className="title-section">Versículo do Dia</h2>
        <blockquote className="italic text-text mb-2 text-lg">
          "{versiculo.texto}"
        </blockquote>
        <p className="text-text-muted text-base">- {versiculo.referencia}</p>
      </section>

      <InspiracoesSlider />

      <section className="card mt-10">
        <h2 className="title-section">Frases Inspiradoras</h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 border-primary pl-4">
            <p className="italic text-text">
              "Porque para Deus nada é impossível."
            </p>
            <footer className="text-sm text-text-muted mt-2">
              - Lucas 1:37
            </footer>
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4">
            <p className="italic text-text">
              "Tudo posso naquele que me fortalece."
            </p>
            <footer className="text-sm text-text-muted mt-2">
              - Filipenses 4:13
            </footer>
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4">
            <p className="italic text-text">
              "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará."
            </p>
            <footer className="text-sm text-text-muted mt-2">
              - Salmo 37:5
            </footer>
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4">
            <p className="italic text-text">
              "O Senhor é bom, um refúgio em tempos de angústia."
            </p>
            <footer className="text-sm text-text-muted mt-2">
              - Naum 1:7
            </footer>
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4">
            <p className="italic text-text">
              "A fé é a certeza daquilo que esperamos e a prova das coisas que não vemos."
            </p>
            <footer className="text-sm text-text-muted mt-2">
              - Hebreus 11:1
            </footer>
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4">
            <p className="italic text-text">
              "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto."
            </p>
            <footer className="text-sm text-text-muted mt-2">
              - Isaías 55:6
            </footer>
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4">
            <p className="italic text-text">
              "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia."
            </p>
            <footer className="text-sm text-text-muted mt-2">
              - Salmo 46:1
            </footer>
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4">
            <p className="italic text-text">
              "Espere no Senhor. Seja forte! Coragem! Espere no Senhor."
            </p>
            <footer className="text-sm text-text-muted mt-2">
              - Salmo 27:14
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
} 