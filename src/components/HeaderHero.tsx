import React from 'react';

/**
 * Header hero sóbrio e tech, apenas texto centralizado sobre fundo gradiente.
 */
export default function HeaderHero() {
  return (
    <header className="relative w-full h-[220px] flex flex-col items-center justify-center overflow-hidden">
      <h1 className="relative z-10 text-4xl font-anime-title bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2 drop-shadow-lg">
        Guilherme Schuh
      </h1>
      <h2 className="relative z-10 text-lg font-anime-subtitle text-purple-200 mb-2">
        Desenvolvedor Frontend
      </h2>
      <p className="relative z-10 text-center text-gray-200 max-w-xl font-anime-body">
        Portfólio com projetos, habilidades e experiência em tecnologia.
      </p>
    </header>
  );
} 