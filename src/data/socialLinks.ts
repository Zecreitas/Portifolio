import { Github, Linkedin, Mail } from 'lucide-react';

export type LinkSocial = {
  icone: React.ElementType;
  label: string;
  url: string;
  cor: string;
};

export const linksSociais: LinkSocial[] = [
  { icone: Github, label: 'GitHub', url: 'https://github.com/Zecreitas', cor: 'hover:text-gray-300' },
  { icone: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/guilhermeschuh/', cor: 'hover:text-blue-400' },
  { icone: Mail, label: 'Email', url: 'mailto:schuh.gui@gmail.com', cor: 'hover:text-red-400' },
]; 