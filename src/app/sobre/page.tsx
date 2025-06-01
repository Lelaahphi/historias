export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="title-main text-center mb-12">Sobre o Histórias com Deus</h1>

      <section className="card mb-10">
        <h2 className="title-section">Nossa Missão</h2>
        <p className="text-text mb-4">
          O Histórias com Deus nasceu com o propósito de criar um espaço
          acolhedor e inspirador onde pessoas possam compartilhar suas
          experiências de fé, encontrar apoio espiritual e construir uma
          comunidade unida pelo amor a Deus.
        </p>
        <p className="text-text">
          Acreditamos que cada história de fé é única e pode inspirar outras
          pessoas em sua jornada espiritual. Nossa missão é facilitar esse
          compartilhamento e criar um ambiente onde todos se sintam bem-vindos
          e acolhidos.
        </p>
      </section>

      <section className="card mb-10">
        <h2 className="title-section">Nossos Valores</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary mr-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-1">Amor e Respeito</h3>
              <p className="text-text">
                Valorizamos o respeito mútuo e o amor ao próximo em todas as
                interações.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary mr-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-1">Inspiração</h3>
              <p className="text-text">
                Buscamos inspirar e ser inspirados através das histórias de
                fé compartilhadas.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary mr-4">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-primary mb-1">Comunidade</h3>
              <p className="text-text">
                Fomentamos um ambiente de apoio mútuo e crescimento espiritual
                em comunidade.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="card">
        <h2 className="title-section">Entre em Contato</h2>
        <p className="text-text mb-4">
          Tem alguma sugestão, dúvida ou quer contribuir com o projeto?
          Entre em contato conosco!
        </p>
        <a
          href="mailto:contato@historiascomdeus.com"
          className="btn-primary inline-block"
        >
          Enviar Mensagem
        </a>
      </section>
    </div>
  )
} 