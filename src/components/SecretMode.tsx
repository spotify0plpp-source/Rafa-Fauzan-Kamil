import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, Zap, Palette, Monitor, Brain, X, ChevronRight } from 'lucide-react';

interface SecretModeProps {
  isOpen: boolean;
  onClose: () => void;
  onSetQuote: (quote: string) => void;
}

export const SecretMode: React.FC<SecretModeProps> = ({ isOpen, onClose, onSetQuote }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to RAFA_OS v1.0.0', 'Type "help" for a list of commands.']);
  const [isLogged, setIsLogged] = useState(false);

  const commands: Record<string, (args?: string) => void> = {
    help: () => setHistory(h => [...h, '> AVAILABLE: status, about, system, quote [text], clear']),
    status: () => setHistory(h => [...h, '> RAFA_CORE: ONLINE', '> ENGINE: VITE', '> CREATIVITY: 100%']),
    about: () => setHistory(h => [...h, '> Rafa Fauzan Kamil: 13-year-old developer.', '> Passionate about Cyber Security and AI.']),
    quote: (text) => {
        if (!text) return setHistory(h => [...h, '> Usage: quote [your text]']);
        onSetQuote(text);
        setHistory(h => [...h, `> GLOBAL_QUOTE UPDATED: "${text}"`]);
    },
    clear: () => setHistory([]),
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = input.split(' ');
    const cmd = parts[0].toLowerCase().trim();
    const args = parts.slice(1).join(' ');

    if (commands[cmd]) {
      setHistory(h => [...h, `$ ${input}`]);
      commands[cmd](args);
    } else if (cmd !== '') {
      setHistory(h => [...h, `$ ${input}`, `> Command "${cmd}" not found.`]);
    }
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
          
          <div className="relative w-full max-w-2xl bg-black border border-cyber-green/30 rounded-lg shadow-[0_0_50px_rgba(34,197,94,0.1)] font-mono overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-green-500" />
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest">System_Access.sh</span>
              </div>
              <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-6 h-96 overflow-y-auto space-y-1 text-sm scrollbar-hide">
              {!isLogged ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <Shield size={48} className="text-green-500 animate-pulse" />
                  <div className="text-center space-y-2">
                    <p className="text-green-500 text-xs uppercase tracking-widest">Authentication Required</p>
                    <input 
                      type="password"
                      autoFocus
                      placeholder="ENTER PIN..."
                      className="bg-transparent border-b border-green-500/30 text-center outline-none py-1 text-green-400 w-32 tracking-[1em]"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          if ((e.target as HTMLInputElement).value === '1337') {
                            setIsLogged(true);
                          } else {
                            setHistory(h => [...h, '> INVALID ACCESS KEY.']);
                            (e.target as HTMLInputElement).value = '';
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              ) : (
                <>
                  {history.map((line, i) => (
                    <div key={i} className={line.startsWith('$') ? "text-zinc-500" : "text-green-400"}>
                      {line}
                    </div>
                  ))}
                  <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
                    <span className="text-green-500">$</span>
                    <input
                      autoFocus
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="bg-transparent border-none outline-none flex-1 text-green-400"
                    />
                  </form>
                </>
              )}
            </div>
            
            {/* Matrix Scanlines */}
            <div className="pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
