/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Shield, Zap, Brain, Palette, Monitor, Terminal, Github, Instagram, 
  Mail, MessageSquareText, ChevronDown, Rocket, Smartphone, Cpu,
  Lock, Key, Eye, Play, ExternalLink, MessageCircle, Music2
} from 'lucide-react';
import { LoadingScreen } from './components/LoadingScreen';
import { Starfield } from './components/Starfield';
import { CustomCursor } from './components/CustomCursor';
import { SecretMode } from './components/SecretMode';
import { cn } from './lib/utils';

// --- Hero Section ---
const Hero = ({ onExplore }: { onExplore: () => void }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = "13 Years Old • Mini Cyber Security • Future Tech Creator";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 flex flex-col items-center"
      >
        <div className="mb-[-15px] opacity-50 tracking-[5px] text-xs font-mono text-neon-blue">
          FUTURE TECH CREATOR
        </div>
        
        <motion.div
          initial={{ letterSpacing: "20px", opacity: 0 }}
          animate={{ letterSpacing: "-2px", opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-9xl glitch-text leading-none">RAFA FAUZAN</h1>
          <h1 className="text-6xl md:text-9xl glitch-text leading-none mb-4 -mt-4 md:-mt-8">KAMIL</h1>
        </motion.div>
        
        <div className="h-8 mb-8">
          <p className="subtitle text-neon-blue font-mono tracking-widest uppercase text-center md:text-left">
            {typedText}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={onExplore}
            className="group relative px-10 py-4 bg-neon-blue overflow-hidden rounded-md text-black font-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,243,255,0.4)]"
          >
            <span className="relative flex items-center gap-2 uppercase tracking-widest text-xs">
              Explore Journey <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          <button 
            onClick={() => window.open("https://wa.me/6285779155783", "_blank")}
            className="group relative px-10 py-4 bg-transparent overflow-hidden rounded-md border border-white/30 text-white font-black transition-all hover:border-white/60"
          >
            <span className="relative flex items-center gap-2 uppercase tracking-widest text-xs">
              Initiate Contact
            </span>
          </button>
        </motion.div>
      </motion.div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-[10px] uppercase tracking-[0.4em]">Deep Scan</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-12 bg-gradient-to-b from-neon-blue/50 to-transparent"
        />
      </div>
    </section>
  );
};

// --- About Section ---
const About = () => {
    const skills = [
        { label: "Coding Passion", value: 95, color: "from-blue-400 to-neon-blue" },
        { label: "Cyber Security", value: 88, color: "from-purple-400 to-neon-purple" },
        { label: "Creative Thinking", value: 98, color: "from-pink-400 to-rose-400" },
        { label: "Problem Solving", value: 92, color: "from-cyan-400 to-teal-400" }
    ];

    return (
        <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 blur-3xl opacity-30" />
                    <div className="relative glass-card p-4 overflow-hidden aspect-[4/5] md:aspect-square flex flex-col items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-2 border-neon-blue mb-6 relative overflow-hidden group shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                            <img 
                              src="https://github.com/spotify0plpp-source.png" 
                              alt="Rafa Fauzan Kamil" 
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                            />
                            <div className="absolute inset-0 bg-neon-blue/20 mix-blend-overlay pointer-events-none" />
                        </div>
                        
                        {/* Hologram Lines */}
                        <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-20">
                            {[...Array(40)].map((_, i) => (
                                <div key={i} className="h-[1px] w-full bg-neon-blue" />
                            ))}
                        </div>

                        <div className="relative z-10 text-center">
                            <h3 className="text-2xl font-bold tracking-tighter mb-1 uppercase text-neon-blue">Rafa Fauzan Kamil</h3>
                            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Age: 13 | SDN Lagoa 05</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue">
                            <Brain size={14} className="text-neon-blue" />
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-neon-blue">Visionary Mindset</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Tomorrow.</span></h2>
                        <p className="quote text-white/70 italic leading-relaxed text-lg border-l-2 border-neon-blue pl-6">
                            "Di usia ketika banyak anak hanya bermain, Rafa mulai mengenal dunia teknologi, logika, kreativitas, dan mimpi besar untuk masa depan."
                        </p>
                        <p className="text-white/40 leading-relaxed text-sm">
                            Bagi Rafa, baris kode bukan sekadar teks, tapi mantra untuk membangun dunia baru. Saat ini bersekolah di <span className="text-white font-semibold">SDN Lagoa 05</span>, namun pikirannya sudah menjelajahi semesta digital.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {skills.map((skill) => (
                            <div key={skill.label} className="space-y-2">
                                <div className="flex justify-between text-[10px] font-mono text-white/50 uppercase tracking-widest">
                                    <span>{skill.label}</span>
                                    <span className="text-neon-blue">{skill.value}%</span>
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.value}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-neon-blue shadow-[0_0_10px_var(--color-neon-blue)]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// --- Skills Showcase ---
const SkillShowcase = () => {
    const mainSkills = [
        { name: "Cyber Security", icon: Shield, desc: "Understanding the walls that protect our data.", level: 4 },
        { name: "Web Engineering", icon: Zap, desc: "Building soul and logic for digital worlds.", level: 7 },
        { name: "AI Prompting", icon: Brain, desc: "Communicating with future intelligence.", level: 9 },
        { name: "UI Design", icon: Monitor, desc: "Crafting beautiful digital experiences.", level: 6 },
    ];

    return (
        <section id="skills" className="py-32 bg-white/[0.01]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase italic">Core <span className="text-neon-purple">Capabilities</span></h2>
                    <p className="text-white/40 max-w-xl mx-auto uppercase text-[10px] tracking-widest font-mono">Encrypted Data Feed // Active Scan Ready</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mainSkills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 glass-card bg-black/40 border-white/5 hover:border-neon-purple/30 transition-all duration-500"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 group-hover:bg-neon-purple/10 group-hover:text-neon-purple transition-colors duration-500">
                                    <skill.icon size={20} />
                                </div>
                                <span className="text-[10px] font-mono text-neon-purple">LVL_{skill.level}</span>
                            </div>
                            <h3 className="text-lg font-bold mb-3 uppercase tracking-tight">{skill.name}</h3>
                            <p className="text-[11px] text-white/50 leading-relaxed h-12">{skill.desc}</p>
                            
                            <div className="mt-6 space-y-2">
                                <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className={cn("h-full bg-neon-purple shadow-[0_0_10px_var(--color-neon-purple)] transition-all duration-1000", `w-[${(skill.level/10)*100}%]`)} 
                                         style={{ width: `${(skill.level/10)*100}%` }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Timeline ---
const Timeline = () => {
    const events = [
        { year: "2021", title: "First Spark", desc: "Started exploring how websites work behind the scenes.", icon: Shield },
        { year: "2022", title: "Logic Foundations", desc: "Mastered basic HTML & CSS, building my first portfolio.", icon: Monitor },
        { year: "2023", title: "Cyber Curiosity", desc: "Began learning ethical hacking basics and web security.", icon: Lock },
        { year: "2024", title: "AI Revolution", desc: "Integrating AI models into creative projects and tools.", icon: Brain },
        { year: "Future", title: "Tech Pioneer", desc: "Aiming to lead the next generation of tech creators.", icon: Rocket }
    ];

    return (
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-24 tracking-tight uppercase italic">The Growth <span className="text-neon-purple">Log</span></h2>
                
                <div className="relative space-y-12">
                    {/* Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neon-blue via-neon-purple to-transparent opacity-30" />

                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={cn(
                                "relative flex items-center justify-between gap-8 md:gap-0",
                                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            )}
                        >
                            <div className="hidden md:block w-[calc(50%-2rem)]" />
                            
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full border border-neon-blue bg-deep-bg flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                                <event.icon size={12} className="text-white" />
                            </div>

                            <div className="flex-1 md:w-[calc(50%-2rem)] ml-12 md:ml-0">
                                <div className="p-6 glass-card hover:bg-white/10 transition-colors">
                                    <span className="text-[10px] font-mono text-neon-blue uppercase tracking-widest">{event.year}</span>
                                    <h3 className="text-xl font-bold mt-1 mb-2">{event.title}</h3>
                                    <p className="text-sm text-white/50">{event.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Projects ---
const Projects = () => {
    const projects = [
        { title: "Rafa AI", tech: "Gemini • React", desc: "A creative AI assistant chatbot.", img: "photo-1675271591211-126ad5cc0625" },
        { title: "Deface Guard", tech: "Security • Python", desc: "Mini tools for web integrity check.", img: "photo-1550751827-4bd374c3f58b" },
        { title: "Dream Canvas", tech: "Three.js • WebGL", desc: "Interactive 3D art experience.", img: "photo-1618005182384-a83a8bd57fbe" },
        { title: "Hacker Terminal", tech: "JS • CSS", desc: "A retro-future command interface.", img: "photo-1555066931-4365d14bab8c" }
    ];

    return (
        <section id="projects" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Mission <span className="text-neon-blue uppercase italic">Archive</span></h2>
                        <p className="text-white/40">Selected artifacts from my digital explorations.</p>
                    </div>
                    <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neon-blue hover:text-white transition-colors">
                        View GitHub <ExternalLink size={14} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 0.98 }}
                            className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
                        >
                            <img 
                                src={`https://images.unsplash.com/${p.img}?auto=format&fit=crop&q=80&w=800`} 
                                alt={p.title}
                                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-deep-bg/40 to-transparent p-8 flex flex-col justify-end">
                                <span className="text-[10px] font-mono text-neon-blue mb-1">{p.tech}</span>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-blue transition-colors">{p.title}</h3>
                                <p className="text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">{p.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Footer ---
const Footer = () => {
    return (
        <footer className="py-20 border-t border-white/5 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">
                <motion.h2 
                    className="text-2xl font-bold tracking-[0.5em] uppercase text-white/50"
                    whileHover={{ letterSpacing: "1em", color: "#00f3ff" }}
                >
                    Stay Connected
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-8">
                    <motion.a href="https://github.com/spotify0plpp-source" target="_blank" rel="noreferrer" whileHover={{ y: -5, color: "#00f3ff" }} className="text-white/40 hover:text-white transition-colors" title="GitHub"><Github size={24} /></motion.a>
                    <motion.a href="https://instagram.com/rafamature" target="_blank" rel="noreferrer" whileHover={{ y: -5, color: "#bc13fe" }} className="text-white/40 hover:text-white transition-colors" title="Instagram"><Instagram size={24} /></motion.a>
                    <motion.a href="https://www.tiktok.com/@rapaa_71" target="_blank" rel="noreferrer" whileHover={{ y: -5, color: "#00f3ff" }} className="text-white/40 hover:text-white transition-colors" title="TikTok"><Music2 size={24} /></motion.a>
                    <motion.a href="https://wa.me/6285779155783" target="_blank" rel="noreferrer" whileHover={{ y: -5, color: "#00f3ff" }} className="text-white/40 hover:text-white transition-colors" title="WhatsApp"><MessageCircle size={24} /></motion.a>
                </div>

                <div className="space-y-2">
                    <p className="text-xs font-mono text-white/20 uppercase tracking-widest">
                        Built with dreams, imagination, and technology by Rafa Fauzan Kamil.
                    </p>
                    <p className="text-[10px] font-mono text-white/10 uppercase">
                        © 2024 // ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSecretMode, setIsSecretMode] = useState(false);
  const [mainQuote, setMainQuote] = useState("Mungkin aku masih kecil hari ini, tapi mimpiku tidak kecil.");

  useEffect(() => {
    console.log(
      "%c RAFA OS v1.0.0 %c ACCESS GRANTED ",
      "background: #00f2ff; color: #000; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;",
      "background: #bc13fe; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 0 4px 4px 0;"
    );
    console.log("Welcome, Rafa. The future is waiting for you.");
    
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.altKey && e.key.toLowerCase() === 's') {
            setIsSecretMode(prev => !prev);
        }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-neon-blue selection:text-black bg-deep-bg">
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Immersive Background */}
            <div className="fixed inset-0 z-[-5] bg-grid opacity-20 pointer-events-none" />
            <div className="orb w-[500px] h-[500px] bg-neon-blue top-[-100px] left-[-100px]" />
            <div className="orb w-[400px] h-[400px] bg-neon-purple bottom-[-50px] right-[-50px]" />

            <CustomCursor />
            <Starfield />
            <SecretMode 
              isOpen={isSecretMode} 
              onClose={() => setIsSecretMode(false)} 
              onSetQuote={(q) => setMainQuote(q)}
            />

            {/* Nav / Floating UI */}
            <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-10">
                <div className="hidden md:flex badge shadow-[0_0_10px_rgba(0,243,255,0.3)]">System Operational</div>
                <div className="glass-card px-8 py-3 flex items-center gap-8 md:gap-12 hover:border-white/20 transition-all border-white/5 bg-black/60">
                    <button onClick={() => scrollToSection('hero')} className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-neon-blue transition-colors cursor-pointer">Main</button>
                    <button onClick={() => scrollToSection('about')} className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-neon-blue transition-colors cursor-pointer">Registry</button>
                    <button onClick={() => scrollToSection('projects')} className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-neon-blue transition-colors cursor-pointer">Projects</button>
                    <div className="w-[1px] h-4 bg-white/10" />
                    <button onClick={() => setIsSecretMode(true)} className="flex items-center gap-2 text-neon-purple animate-pulse cursor-pointer">
                        <Lock size={12} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Encrypted</span>
                    </button>
                </div>
                <div className="hidden md:flex badge border-neon-purple text-neon-purple shadow-[0_0_10px_rgba(188,19,254,0.3)]">Security High</div>
            </div>

            <Hero onExplore={() => scrollToSection('about')} />
            <About />

            {/* Emotional Quote Section */}
            <section className="py-48 px-6 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="max-w-4xl mx-auto text-center space-y-8"
                >
                    <p className="text-3xl md:text-5xl font-light italic leading-tight text-white/90">
                        "{mainQuote}"
                    </p>
                    <div className="w-24 h-[1px] bg-neon-blue mx-auto" />
                    <p className="text-sm font-mono text-white/40 uppercase tracking-[0.5em]">Vision_Protocol.01</p>
                </motion.div>
            </section>

            <SkillShowcase />
            <Timeline />
            <Projects />

            {/* Final Call to Action */}
            <section className="py-40 px-6 overflow-hidden relative">
                <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight italic uppercase">Let's create <span className="text-neon-purple">The Future.</span></h2>
                    <p className="text-white/50 text-xl">Collaborate on the next big digital breakthrough.</p>
                    <div className="pt-8">
                        <button onClick={() => window.open("https://wa.me/6285779155783", "_blank")} className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-neon-blue hover:text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            Send Transmission
                        </button>
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-purple/10 blur-[150px] -z-10" />
            </section>

            <Footer />
            
            {/* Hidden Easter Egg Button (Larger for mobile tap) */}
            <button 
                onClick={() => setIsSecretMode(true)}
                className="fixed bottom-0 right-0 w-16 h-16 opacity-0 hover:opacity-10 transition-opacity z-[999] cursor-help bg-neon-blue"
                title="Tap for Secret Access"
            />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
