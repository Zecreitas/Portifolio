import React from 'react';
import { CheckCircle, MapPin, Wifi, Cpu } from 'lucide-react';

/**
 * Mini dashboard de status, stack e disponibilidade.
 */
export default function DashboardWidget() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-[-40px] mb-8 z-30 relative">
      {/* Status online */}
      <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-green-700/20 px-4 py-2 rounded-lg border border-green-500/30 shadow">
        <Wifi size={16} className="text-green-400" />
        <span className="text-green-300 text-xs font-mono">Online</span>
      </div>
      {/* Localização */}
      <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 rounded-lg border border-purple-500/30 shadow">
        <MapPin size={16} className="text-purple-300" />
        <span className="text-purple-200 text-xs font-mono">Sapiranga, RS</span>
      </div>
      {/* Disponibilidade */}
      <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 rounded-lg border border-cyan-500/30 shadow">
        <CheckCircle size={16} className="text-cyan-300" />
        <span className="text-cyan-200 text-xs font-mono">Disponível para trabalho</span>
      </div>
      {/* Stack principal */}
      <div className="flex items-center gap-2 bg-gradient-to-r from-gray-700/40 to-gray-900/40 px-4 py-2 rounded-lg border border-gray-700/30 shadow">
        <Cpu size={16} className="text-purple-200" />
        <span className="text-xs font-mono text-gray-200">React • Node.js • TypeScript</span>
      </div>
    </div>
  );
} 