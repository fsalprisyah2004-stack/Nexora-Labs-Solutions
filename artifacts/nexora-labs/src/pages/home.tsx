import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ArrowRight, Play, Maximize, Target, Zap, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Work", "Capabilities", "Studio", "Contact"];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-white overflow-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-6 mix-blend-difference">
        <div className="text-xl font-serif font-bold tracking-tighter uppercase">NEXORA</div>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(60,40,250,0.15),transparent_50%)] pointer-events-none" />
        
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-white/80">SYNTHESIS ENGINE ONLINE</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-[clamp(3rem,10vw,9rem)] font-serif font-bold leading-[0.85] tracking-tighter uppercase mb-6"
          >
            NEXORA LABS
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-lg md:text-2xl font-light tracking-wide text-white/60 mb-12 max-w-2xl"
          >
            Building AI-Powered Commercials. Where machine intelligence meets cinematic storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none h-14 px-8 text-sm tracking-widest uppercase font-semibold transition-all duration-300">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Ambient background effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
      </section>

      {/* Value Prop Section */}
      <section className="py-32 px-6 border-t border-white/5 relative" id="capabilities">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-8 leading-tight">
                THE FUTURE<br/>ARRIVED <span className="text-primary">EARLY</span>.
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                We synthesize entirely new realities. No cameras, no sets, no limits. Our proprietary generative pipelines produce hyper-realistic, emotionally resonant advertising at a fraction of traditional timelines.
              </p>
              
              <ul className="space-y-6">
                {[
                  { icon: Target, title: "Precision Generation", desc: "Pixel-perfect control over every frame." },
                  { icon: Zap, title: "Rapid Synthesis", desc: "From concept to final render in days, not months." },
                  { icon: Cpu, title: "Neural Architecture", desc: "Custom models trained on your brand's unique visual DNA." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-1 p-2 bg-white/5 rounded-lg border border-white/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white tracking-wide uppercase text-sm mb-1">{item.title}</h3>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/5] bg-neutral-900 border border-white/10 overflow-hidden"
            >
              {/* Abstract visual representation of AI generation */}
              <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-primary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-64 h-64 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                 <div className="absolute w-48 h-48 border border-primary/30 rounded-full animate-[spin_7s_linear_infinite_reverse]" />
                 <div className="absolute w-32 h-32 border border-white/20 rounded-full animate-[spin_5s_linear_infinite]" />
                 <div className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_20px_rgba(60,40,250,1)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showreel Section */}
      <section className="py-32 px-6 bg-neutral-950 relative overflow-hidden" id="work">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiMwMDAiLz48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMTExIi8+PC9zdmc+')] opacity-50" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-7xl font-serif font-bold tracking-tighter uppercase">
              Selected <br/> <span className="text-white/30">Works</span>
            </h2>
            <Button variant="outline" className="rounded-none border-white/20 hover:bg-white hover:text-black uppercase tracking-widest text-xs h-12 px-6">
              View Full Archive
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="group relative aspect-video bg-neutral-900 overflow-hidden cursor-pointer border border-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Simulated video poster gradient */}
                <div className={`absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700
                  ${item === 1 ? 'bg-gradient-to-br from-blue-900 to-black' : ''}
                  ${item === 2 ? 'bg-gradient-to-br from-purple-900 to-black' : ''}
                  ${item === 3 ? 'bg-gradient-to-br from-emerald-900 to-black' : ''}
                  ${item === 4 ? 'bg-gradient-to-br from-rose-900 to-black' : ''}
                `} />

                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary font-mono text-xs mb-2 tracking-widest">00{item} // COMMERCIAL</p>
                  <h3 className="text-2xl font-serif uppercase tracking-tight">Project Title {item}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-40 px-6 relative" id="contact">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-serif font-bold tracking-tighter uppercase mb-8"
          >
            Initiate <br/> Sequence
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 mb-12 max-w-2xl mx-auto font-light"
          >
            Ready to render the impossible? Our engineers and directors are standing by.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-none h-16 px-12 text-sm tracking-widest uppercase font-semibold">
              Contact Us <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-white/40 tracking-widest uppercase font-mono">
          © {new Date().getFullYear()} Nexora Labs. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm text-white/40 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </footer>

    </div>
  );
}
