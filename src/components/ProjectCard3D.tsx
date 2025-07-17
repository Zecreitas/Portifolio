import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  cor: string;
  status: string;
  icone: React.ReactNode;
  funcionalidades: string[];
  demoUrl: string;
  githubUrl: string;
}

/**
 * Card de projeto com efeito 3D/flip ao hover, visual tech/minimalista.
 */
export default function ProjectCard3D({ projeto }: { projeto: Projeto }) {
  return (
    <div className="group perspective h-80 w-full flex flex-col cursor-pointer">
      <div className="relative w-full h-full flex-1 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Frente do card */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/60 to-gray-800 rounded-2xl border border-purple-700 shadow-xl flex flex-col items-center justify-center p-6 backface-hidden">
          {/* Miniatura do projeto ou ícone tech */}
          <div className="w-14 h-14 mb-3 flex items-center justify-center bg-gray-800 rounded-xl border border-purple-700/40">
            {/* Se tiver imagem, use <img src={projeto.imagem} ... /> */}
            <span className="text-2xl text-purple-300">{projeto.icone || <svg width="24" height="24"><circle cx="12" cy="12" r="10" fill="#a78bfa" /></svg>}</span>
          </div>
          <h3 className="text-xl font-anime-title text-purple-200 mb-2 text-center">{projeto.titulo}</h3>
          <p className="text-gray-300 text-center font-anime-body mb-4">{projeto.descricao}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {projeto.tecnologias.map((tech: string, i: number) => (
              <span key={i} className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30 font-mono">{tech}</span>
            ))}
          </div>
        </div>
        {/* Verso do card */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-pink-900/60 to-gray-900 rounded-2xl border border-pink-700 shadow-xl flex flex-col items-center justify-center p-6 rotate-y-180 backface-hidden">
          <h4 className="text-lg font-anime-subtitle text-pink-200 mb-2">Funcionalidades</h4>
          <ul className="text-gray-200 text-sm mb-4 list-disc list-inside">
            {projeto.funcionalidades.map((f: string, i: number) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            projeto.status === 'Concluído' ? 'bg-green-500/20 text-green-400' :
            projeto.status === 'Em Desenvolvimento' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-gray-500/20 text-gray-400'
          }`}>
            {projeto.status}
          </span>
        </div>
      </div>
      {/* Botões de ação fixos na base do card */}
      <div className="flex gap-2 mt-4 justify-center">
        {projeto.demoUrl && projeto.demoUrl.length > 0 && (
          <a
            href={projeto.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg text-sm transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2 cursor-pointer font-medium"
          >
            <ExternalLink size={14} className="transition-transform duration-300 group-hover/btn:rotate-12" />
            Ver Projeto
          </a>
        )}
        <a
          href={projeto.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-gray-300 py-2 px-4 rounded-lg text-sm transition-all duration-300 ease-out transform hover:scale-105 hover:bg-gray-700 hover:text-white hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer font-medium"
        >
          <Github size={14} className="transition-transform duration-300 group-hover/btn:rotate-12" />
          Código
        </a>
      </div>
      <style jsx>{`
        .perspective { perspective: 1200px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
} 