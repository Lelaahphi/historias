"use client";

import { useState } from "react";

const propositos = [
  {
    tipo: "Espiritual",
    lista: [
      {
        titulo: "Orar todos os dias ao acordar e antes de dormir.",
        detalhes: [
          "Reserve um momento silencioso ao acordar e antes de dormir.",
          "Agradeça pelo dia, peça direção e proteção.",
          "Exemplo de oração: Senhor, obrigado por mais um dia. Guia meus passos e guarda meu coração. Amém.",
          "\nOração sugerida: Senhor, que eu nunca me esqueça de falar contigo ao acordar e ao deitar. Que minha vida seja guiada pela Tua presença. Amém."
        ]
      },
      {
        titulo: "Ler um capítulo da Bíblia diariamente.",
        detalhes: [
          "Escolha um horário fixo para a leitura.",
          "Comece pelos Evangelhos ou Salmos se for iniciante.",
          "Ore antes de ler, pedindo entendimento ao Espírito Santo.",
          "\nOração sugerida: Espírito Santo, ilumina minha mente e meu coração para compreender e viver a Tua Palavra. Amém."
        ]
      },
      {
        titulo: "Praticar o perdão e buscar reconciliar relacionamentos.",
        detalhes: [
          "Ore pedindo força para perdoar.",
          "Se possível, converse com a pessoa e busque a reconciliação.",
          "Exemplo de oração: Deus, me ajude a liberar perdão e restaurar relacionamentos.",
          "\nOração sugerida: Senhor, dá-me um coração perdoador e humilde para buscar a reconciliação. Amém."
        ]
      },
      {
        titulo: "Dedicar um tempo semanal para jejum e reflexão.",
        detalhes: [
          "Escolha um dia e horário para jejuar.",
          "Durante o jejum, ore e leia a Bíblia.",
          "O jejum pode ser de alimentos, redes sociais ou outra área que precise de disciplina.",
          "\nExemplos de jejuns bíblicos:",
          "- Jejum de Daniel (Daniel 1:8-16; 10:2-3): abster-se de carnes, doces e vinhos, comendo apenas legumes e bebendo água por 10 ou 21 dias.",
          "- Jejum de Ester (Ester 4:16): jejum total de 3 dias, sem comer nem beber, buscando livramento e intervenção de Deus.",
          "- Jejum de Jesus (Mateus 4:1-2): jejum total de 40 dias, apenas com água, em preparação para o ministério.",
          "- Jejum coletivo em Joel (Joel 2:12-15): convocação de toda a comunidade para jejuar e buscar arrependimento.",
          "- Jejum parcial: abster-se de uma refeição ou de algo específico por um período, dedicando esse tempo à oração.",
          "\nOração sugerida: Deus, fortalece-me durante o jejum e fala ao meu coração. Que eu me aproxime mais de Ti. Amém."
        ]
      },
    ],
  },
  {
    tipo: "Familiar",
    lista: [
      {
        titulo: "Reservar um momento diário para conversar com a família.",
        detalhes: [
          "Desligue eletrônicos e converse olhando nos olhos.",
          "Pergunte como foi o dia de cada um.",
          "Ore junto agradecendo pela família.",
          "\nExemplo bíblico: Josué 24:15 — 'Eu e minha casa serviremos ao Senhor.' Josué liderou sua família e o povo a buscarem a Deus juntos.",
          "\nOração sugerida: Senhor, abençoa minha família e nos una cada vez mais em amor e diálogo. Amém."
        ]
      },
      {
        titulo: "Orar junto com a família pelo menos uma vez por semana.",
        detalhes: [
          "Escolha um dia fixo para a oração em família.",
          "Cada um pode agradecer e pedir por algo.",
          "Exemplo de oração: Senhor, abençoe nossa família, traga união e paz.",
          "\nExemplo bíblico: Atos 10:2 — Cornélio era um homem que orava com toda a sua casa, e Deus ouviu suas orações.",
          "\nOração sugerida: Deus, ensina-nos a buscar Tua presença juntos e a sermos uma família segundo o Teu coração. Amém."
        ]
      },
      {
        titulo: "Demonstrar gratidão e carinho aos familiares todos os dias.",
        detalhes: [
          "Diga 'eu te amo', elogie e agradeça por pequenas coisas.",
          "Faça pequenos gestos de carinho, como um bilhete ou abraço.",
          "\nExemplo bíblico: Efésios 4:32 — 'Sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros.'",
          "\nOração sugerida: Senhor, que eu seja instrumento de amor e gratidão dentro do meu lar. Amém."
        ]
      },
    ],
  },
  {
    tipo: "Profissional",
    lista: [
      {
        titulo: "Buscar excelência e honestidade no trabalho.",
        detalhes: [
          "Faça tudo como se fosse para Deus.",
          "Seja honesto, mesmo quando ninguém está vendo.",
          "Ore antes de começar o expediente: Senhor, me ajude a ser luz no meu trabalho.",
          "\nExemplo bíblico: Colossenses 3:23 — 'Tudo quanto fizerdes, fazei-o de todo o coração, como para o Senhor e não para homens.'",
          "\nOração sugerida: Deus, que eu trabalhe com dedicação, honestidade e alegria, sendo exemplo para todos. Amém."
        ]
      },
      {
        titulo: "Ajudar um colega de trabalho por semana.",
        detalhes: [
          "Ofereça ajuda espontaneamente.",
          "Ore por seus colegas e peça oportunidades para abençoá-los.",
          "\nExemplo bíblico: Atos 20:35 — 'Mais bem-aventurada coisa é dar do que receber.' Paulo ensinou a ajudar os necessitados.",
          "\nOração sugerida: Senhor, usa-me para abençoar meus colegas e ser luz no ambiente de trabalho. Amém."
        ]
      },
      {
        titulo: "Orar antes de tomar decisões importantes no trabalho.",
        detalhes: [
          "Antes de reuniões ou decisões, faça uma oração breve.",
          "Peça sabedoria e discernimento a Deus.",
          "\nExemplo bíblico: Tiago 1:5 — 'Se algum de vós tem falta de sabedoria, peça-a a Deus.'",
          "\nOração sugerida: Deus, dá-me sabedoria e discernimento em cada decisão profissional. Amém."
        ]
      },
    ],
  },
  {
    tipo: "Saúde",
    lista: [
      {
        titulo: "Praticar atividade física pelo menos 3 vezes por semana.",
        detalhes: [
          "Escolha uma atividade que goste: caminhada, dança, esportes.",
          "Convide alguém para te acompanhar e manter a motivação.",
          "Ore pedindo força e disciplina para cuidar do corpo.",
          "\nExemplo bíblico: 1 Coríntios 6:19-20 — 'Vosso corpo é templo do Espírito Santo.' Devemos cuidar do corpo como um presente de Deus.",
          "\nOração sugerida: Senhor, ajuda-me a cuidar do meu corpo com responsabilidade e gratidão. Amém."
        ]
      },
      {
        titulo: "Cuidar da alimentação e beber mais água.",
        detalhes: [
          "Planeje refeições saudáveis.",
          "Leve uma garrafinha de água sempre com você.",
          "Agradeça a Deus pelo alimento antes das refeições.",
          "\nExemplo bíblico: Daniel 1:12-15 — Daniel e seus amigos escolheram uma alimentação saudável e foram abençoados por Deus.",
          "\nOração sugerida: Deus, obrigado pelo alimento e pela saúde. Ajuda-me a fazer boas escolhas todos os dias. Amém."
        ]
      },
      {
        titulo: "Dedicar tempo ao descanso e ao lazer saudável.",
        detalhes: [
          "Separe um tempo para relaxar e fazer algo que gosta.",
          "Evite excesso de trabalho e respeite seus limites.",
          "Ore agradecendo pelo descanso e pela saúde.",
          "\nExemplo bíblico: Êxodo 20:8-10 — O mandamento do sábado ensina a importância do descanso.",
          "\nOração sugerida: Senhor, ensina-me a descansar e confiar em Ti, renovando minhas forças. Amém."
        ]
      },
    ],
  },
  {
    tipo: "Relacionamentos",
    lista: [
      {
        titulo: "Ser mais paciente e ouvir com atenção as pessoas.",
        detalhes: [
          "Pratique a escuta ativa, sem interromper.",
          "Ore pedindo paciência e sabedoria nas conversas.",
          "\nExemplo bíblico: Tiago 1:19 — 'Todo homem seja pronto para ouvir, tardio para falar, tardio para se irar.'",
          "\nOração sugerida: Deus, dá-me paciência e um coração aberto para ouvir e compreender o próximo. Amém."
        ]
      },
      {
        titulo: "Enviar uma mensagem de incentivo para um amigo toda semana.",
        detalhes: [
          "Escolha um dia para enviar uma mensagem ou ligação.",
          "Compartilhe um versículo ou palavra de ânimo.",
          "\nExemplo bíblico: Provérbios 16:24 — 'Palavras agradáveis são como favo de mel: doces para a alma e medicina para o corpo.'",
          "\nOração sugerida: Senhor, usa minhas palavras para abençoar e animar quem está ao meu redor. Amém."
        ]
      },
      {
        titulo: "Evitar julgamentos e praticar a empatia.",
        detalhes: [
          "Coloque-se no lugar do outro antes de reagir.",
          "Ore pedindo um coração compassivo.",
          "\nExemplo bíblico: Mateus 7:1-2 — 'Não julgueis, para que não sejais julgados.' Jesus ensina sobre empatia e misericórdia.",
          "\nOração sugerida: Deus, ensina-me a amar e compreender o próximo, sem julgamentos. Amém."
        ]
      },
    ],
  },
  {
    tipo: "Restauração de Casamento",
    lista: [
      {
        titulo: "Orar diariamente pelo seu casamento e pelo cônjuge.",
        detalhes: [
          "Separe um momento do dia para interceder pelo seu casamento.",
          "Ore pedindo restauração, amor, perdão e unidade.",
          "\nExemplo bíblico: Marcos 10:9 — 'Portanto, o que Deus uniu, ninguém o separe.'",
          "\nOração sugerida: Senhor, restaura o nosso casamento, renova o amor e a cumplicidade entre nós. Que possamos Te buscar juntos. Amém."
        ]
      },
      {
        titulo: "Praticar o perdão e buscar reconciliação.",
        detalhes: [
          "Reconheça erros, peça perdão e esteja disposto a perdoar.",
          "Converse com o cônjuge de forma amorosa e aberta.",
          "\nExemplo bíblico: Efésios 4:32 — 'Sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros.'",
          "\nOração sugerida: Deus, dá-nos um coração perdoador e humilde para recomeçar e reconstruir nossa história. Amém."
        ]
      },
      {
        titulo: "Buscar aconselhamento cristão ou pastoral.",
        detalhes: [
          "Procure um líder espiritual, pastor ou conselheiro cristão de confiança.",
          "Participe de encontros, retiros ou grupos de casais na igreja.",
          "\nExemplo bíblico: Provérbios 15:22 — 'Onde não há conselho, frustram-se os projetos, mas com a multidão de conselheiros se estabelecem.'",
          "\nOração sugerida: Senhor, guia-nos a buscar ajuda sábia e abençoa aqueles que nos orientam segundo a Tua vontade. Amém."
        ]
      },
      {
        titulo: "Demonstrar amor com atitudes diárias.",
        detalhes: [
          "Faça pequenos gestos de carinho, atenção e cuidado.",
          "Elogie, agradeça e valorize o cônjuge.",
          "\nExemplo bíblico: 1 Coríntios 13:4-7 — 'O amor é paciente, é benigno... tudo sofre, tudo crê, tudo espera, tudo suporta.'",
          "\nOração sugerida: Deus, ensina-me a amar de verdade, com atitudes e palavras que edificam meu casamento. Amém."
        ]
      },
    ],
  },
  {
    tipo: "Finanças",
    lista: [
      {
        titulo: "Ser fiel nos dízimos e ofertas.",
        detalhes: [
          "Separe a primeira parte do que recebe para Deus.",
          "Ore agradecendo e consagrando suas finanças.",
          "\nExemplo bíblico: Malaquias 3:10 — 'Trazei todos os dízimos à casa do tesouro.'",
          "\nOração sugerida: Senhor, tudo o que tenho vem de Ti. Ajuda-me a ser fiel e generoso. Amém."
        ]
      },
      {
        titulo: "Planejar e administrar o orçamento com sabedoria.",
        detalhes: [
          "Anote receitas e despesas, evite dívidas desnecessárias.",
          "Ore pedindo direção para usar bem os recursos.",
          "\nExemplo bíblico: Provérbios 21:5 — 'Os planos do diligente tendem à abundância.'",
          "\nOração sugerida: Deus, dá-me sabedoria para administrar bem o que recebo. Amém."
        ]
      },
      {
        titulo: "Ajudar quem está em necessidade.",
        detalhes: [
          "Separe uma parte para ajudar alguém ou uma causa.",
          "Doe com alegria, sem esperar nada em troca.",
          "\nExemplo bíblico: 2 Coríntios 9:7 — 'Deus ama a quem dá com alegria.'",
          "\nOração sugerida: Senhor, usa-me para abençoar outras vidas com generosidade. Amém."
        ]
      },
    ],
  },
  {
    tipo: "Estudos/Aprendizado",
    lista: [
      {
        titulo: "Dedicar tempo diário aos estudos.",
        detalhes: [
          "Separe um horário fixo para estudar.",
          "Ore antes de começar, pedindo concentração e entendimento.",
          "\nExemplo bíblico: Provérbios 4:7 — 'A sabedoria é a coisa principal.'",
          "\nOração sugerida: Deus, abençoa meus estudos e me dá entendimento para crescer. Amém."
        ]
      },
      {
        titulo: "Buscar aprender algo novo todo mês.",
        detalhes: [
          "Escolha um tema, livro ou habilidade para desenvolver.",
          "Compartilhe o que aprender com alguém.",
          "\nExemplo bíblico: Daniel 1:17 — 'Deus deu a estes jovens conhecimento e inteligência.'",
          "\nOração sugerida: Senhor, abre minha mente para aprender e usar o conhecimento para o bem. Amém."
        ]
      },
      {
        titulo: "Estudar a Bíblia com profundidade.",
        detalhes: [
          "Use devocionais, comentários ou participe de grupos de estudo.",
          "Anote dúvidas e busque respostas na Palavra.",
          "\nExemplo bíblico: Salmo 119:105 — 'Lâmpada para os meus pés é a tua palavra.'",
          "\nOração sugerida: Espírito Santo, revela-me os segredos da Tua Palavra. Amém."
        ]
      },
    ],
  },
  {
    tipo: "Missões/Evangelismo",
    lista: [
      {
        titulo: "Orar por missionários e povos não alcançados.",
        detalhes: [
          "Inclua missões em suas orações diárias.",
          "Ore por proteção, provisão e frutos para os missionários.",
          "\nExemplo bíblico: Mateus 9:37-38 — 'A seara é grande, mas poucos os trabalhadores.'",
          "\nOração sugerida: Senhor, envia trabalhadores e abençoa os missionários pelo mundo. Amém."
        ]
      },
      {
        titulo: "Compartilhar o evangelho com alguém toda semana.",
        detalhes: [
          "Fale do amor de Jesus para amigos, colegas ou familiares.",
          "Ore antes de conversar, pedindo ousadia e sabedoria.",
          "\nExemplo bíblico: Marcos 16:15 — 'Ide por todo o mundo e pregai o evangelho.'",
          "\nOração sugerida: Deus, dá-me coragem e palavras certas para falar do Teu amor. Amém."
        ]
      },
      {
        titulo: "Apoiar projetos missionários com recursos ou tempo.",
        detalhes: [
          "Doe, ore ou participe de ações missionárias em sua igreja.",
          "Envolva-se em campanhas de arrecadação ou visitas.",
          "\nExemplo bíblico: Filipenses 4:16 — Paulo agradece à igreja pelo apoio em missões.",
          "\nOração sugerida: Senhor, usa minha vida para apoiar e sustentar missões. Amém."
        ]
      },
    ],
  },
  {
    tipo: "Vida Emocional",
    lista: [
      {
        titulo: "Buscar equilíbrio emocional e paz interior.",
        detalhes: [
          "Separe momentos de silêncio e oração para acalmar o coração.",
          "Procure ajuda se sentir ansiedade ou tristeza constante.",
          "\nExemplo bíblico: Filipenses 4:6-7 — 'Não andeis ansiosos... a paz de Deus guardará o vosso coração.'",
          "\nOração sugerida: Deus, acalma meu coração e me dá paz em meio às dificuldades. Amém."
        ]
      },
      {
        titulo: "Praticar gratidão diariamente.",
        detalhes: [
          "Anote motivos de gratidão todos os dias.",
          "Agradeça a Deus por pequenas e grandes bênçãos.",
          "\nExemplo bíblico: 1 Tessalonicenses 5:18 — 'Em tudo dai graças.'",
          "\nOração sugerida: Senhor, abre meus olhos para enxergar Tuas bênçãos e ser grato sempre. Amém."
        ]
      },
      {
        titulo: "Buscar restauração de emoções feridas.",
        detalhes: [
          "Ore pedindo cura interior e liberação de mágoas.",
          "Converse com alguém de confiança ou um conselheiro cristão.",
          "\nExemplo bíblico: Salmo 147:3 — 'Sara os quebrantados de coração.'",
          "\nOração sugerida: Senhor, cura minhas feridas emocionais e renova minha alegria. Amém."
        ]
      },
    ],
  },
  {
    tipo: "Serviço/Voluntariado",
    lista: [
      {
        titulo: "Servir na igreja ou comunidade.",
        detalhes: [
          "Procure uma área para ajudar: música, recepção, limpeza, ensino, etc.",
          "Sirva com alegria, sem esperar reconhecimento.",
          "\nExemplo bíblico: 1 Pedro 4:10 — 'Cada um exerça o dom que recebeu para servir aos outros.'",
          "\nOração sugerida: Deus, usa-me para servir com amor e dedicação, abençoando vidas. Amém."
        ]
      },
      {
        titulo: "Praticar atos de bondade no dia a dia.",
        detalhes: [
          "Ajude um vizinho, faça uma doação, ouça alguém que precisa.",
          "Busque oportunidades para fazer o bem.",
          "\nExemplo bíblico: Gálatas 6:9 — 'Não nos cansemos de fazer o bem.'",
          "\nOração sugerida: Senhor, que eu seja instrumento do Teu amor através de boas ações. Amém."
        ]
      },
      {
        titulo: "Dedicar tempo para ouvir e apoiar pessoas.",
        detalhes: [
          "Esteja disponível para ouvir sem julgar.",
          "Ore com e pelas pessoas que buscam apoio.",
          "\nExemplo bíblico: Romanos 12:15 — 'Alegrai-vos com os que se alegram e chorai com os que choram.'",
          "\nOração sugerida: Deus, dá-me sensibilidade para apoiar e consolar quem precisa. Amém."
        ]
      },
    ],
  },
];

import { Fragment, useRef } from "react";

export default function PropositosPage() {
  const [modalAberto, setModalAberto] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="title-main text-center mb-12">Propósitos</h1>
      <section className="card mb-10">
        <h2 className="title-section">Propósitos para Inspirar sua Jornada</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propositos.map((grupo, idx) => (
            <button
              key={idx}
              className="bg-white rounded-lg shadow p-6 flex flex-col text-left hover:shadow-lg transition-all border border-primary/10 focus:outline-none"
              onClick={() => setModalAberto(idx)}
            >
              <span className="text-xl font-bold text-primary mb-2">{grupo.tipo}</span>
              <ul className="list-disc list-inside space-y-1 text-text text-base">
                {grupo.lista.slice(0, 2).map((item, i) => (
                  <li key={i}>{item.titulo}</li>
                ))}
                {grupo.lista.length > 2 && (
                  <li className="text-text-muted">e mais...</li>
                )}
              </ul>
            </button>
          ))}
        </div>
      </section>

      {/* Modal detalhado */}
      {modalAberto !== null && (
        <div ref={modalRef} className="w-full max-w-5xl mx-auto mt-8 mb-8 bg-white border border-primary rounded-lg shadow-lg p-8 animate-fade-in flex flex-col md:flex-row gap-8">
          {/* Detalhes à esquerda */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-primary mb-4">{propositos[modalAberto].tipo}</h3>
            {propositos[modalAberto].lista.map((item, i) => (
              <Fragment key={i}>
                <p className="font-semibold text-lg text-text mb-1 mt-4">{item.titulo}</p>
                <ul className="list-disc list-inside ml-4 text-text-muted mb-2">
                  {item.detalhes.filter(det => !det.startsWith('\nOração sugerida')).map((det, j) => (
                    <li key={j}>{det}</li>
                  ))}
                </ul>
              </Fragment>
            ))}
            <button
              className="mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-all"
              onClick={() => setModalAberto(null)}
            >
              Fechar
            </button>
          </div>
          {/* Orações à direita */}
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <div className="bg-primary/10 border border-primary rounded-lg p-4">
              <h4 className="font-bold text-primary mb-2 text-center">Orações para este propósito</h4>
              {propositos[modalAberto].lista.map((item, i) => (
                <div key={i} className="mb-4">
                  <p className="font-semibold text-text mb-1">{item.titulo}</p>
                  {item.detalhes.filter(det => det.startsWith('\nOração sugerida')).map((det, j) => (
                    <p key={j} className="italic text-text-muted text-sm">{det.replace('\nOração sugerida: ', '')}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 