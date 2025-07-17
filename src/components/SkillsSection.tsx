import React from 'react';
import { Zap, Layers, LayoutDashboard } from 'lucide-react';

interface Habilidade {
  nome: string;
  nivel: number;
  cor: string;
  icone: React.ReactNode;
}

interface SkillsSectionProps {
  habilidades: Habilidade[];
  especialidades: { label: string; icon: React.ReactNode }[];
  ferramentas: { label: string; icon: React.ReactNode }[];
  hoveredSkill: number | null;
  setHoveredSkill: (index: number | null) => void;
}

const SkillBar = ({ skill, index, hoveredSkill, setHoveredSkill }: { skill: Habilidade; index: number; hoveredSkill: number | null; setHoveredSkill: (index: number | null) => void }) => (
  <div
    className={`mb-6 group cursor-pointer ${hoveredSkill === index ? 'z-10' : ''}`}
    onMouseEnter={() => setHoveredSkill(index)}
    onMouseLeave={() => setHoveredSkill(null)}
    style={{ cursor: 'pointer' }}
  >
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <span className={`text-2xl transition-transform duration-300 ${hoveredSkill === index ? 'scale-110 rotate-12' : ''}`}>{skill.icone}</span>
        <span className={`font-medium text-white transition-colors duration-300 ${hoveredSkill === index ? 'text-purple-300' : ''}`}>{skill.nome}</span>
      </div>
      <span className={`text-sm text-gray-300 font-mono transition-all duration-300 ${hoveredSkill === index ? 'text-purple-400 scale-110' : ''}`}>{skill.nivel}%</span>
    </div>
    <div className={`relative h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-700 transition-all duration-300 ${hoveredSkill === index ? 'border-purple-500/50 shadow-lg shadow-purple-500/25' : ''}`}>
      <div 
        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.cor} rounded-full transition-all duration-1000 ease-out relative`}
        style={{ 
          width: `${skill.nivel}%`,
          animationDelay: `${index * 0.2}s`
        }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
    </div>
  </div>
);

const SkillsSection: React.FC<SkillsSectionProps> = ({ habilidades, especialidades, ferramentas, hoveredSkill, setHoveredSkill }) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-12 pt-8 md:pt-10 pb-8 w-full">
    <div className="w-full max-w-5xl mx-auto">
      <h2 className="text-4xl font-anime-title text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        <Zap className="inline mr-2" size={32} />
        Habilidades
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-anime-subtitle mb-6 text-white flex items-center gap-2">
            <Zap size={20} className="text-cyan-400" />
            Tecnologias
          </h3>
          {habilidades.map((skill, index) => (
            <SkillBar key={skill.nome} skill={skill} index={index} hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
          ))}
        </div>
        <div className="space-y-6">
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-anime-subtitle mb-4 text-white flex items-center gap-2">
              <Layers size={20} className="text-purple-400" />
              Especialidades
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {especialidades.map((esp, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-800/50 p-3 rounded-lg">
                  {esp.icon}
                  <span className="text-gray-300 text-sm">{esp.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-anime-subtitle mb-4 text-white flex items-center gap-2">
              <LayoutDashboard size={20} className="text-pink-400" />
              Ferramentas
            </h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {ferramentas.map((ferramenta, index) => (
                <span key={index} className="flex items-center gap-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                  {ferramenta.icon}
                  {ferramenta.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection; 