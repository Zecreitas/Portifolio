import { ReactNode } from 'react';
import { Zap, Code, Server, MonitorSmartphone, Paintbrush, Database, Figma as FigmaIcon, GitBranch, ClipboardList, NotebookPen, KanbanSquare, Users } from 'lucide-react';

export type Habilidade = {
  nome: string;
  nivel: number;
  cor: string;
  icone: string; // agora é string
};

export const habilidades: Habilidade[] = [
  { nome: 'React', nivel: 90, cor: 'from-blue-500 to-cyan-500', icone: 'zap' },
  { nome: 'JavaScript', nivel: 90, cor: 'from-yellow-400 to-yellow-600', icone: 'code' },
  { nome: 'Node.js', nivel: 85, cor: 'from-green-500 to-emerald-500', icone: 'server' },
  { nome: 'React Native', nivel: 85, cor: 'from-purple-500 to-pink-500', icone: 'monitorSmartphone' },
  { nome: 'Tailwind CSS', nivel: 80, cor: 'from-cyan-500 to-blue-500', icone: 'paintbrush' },
  { nome: 'Vite', nivel: 80, cor: 'from-purple-500 to-pink-500', icone: 'zap' },
  { nome: 'MongoDB', nivel: 80, cor: 'from-green-700 to-green-900', icone: 'database' },
  { nome: 'UX/UI Design', nivel: 80, cor: 'from-pink-500 to-purple-500', icone: 'paintbrush' },
  { nome: 'Figma', nivel: 80, cor: 'from-orange-400 to-pink-400', icone: 'figma' },
  { nome: 'Express', nivel: 80, cor: 'from-gray-700 to-gray-900', icone: 'server' },
  { nome: 'Git', nivel: 75, cor: 'from-red-500 to-orange-500', icone: 'gitBranch' },
  { nome: 'Trello', nivel: 75, cor: 'from-blue-400 to-blue-700', icone: 'clipboardList' },
  { nome: 'Next.js', nivel: 75, cor: 'from-gray-900 to-gray-700', icone: 'code' },
  { nome: 'Notion', nivel: 70, cor: 'from-gray-400 to-gray-700', icone: 'notebookPen' },
  { nome: 'Scrum', nivel: 65, cor: 'from-purple-400 to-purple-700', icone: 'users' },
  { nome: 'Kanban', nivel: 65, cor: 'from-green-400 to-green-700', icone: 'kanbanSquare' },
]; 