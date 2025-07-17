import React from 'react';
import { Briefcase, GraduationCap, Award, Laptop2 } from 'lucide-react';

// Dados de conquistas/experiência
const eventos = [
  {
    ano: '2025',
    titulo: 'Estágio em Suporte Técnico – Prefeitura de Sapiranga',
    descricao: 'Atendimento remoto a servidores, manutenção de computadores, organização de chamados e suporte em infraestrutura de redes. Desenvolvi habilidades em comunicação, resolução de problemas e trabalho em equipe.',
    icone: <Briefcase size={20} className="text-purple-400" />,
  },
  {
    ano: '2021–2024',
    titulo: 'Curso Técnico em Informática – CIMOL',
    descricao: 'Formação técnica integrada ao ensino médio, com foco em desenvolvimento web e mobile. Aprofundamento em programação, banco de dados, redes e design de interfaces.',
    icone: <GraduationCap size={20} className="text-pink-400" />,
  },
  {
    ano: '2022–2025',
    titulo: 'Projetos Pessoais e Acadêmicos',
    descricao: 'Desenvolvimento de aplicações web e mobile com React, React Native, Node.js, PHP e MongoDB. Uso de metodologias ágeis e ferramentas como Figma, Git, Trello e Notion.',
    icone: <Laptop2 size={20} className="text-cyan-400" />,
  },
  {
    ano: '2023',
    titulo: '3º lugar na FEMIC – Categoria Saúde e Bem-Estar',
    descricao: 'Reconhecimento em feira científica com aplicativo voltado à convivência com pessoas diagnosticadas com Alzheimer. Envolveu pesquisa, desenvolvimento e apresentação do projeto.',
    icone: <Award size={20} className="text-yellow-400" />,
  },
];


/**
 * Timeline vertical de conquistas/experiência.
 */
export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-2xl px-4 -ml-4">
      {/* Linha vertical */}
      <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full" />
      <ul className="space-y-10">
        {eventos.map((evento, i) => (
          <li key={i} className="relative flex items-center gap-4">
            {/* Ícone alinhado ao centro do texto */}
            <div className="flex-shrink-0 z-10 bg-gray-900 border-2 border-purple-500 rounded-full p-2 shadow-lg flex items-center justify-center" style={{ marginLeft: '-12px' }}>
              {evento.icone}
            </div>
            {/* Texto do evento levemente afastado do ícone */}
            <div className="pl-0">
              <div className="text-xs text-gray-400 font-mono mb-1">{evento.ano}</div>
              <div className="text-lg font-bold text-purple-200 mb-1">{evento.titulo}</div>
              <div className="text-sm text-gray-300 font-anime-body">{evento.descricao}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 