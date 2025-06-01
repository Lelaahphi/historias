"use client";
import { useState } from 'react';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    frase: 'Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia. (Salmo 46:1)'
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    frase: 'A fé em Deus nos faz crer no incrível, ver o invisível e realizar o impossível.'
  },
  {
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    frase: 'Espere no Senhor. Seja forte! Coragem! Espere no Senhor. (Salmo 27:14)'
  },
  {
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
    frase: 'O Senhor é meu pastor, nada me faltará. (Salmo 23:1)'
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    frase: 'Tudo posso naquele que me fortalece. (Filipenses 4:13)'
  },
];

export default function InspiracoesSlider() {
  const [atual, setAtual] = useState(0);

  function proximo() {
    setAtual((prev) => (prev + 1) % slides.length);
  }
  function anterior() {
    setAtual((prev) => (prev - 1 + slides.length) % slides.length);
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <div className="relative rounded-3xl overflow-hidden shadow-lg">
        <img
          src={slides[atual].img}
          alt="Inspiração cristã"
          className="w-full h-64 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-6">
          <p className="text-white text-xl md:text-2xl font-semibold text-center drop-shadow-lg">
            {slides[atual].frase}
          </p>
        </div>
        {/* Navegação */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-primary text-primary hover:text-white rounded-full p-2 shadow transition-all"
          onClick={anterior}
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-primary text-primary hover:text-white rounded-full p-2 shadow transition-all"
          onClick={proximo}
          aria-label="Próximo"
        >
          &#8594;
        </button>
        {/* Pontos */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === atual ? 'bg-primary' : 'bg-white/60'} border border-white`}
              onClick={() => setAtual(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 