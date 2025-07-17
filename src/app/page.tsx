'use client';
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import SidebarMenu from '../components/SidebarMenu';
import HeaderHero from '../components/HeaderHero';
import ProjectCard3D from '../components/ProjectCard3D';
import DashboardWidget from '../components/DashboardWidget';
import Timeline from '../components/Timeline';
import SkillsSection from '../components/SkillsSection';
import { habilidades, Habilidade } from '../data/skills';
import { projetos } from '../data/projects';
import { conquistas } from '../data/achievements';
import { linksSociais } from '../data/socialLinks';
import { Projeto } from '../data/types';
import { ExternalLink, Github, Zap, Server, Paintbrush, GitBranch, Users, MonitorSmartphone, Code, Database, Figma as FigmaIcon, ClipboardList, NotebookPen, KanbanSquare, Terminal, Download, Star, Heart, Mail, Linkedin } from 'lucide-react';

// Definição dos tipos para partículas, habilidades, projetos, conquistas e links sociais

type Particula = {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
  type: string;
  rotation: number;
  color: 'purple' | 'pink' | 'cyan' | 'yellow';
};

type Conquista = {
  titulo: string;
  data: string;
  icone: string;
};

type LinkSocial = {
  icone: React.ElementType;
  label: string;
  url: string;
  cor: string;
};

// Componente principal do portfólio
const Portfolio = () => {
  // Estado para controlar se o componente foi montado no cliente
  const [mounted, setMounted] = useState<boolean>(false);
  // Estado para controlar a seção ativa do menu
  const [secaoAtiva, setSecaoAtiva] = useState<string>('home');
  // Estado para a posição do mouse (efeito visual)
  const [posicaoMouse, setPosicaoMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  // Estado para tela de carregamento
  const [carregando, setCarregando] = useState<boolean>(true);
  // Estado para efeito de digitação do título
  const [textoDigitando, setTextoDigitando] = useState<string>('');
  // Estado para o relógio do sistema
  const [horaAtual, setHoraAtual] = useState<Date | null>(null);
  // Estado para efeito glitch no título
  const [efeitoGlitch, setEfeitoGlitch] = useState<boolean>(false);
  // Estado para hover de cada habilidade
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const canvasRef = useRef(null);
  const textoTitulo = "Guilherme Schuh • Desenvolvedor Frontend";

  // Efeito para marcar o componente como montado
  useEffect(() => {
    setMounted(true);
    // Suprimir warnings de hydration causados por extensões
    const originalError = console.error;
    console.error = (...args) => {
      const message = args[0];
      if (typeof message === 'string' && 
          (message.includes('hydration') || 
           message.includes('cz-shortcut-listen') ||
           message.includes('server rendered HTML'))) {
        return;
      }
      originalError.apply(console, args);
    };
    return () => { console.error = originalError; };
  }, []);

  // Efeito de digitação do título
  useEffect(() => {
    if (!mounted) return;
    let i = 0;
    const timer = setInterval(() => {
      setTextoDigitando(textoTitulo.slice(0, i));
      i++;
      if (i > textoTitulo.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [mounted]);

  // Efeito para atualizar o relógio do sistema
  useEffect(() => {
    if (!mounted) return;
    setHoraAtual(new Date());
    const timer = setInterval(() => setHoraAtual(new Date()), 1000);
    return () => clearInterval(timer);
  }, [mounted]);

  // Efeito para tela de carregamento
  useEffect(() => {
    if (!mounted) return;
    const timer = setTimeout(() => setCarregando(false), 3000);
    return () => clearTimeout(timer);
  }, [mounted]);

  // Geração de partículas animadas (usando useMemo para evitar re-criação)
  const particulas = useMemo(() => {
    if (!mounted) return [];
    const tiposParticula = ['star', 'circle', 'triangle', 'sakura'];
    const cores: Array<'purple' | 'pink' | 'cyan' | 'yellow'> = ['purple', 'pink', 'cyan', 'yellow'];
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 3 + 1,
      size: Math.random() * 6 + 2,
      opacity: Math.random() * 0.8 + 0.2,
      type: tiposParticula[Math.floor(Math.random() * tiposParticula.length)],
      rotation: Math.random() * 360,
      color: cores[Math.floor(Math.random() * cores.length)],
    }));
  }, [mounted]);

  // Efeito de trilha do mouse
  useEffect(() => {
    if (!mounted) return;
    const handleMouseMove = (e: MouseEvent) => {
      setPosicaoMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted]);

  // Efeito glitch periódico no título
  useEffect(() => {
    if (!mounted) return;
    const glitchInterval = setInterval(() => {
      setEfeitoGlitch(true);
      setTimeout(() => setEfeitoGlitch(false), 200);
    }, 15000);
    return () => clearInterval(glitchInterval);
  }, [mounted]);

  // Habilidades principais
  // const habilidades: Habilidade[] = [...];
  // Projetos de exemplo
  // const projetos: Projeto[] = [...];
  // Conquistas
  // const conquistas: Conquista[] = [...];
  // Links sociais
  // const linksSociais: LinkSocial[] = [...];

  // Função para simular som ao passar o mouse
  const tocarSomHover = useCallback(() => {
    // Removido efeito de som
  }, []);

  const NavButton = useCallback(({ secao, icone: Icon, label, isActive }: { secao: string; icone: React.ElementType; label: string; isActive: boolean }) => (
    <button
      onClick={() => {
        setSecaoAtiva(secao);
        tocarSomHover();
      }}
      onMouseEnter={tocarSomHover}
      className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl ${
        isActive 
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50' 
          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white hover:shadow-purple-500/25'
      }`}
    >
      <div className="flex items-center gap-2">
        <Icon size={16} className="transition-transform duration-300 group-hover:rotate-12" />
        <span>{label}</span>
      </div>
      {isActive && (
        <>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        </>
      )}
    </button>
  ), [tocarSomHover]);

  const SkillBar = ({ skill, index }: { skill: Habilidade; index: number }) => (
    <div
      className={`mb-6 group cursor-pointer ${hoveredSkill === index ? 'z-10' : ''}`}
      onMouseEnter={() => setHoveredSkill(index)}
      onMouseLeave={() => setHoveredSkill(null)}
      style={{ cursor: 'pointer' }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className={`text-2xl transition-transform duration-300 ${hoveredSkill === index ? 'scale-110 rotate-12' : ''}`}>{iconMap[skill.icone] || <Zap size={24} />}</span>
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

  const ProjectCard = useCallback(({ project, index }: { project: Projeto; index: number }) => (
    <div className="group relative h-full cursor-pointer" style={{ cursor: 'pointer' }}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
      <div className="relative bg-gray-900/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 ease-out transform group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-purple-500/25 h-full flex flex-col">
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.cor} rounded-full blur-xl opacity-30 transition-all duration-500 group-hover:opacity-50 group-hover:scale-110`} />
        
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">{project.icone}</span>
          <div>
            <h3 className="text-xl font-anime-title transition-colors duration-300 group-hover:text-purple-300">{project.titulo}</h3>
            <span className={`text-xs px-2 py-1 rounded-full transition-all duration-300 ${
              project.status === 'Concluído' ? 'bg-green-500/20 text-green-400 group-hover:bg-green-500/30' :
              project.status === 'Em Desenvolvimento' ? 'bg-yellow-500/20 text-yellow-400 group-hover:bg-yellow-500/30' :
              'bg-gray-500/20 text-gray-400 group-hover:bg-gray-500/30'
            }`}>
              {project.status}
            </span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4 flex-grow transition-colors duration-300 group-hover:text-gray-200 font-anime-body">{project.descricao}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-anime-subtitle text-purple-300 mb-2 transition-colors duration-300 group-hover:text-purple-200">Funcionalidades:</h4>
          <div className="grid grid-cols-2 gap-1">
            {project.funcionalidades.map((feature: string, featureIndex: number) => (
              <span key={featureIndex} className="text-xs text-gray-400 transition-colors duration-300 group-hover:text-gray-300">• {feature}</span>
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tecnologias.map((tech: string, techIndex: number) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 transition-all duration-300 group-hover:bg-purple-500/30 group-hover:border-purple-400/50 group-hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 mt-auto">
          <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg text-sm transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2 group/btn cursor-pointer">
            <ExternalLink size={14} className="transition-transform duration-300 group-hover/btn:rotate-12" />
            Ver Demo
          </button>
          <button className="bg-gray-800 text-gray-300 py-2 px-4 rounded-lg text-sm transition-all duration-300 ease-out transform hover:scale-105 hover:bg-gray-700 hover:text-white hover:shadow-lg flex items-center justify-center gap-2 group/btn cursor-pointer">
            <Github size={14} className="transition-transform duration-300 group-hover/btn:rotate-12" />
            Código
          </button>
        </div>
      </div>
    </div>
  ), []);

  const ParticleComponent = useCallback(({ particle }: { particle: Particula }) => {
    const particleStyle = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      opacity: particle.opacity,
      transform: `rotate(${particle.rotation}deg)`,
      animation: `float ${particle.speed}s ease-in-out infinite alternate, rotate 10s linear infinite`,
    };

    const colorClasses = {
      purple: 'from-purple-500 to-purple-600',
      pink: 'from-pink-500 to-pink-600',
      cyan: 'from-cyan-500 to-cyan-600',
      yellow: 'from-yellow-500 to-yellow-600',
    };

    if (particle.type === 'star') {
      return (
        <div className="absolute pointer-events-none" style={particleStyle}>
          <div className={`w-full h-full bg-gradient-to-r ${colorClasses[particle.color]} star-shape`} />
        </div>
      );
    }

    return (
      <div
        className={`absolute rounded-full bg-gradient-to-r ${colorClasses[particle.color]} animate-pulse pointer-events-none`}
        style={particleStyle}
      />
    );
  }, []);

  // Arrays para especialidades e ferramentas (fora do renderSection)
  const especialidades: { label: string; icon: React.ReactNode }[] = [
    { label: 'Front-end: React, React Native, JavaScript, Tailwind CSS', icon: <Zap size={16} className="text-cyan-400" /> },
    { label: 'Back-end: Node.js, Express, MongoDB', icon: <Server size={16} className="text-green-400" /> },
    { label: 'Design: UX/UI Design, Figma', icon: <Paintbrush size={16} className="text-pink-400" /> },
    { label: 'Versionamento: Git, Trello, Notion', icon: <GitBranch size={16} className="text-orange-400" /> },
    { label: 'Metodologias Ágeis: Scrum, Kanban', icon: <Users size={16} className="text-purple-400" /> },
    { label: 'Infraestrutura e Suporte Técnico', icon: <MonitorSmartphone size={16} className="text-gray-400" /> },
  ];
  const ferramentas: { label: string; icon: React.ReactNode }[] = [
    { label: 'React', icon: <Zap size={14} className="text-cyan-400" /> },
    { label: 'React Native', icon: <MonitorSmartphone size={14} className="text-purple-400" /> },
    { label: 'JavaScript', icon: <Code size={14} className="text-yellow-400" /> },
    { label: 'Tailwind CSS', icon: <Paintbrush size={14} className="text-cyan-300" /> },
    { label: 'Node.js', icon: <Server size={14} className="text-green-400" /> },
    { label: 'Express', icon: <Server size={14} className="text-gray-400" /> },
    { label: 'MongoDB', icon: <Database size={14} className="text-green-700" /> },
    { label: 'Figma', icon: <FigmaIcon size={14} className="text-pink-400" /> },
    { label: 'Git', icon: <GitBranch size={14} className="text-orange-400" /> },
    { label: 'Trello', icon: <ClipboardList size={14} className="text-blue-400" /> },
    { label: 'Notion', icon: <NotebookPen size={14} className="text-gray-400" /> },
    { label: 'Scrum', icon: <Users size={14} className="text-purple-400" /> },
    { label: 'Kanban', icon: <KanbanSquare size={14} className="text-green-400" /> },
    { label: 'Expo', icon: <Zap size={14} className="text-cyan-500" /> },
    { label: 'Vite', icon: <Zap size={14} className="text-yellow-500" /> },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    zap: <Zap size={24} className="text-cyan-400" />,
    code: <Code size={24} className="text-yellow-400" />,
    server: <Server size={24} className="text-green-400" />,
    monitorSmartphone: <MonitorSmartphone size={24} className="text-purple-400" />,
    paintbrush: <Paintbrush size={24} className="text-cyan-300" />,
    database: <Database size={24} className="text-green-700" />,
    figma: <FigmaIcon size={24} className="text-pink-400" />,
    gitBranch: <GitBranch size={24} className="text-orange-400" />,
    clipboardList: <ClipboardList size={24} className="text-blue-400" />,
    notebookPen: <NotebookPen size={24} className="text-gray-400" />,
    kanbanSquare: <KanbanSquare size={24} className="text-green-400" />,
    users: <Users size={24} className="text-purple-400" />,
  };

  // Tela de carregamento
  if (carregando) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        {/* Tela de carregamento animada */}
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <div className="text-2xl font-bold text-white mb-2">Carregando...</div>
            <div className="text-purple-400">Inicializando experiência</div>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    );
  }

  // Função para renderizar a seção ativa
  function renderSection() {
    if (secaoAtiva === 'projects') {
      return (
        <section className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-12 pt-8 md:pt-10 pb-8 w-full">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl font-anime-title text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projetos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
              {projetos.map((projeto, index) => (
                <ProjectCard3D key={index} projeto={projeto} />
              ))}
            </div>
          </div>
        </section>
      );
    }
    if (secaoAtiva === 'home') {
      return (
        <section className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-12 pt-8 md:pt-10 pb-8 w-full">
          <div className="text-center w-full max-w-4xl mx-auto">
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-48 h-48 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-1">
                <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center relative overflow-hidden">
                  <Terminal size={64} className="text-white z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
                </div>
              </div>
            </div>
            
            <h1 className={`text-6xl font-anime-title mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent ${efeitoGlitch ? 'animate-pulse' : ''}`}>
              Guilherme Schuh
            </h1>
            
            <div className="h-8 mb-6">
              <p className="text-2xl text-gray-300 font-code">
                {textoDigitando}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-anime-body">
              Sou desenvolvedor frontend com formação técnica em Informática integrada ao ensino médio pela ETE Monteiro Lobato (CIMOL). Tenho experiência prática em desenvolvimento web e mobile, com foco em React.js, React Native, JavaScript, Node.js e Express.js, adquirida por meio de projetos pessoais e acadêmicos. Busco oportunidades para aplicar meus conhecimentos em novos desafios, contribuir com soluções criativas e continuar evoluindo como profissional da área de tecnologia.
            </p>
            
            <div className="flex gap-4 justify-center mb-8">
              <button 
                onClick={() => setSecaoAtiva('projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Code size={18} className="transition-transform duration-300 group-hover:rotate-12" />
                  Ver Projetos
                </span>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </button>
              
              <a
                href="/curriculo-guilherme.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border-2 border-purple-500 rounded-full font-medium transition-all duration-500 ease-out transform hover:scale-105 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2 cursor-pointer"
              >
                <Download size={18} className="transition-transform duration-300 group-hover:rotate-12" />
                Baixar CV
              </a>
            </div>
            
            <div className="flex justify-center gap-6">
              {linksSociais.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className={`text-gray-400 ${link.cor} transition-all duration-500 ease-out transform hover:scale-125 hover:rotate-12 cursor-pointer`}
                  aria-label={link.label}
                >
                  <link.icone size={24} />
                </a>
              ))}
            </div>
          </div>
        </section>
      );
    }
    if (secaoAtiva === 'about') {
      return (
        <section className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-12 pt-8 md:pt-10 pb-8 w-full">
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-4xl font-anime-title text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              <Star className="inline mr-2" size={32} />
              Sobre Mim
            </h2>
            {/* Timeline de conquistas/experiência */}
            <div className="mb-12 px-2 md:px-0">
              <Timeline />
            </div>
            {/* ...restante do conteúdo do about... */}
          </div>
        </section>
      );
    }
    if (secaoAtiva === 'skills') {
      return (
        <SkillsSection 
          habilidades={habilidades}
          especialidades={especialidades}
          ferramentas={ferramentas}
          hoveredSkill={hoveredSkill}
          setHoveredSkill={setHoveredSkill}
        />
      );
    }
    if (secaoAtiva === 'contact') {
      return (
        <section className="min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 lg:px-12 pb-8 w-full">
          <div className="w-full max-w-4xl mx-auto">
            <h2 className="text-4xl font-anime-title text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              <Heart className="inline mr-2" size={32} />
              Vamos Conversar!
            </h2>
            <div className="flex justify-center">
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 max-w-md w-full">
                <h3 className="text-2xl font-anime-subtitle mb-6 text-white">Entre em Contato</h3>
                <p className="text-gray-300 mb-6 font-anime-body">
                  Interessado em trabalhar juntos? Vamos criar algo incrível! 
                  Estou sempre aberto a novos projetos e oportunidades.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:schuh.gui@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                  >
                    <Mail className="text-purple-400" size={20} />
                    <span>schuh.gui@gmail.com</span>
                  </a>
                  <a
                    href="https://github.com/Zecreitas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                  >
                    <Github className="text-purple-400" size={20} />
                    <span>github.com/Zecreitas</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/guilhermeschuh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                  >
                    <Linkedin className="text-purple-400" size={20} />
                    <span>linkedin.com/in/guilhermeschuh</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white relative overflow-hidden">
      {/* Sidebar animada */}
      <SidebarMenu secaoAtiva={secaoAtiva} setSecaoAtiva={setSecaoAtiva} />

      {/* Container principal com padding da sidebar */}
      <div className="pl-0 sm:pl-0 md:pl-24">
        {/* Header hero criativo */}
        <div className="pt-8 md:pt-12 max-w-6xl mx-auto">
          <HeaderHero />
          {/* Mini dashboard de status */}
          <div className="mt-8 mb-8">
            <DashboardWidget />
          </div>
        </div>

        {/* Fundo animado de partículas */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {particulas.map((particle) => (
            <ParticleComponent key={particle.id} particle={particle} />
          ))}
        </div>

        {/* Efeito de trilha do mouse */}
        <div 
          className="fixed pointer-events-none z-10"
          style={{
            left: posicaoMouse.x - 10,
            top: posicaoMouse.y - 10,
            width: '20px',
            height: '20px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 70%)',
            borderRadius: '50%',
            transition: 'transform 0.1s ease-out',
          }}
        />

        {/* System UI: Relógio do sistema */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
          <div className="bg-gray-900/80 backdrop-blur-md rounded-lg p-3 border border-gray-800">
            <div className="text-xs text-gray-400 mb-1">Hora do Sistema</div>
            <div className="text-sm font-mono text-purple-400">
              {mounted && horaAtual ? horaAtual.toLocaleTimeString() : '--:--:--'}
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <main className="relative z-10 pt-4 md:pt-8">
          {renderSection()}
        </main>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .star-shape {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;