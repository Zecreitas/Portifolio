import { Projeto } from './types';

export const projetos: Projeto[] = [
  {
    titulo: 'BrainLinker - App para Alzheimer',
    descricao: 'Aplicativo para auxiliar pessoas com Alzheimer. Familiares enviam fotos e vídeos para cuidadores, que mostram após uma perda de memória para acalmar e relembrar quem são as pessoas do ambiente.',
    tecnologias: ['React Native', 'Node.js', 'Expo'],
    cor: 'from-pink-600 to-purple-600',
    status: 'Concluído',
    icone: 'zap',
    funcionalidades: [
      'Envio de fotos e vídeos',
      'Acesso por cuidadores',
      'Ajuda no reconhecimento de pessoas',
      'Interface mobile intuitiva'
    ],
    demoUrl: '',
    githubUrl: 'https://github.com/Zecreitas/BrainLinker',
  },
  {
    titulo: 'Zecfly - Buscador de Viagens',
    descricao: 'Site buscador de viagens estilo Kayak, onde pesquisando você encontra os melhores preços de passagens aéreas e hotéis.',
    tecnologias: ['React', 'Vite', 'Tailwind CSS'],
    cor: 'from-purple-600 to-blue-600',
    status: 'Em Desenvolvimento',
    icone: 'code',
    funcionalidades: [
      'Busca de passagens aéreas',
      'Busca de hotéis',
      'Filtros de preço e destino',
      'Interface responsiva'
    ],
    demoUrl: 'https://zecfly.vercel.app/',
    githubUrl: 'https://github.com/Zecreitas/Zecfly',
  },
]; 