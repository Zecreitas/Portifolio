import React, { useState } from 'react';
import { Sparkles, Star, Zap, Code, Heart, Menu, X } from 'lucide-react';

/**
 * Sidebar minimalista com logo/iniciais e navegação por ícones.
 * Responsivo: menu hamburger no mobile, sidebar fixa no desktop.
 */
export default function SidebarMenu({ secaoAtiva, setSecaoAtiva }: { secaoAtiva: string, setSecaoAtiva: (s: string) => void }) {
  const [open, setOpen] = useState(false);
  const links = [
    { secao: 'home', icone: Sparkles, label: 'Início' },
    { secao: 'about', icone: Star, label: 'Sobre' },
    { secao: 'skills', icone: Zap, label: 'Habilidades' },
    { secao: 'projects', icone: Code, label: 'Projetos' },
    { secao: 'contact', icone: Heart, label: 'Contato' },
  ];

  // Fecha o menu mobile ao clicar em um link ou fora
  const handleNav = (secao: string) => {
    setSecaoAtiva(secao);
    setOpen(false);
  };

  return (
    <>
      {/* Mobile: Botão hamburger */}
      <button
        className="fixed top-4 left-4 z-[100] p-2 rounded-lg bg-gray-900/80 border border-purple-900/30 shadow-lg sm:hidden"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
      >
        <Menu size={28} className="text-purple-300" />
      </button>

      {/* Overlay mobile */}
      {open && (
        <div className="fixed inset-0 z-[99] bg-black/60 flex" onClick={() => setOpen(false)}>
          <aside
            className="relative h-full w-64 bg-gradient-to-b from-gray-900 via-purple-900/60 to-gray-900 shadow-2xl border-r border-purple-900/30 flex flex-col items-center animate-slideInLeft"
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 p-2 rounded-full hover:bg-purple-900/30" onClick={() => setOpen(false)} aria-label="Fechar menu">
              <X size={24} className="text-purple-300" />
            </button>
            <div className="mt-10 mb-10">
              <span className="text-2xl font-bold text-purple-400 tracking-widest select-none">GS</span>
            </div>
            <nav className="flex flex-col gap-6 mt-2 w-full px-4">
              {links.map(link => (
                <button
                  key={link.secao}
                  onClick={() => handleNav(link.secao)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-purple-700/30 hover:scale-105 w-full cursor-pointer text-left ${secaoAtiva === link.secao ? 'bg-purple-700/40 scale-105 shadow-lg shadow-purple-500/30' : ''}`}
                  aria-label={link.label}
                >
                  <link.icone size={22} className="text-purple-300" />
                  <span className="text-base text-purple-200 font-mono">{link.label}</span>
                </button>
              ))}
            </nav>
            <div className="flex-1" />
          </aside>
        </div>
      )}

      {/* Desktop: Sidebar fixa */}
      <aside className="hidden sm:flex fixed top-0 left-0 h-screen w-20 flex-col items-center bg-gradient-to-b from-gray-900 via-purple-900/60 to-gray-900 shadow-2xl z-50 border-r border-purple-900/30">
        {/* Logo ou iniciais */}
        <div className="mt-8 mb-10">
          <span className="text-2xl font-bold text-purple-400 tracking-widest select-none">GS</span>
        </div>
        {/* Links */}
        <nav className="flex flex-col gap-6 mt-2 w-full">
          {links.map(link => (
            <button
              key={link.secao}
              onClick={() => setSecaoAtiva(link.secao)}
              className={`flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-all duration-300 hover:bg-purple-700/30 hover:scale-105 w-full cursor-pointer ${secaoAtiva === link.secao ? 'bg-purple-700/40 scale-105 shadow-lg shadow-purple-500/30' : ''}`}
              aria-label={link.label}
            >
              <link.icone size={24} className="text-purple-300 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-[11px] text-purple-200 font-mono truncate max-w-full text-center block">{link.label}</span>
            </button>
          ))}
        </nav>
        <div className="flex-1" />
      </aside>
      <style jsx>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
} 