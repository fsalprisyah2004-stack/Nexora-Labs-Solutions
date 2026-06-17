import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "wouter";
import { TechBackground } from "../components/TechBackground";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Film, 
  Sparkles, 
  Zap, 
  BarChart, 
  Play, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  ArrowRight,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Services", "About", "Portfolio", "Clients", "Contact"];

const portfolioCategories = ["All", "AI Luxury Jewelry Commercial", "AI Food Commercial"] as const;
type PortfolioCategory = typeof portfolioCategories[number];

const portfolioItems = [
  {
    id: "001",
    category: "AI Luxury Jewelry Commercial" as PortfolioCategory,
    title: "White Serpent Jewelry",
    tag: "Luxury Commercial",
    year: "2026",
    image: "/portfolio/white-serpent-jewelry.png",
    featured: true,
  },
  {
    id: "002",
    category: "AI Food Commercial" as PortfolioCategory,
    title: "Chicken Transformation Commercial",
    tag: "Food Commercial",
    year: "2026",
    image: "/portfolio/chicken-transformation.png",
    featured: false,
  },
  {
    id: "003-b",
    category: "AI Food Commercial" as PortfolioCategory,
    title: "Alpine Burger Transformation",
    tag: "Food Commercial",
    year: "2026",
    image: "/portfolio/alpine-burger.png",
    featured: false,
  },
  {
    id: "004-r",
    category: "AI Food Commercial" as PortfolioCategory,
    title: "Rendang Evolution",
    tag: "Food Commercial",
    year: "2026",
    image: "/portfolio/rendang-evolution.png",
    featured: false,
  },
];

const whyNexoraCards = [
  {
    icon: "sparkles",
    title: "From Concept to Visual",
    description: "We transform simple ideas into premium visual concepts, campaign assets, and portfolio-ready creative showcases.",
  },
  {
    icon: "zap",
    title: "Fast AI Production Workflow",
    description: "Our workflow combines AI image generation, AI video generation, creative direction, and fast iteration to move from idea to final visual faster.",
  },
  {
    icon: "film",
    title: "Built for Modern Brands",
    description: "Designed for brands, creators, and businesses that want cinematic, premium, and scroll-stopping visuals for the digital era.",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07
    }
  }
};

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const heroParticles = [
  { x: 10, y: 20, size: 1.5, opacity: 0.25, dur: 5.2, delay: 0,   cyan: false },
  { x: 26, y: 68, size: 1,   opacity: 0.18, dur: 7.1, delay: 1.2, cyan: false },
  { x: 43, y: 14, size: 2,   opacity: 0.20, dur: 4.8, delay: 0.5, cyan: true  },
  { x: 62, y: 73, size: 1.5, opacity: 0.22, dur: 6.4, delay: 2.1, cyan: false },
  { x: 76, y: 28, size: 1,   opacity: 0.18, dur: 5.6, delay: 0.8, cyan: true  },
  { x: 89, y: 57, size: 1.5, opacity: 0.20, dur: 8.2, delay: 1.5, cyan: false },
  { x: 17, y: 83, size: 1,   opacity: 0.15, dur: 6.7, delay: 3.0, cyan: false },
  { x: 55, y: 44, size: 2,   opacity: 0.12, dur: 9.1, delay: 0.3, cyan: true  },
  { x: 83, y: 11, size: 1,   opacity: 0.18, dur: 5.0, delay: 2.5, cyan: false },
  { x: 34, y: 37, size: 1.5, opacity: 0.15, dur: 7.3, delay: 1.0, cyan: true  },
  { x: 71, y: 86, size: 1,   opacity: 0.20, dur: 4.2, delay: 0.7, cyan: false },
  { x: 91, y: 39, size: 2,   opacity: 0.16, dur: 6.1, delay: 1.8, cyan: true  },
];

const cardGlows = [
  "hover:shadow-[0_0_40px_rgba(6,182,212,0.12)] hover:border-cyan-400/[0.20]",
  "hover:shadow-[0_0_40px_rgba(139,92,246,0.12)] hover:border-purple-400/[0.15]",
  "hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]",
];

const serviceIcons = [
  { icon: Film,     color: "text-white/25 group-hover:text-white/60",         glow: "group-hover:shadow-[0_0_10px_rgba(255,255,255,0.12)]",      border: "group-hover:border-white/20" },
  { icon: Sparkles, color: "text-cyan-400/30 group-hover:text-cyan-400/70",   glow: "group-hover:shadow-[0_0_10px_rgba(6,182,212,0.30)]",        border: "group-hover:border-cyan-400/20" },
  { icon: Zap,      color: "text-purple-400/30 group-hover:text-purple-400/70", glow: "group-hover:shadow-[0_0_10px_rgba(139,92,246,0.30)]",      border: "group-hover:border-purple-400/20" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showVideoModal2, setShowVideoModal2] = useState(false);
  const [showVideoModal3, setShowVideoModal3] = useState(false);
  const [showVideoModal4, setShowVideoModal4] = useState(false);
  const openProjectModal = useCallback((id: string) => {
    if (id === "001") setShowVideoModal(true);
    else if (id === "002") setShowVideoModal2(true);
    else if (id === "003-b") setShowVideoModal3(true);
    else if (id === "004-r") setShowVideoModal4(true);
  }, []);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white/20 selection:text-white overflow-hidden">
      <TechBackground />

      {/* NAVIGATION */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 flex items-center justify-between px-6 py-5 ${
          scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent border-transparent"
        }`}
      >
        <Link href="/" data-testid="nav-logo" className="text-sm font-light tracking-widest uppercase cursor-pointer hover:text-white/70 transition-colors duration-300">
          NEXORA AI STUDIO
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) =>
            item === "About" ? (
              <Link
                key={item}
                href="/about"
                data-testid="nav-link-about"
                className="text-xs font-light uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300"
              >
                {item}
              </Link>
            ) : (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                data-testid={`nav-link-${item.toLowerCase()}`}
                className="text-xs font-light uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>
        <a href="https://wa.me/628127578986" target="_blank" rel="noopener noreferrer">
          <Button 
            variant="outline" 
            size="sm" 
            data-testid="nav-contact-btn"
            className="rounded-full border-white/20 hover:bg-white hover:text-black text-xs px-5 h-9 font-light tracking-widest uppercase bg-transparent transition-all"
          >
            Book a Discovery Call
          </Button>
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Base radial — boosted */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(60,40,250,0.15),transparent_60%)] pointer-events-none" />
        {/* Right-side cyan accent — boosted */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_22%,rgba(6,182,212,0.15),transparent_52%)] pointer-events-none" />
        {/* Bottom-left blue accent — boosted */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_78%,rgba(30,58,138,0.18),transparent_50%)] pointer-events-none" />
        {/* Electric lines — boosted */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/[0.22] to-transparent ambient-pulse" />
          <div className="absolute top-[68%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/[0.18] to-transparent ambient-pulse" style={{ animationDelay: "3s" }} />
        </div>
        
        {/* Subtle mesh background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Pulsing AI glow orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
          style={{ width: '800px', height: '800px' }}
          animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, rgba(80,50,255,0.05) 45%, transparent 70%)' }} />
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {heroParticles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: p.cyan ? 'rgba(6,182,212,0.65)' : 'rgba(255,255,255,0.45)',
                boxShadow: p.cyan ? '0 0 5px rgba(6,182,212,0.5)' : undefined,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [p.opacity * 0.4, p.opacity, p.opacity * 0.4],
              }}
              transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
            />
          ))}
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full"
        >
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 64 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-px bg-white/20 mb-8"
          />
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="text-[clamp(2.5rem,8vw,8rem)] font-light leading-[0.9] tracking-[0.3em] uppercase mb-8"
          >
            NEXORA AI STUDIO
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 64 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="w-px bg-white/20 mb-12"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-white/40 font-light tracking-widest text-sm uppercase mb-4"
          >
            Building AI-Powered Commercials
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="text-white/60 text-xl font-light max-w-xl mx-auto mb-12"
          >
            Where machine intelligence meets cinematic storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            className="flex flex-col items-center gap-5"
          >
            <Link href="/about" className="w-full sm:w-auto">
              <button
                data-testid="hero-vision-cta"
                className="group relative w-full sm:w-auto flex items-center justify-center gap-3 rounded-full h-14 px-12 text-sm tracking-[0.18em] uppercase font-light transition-all duration-500 text-white
                  border border-cyan-400/30 bg-[linear-gradient(135deg,rgba(6,182,212,0.08),rgba(99,102,241,0.06))] backdrop-blur-sm
                  hover:border-cyan-400/60 hover:bg-[linear-gradient(135deg,rgba(6,182,212,0.15),rgba(99,102,241,0.12))]
                  hover:shadow-[0_0_32px_rgba(6,182,212,0.25),0_0_64px_rgba(99,102,241,0.12)]
                  hover:scale-[1.02]"
              >
                {/* Inner shimmer line */}
                <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.12) 50%, transparent 100%)" }} />
                </span>

                Discover the Vision
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-cyan-400/70 group-hover:text-cyan-300" />
              </button>
            </Link>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="text-white/20 text-[10px] font-mono tracking-[0.25em] uppercase"
            >
              AI Vision · Project XORA · Future Digital Lab
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50"
        >
          <motion.div 
            animate={{ height: [0, 40, 0], y: [0, 20, 40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px bg-white/40"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="relative py-32 px-6 overflow-hidden" id="about">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[550px] h-[450px] rounded-full blur-[130px] ambient-pulse slow-drift" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.04), transparent 70%)' }} />
          <div className="absolute bottom-0 left-[10%] w-[450px] h-[350px] rounded-full blur-[110px] ambient-pulse" style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.06), transparent 70%)', animationDelay: "4s" }} />
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase block mb-8">ABOUT NEXORA AI STUDIO</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight">
              We don't shoot ads. <br/><span className="text-white/40">We engineer them.</span>
            </h2>

            {/* Cinematic frame mockup */}
            <div className="mt-10 relative max-w-[260px] select-none">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/[0.08] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_70%)]">
                {/* Corner accents */}
                <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-white/25 pointer-events-none" />
                <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-white/25 pointer-events-none" />
                <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-white/25 pointer-events-none" />
                <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-white/25 pointer-events-none" />
                {/* Scan line */}
                <motion.div
                  className="absolute left-3 right-3 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent pointer-events-none"
                  animate={{ top: ["12%", "85%", "12%"] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Center play icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 text-white/30 ml-0.5" fill="currentColor" />
                  </div>
                </div>
                {/* Bottom info strip */}
                <div className="absolute bottom-0 left-0 right-0 px-3 py-2 flex items-center justify-between">
                  <span className="font-mono text-[7px] tracking-widest text-white/20 uppercase">AI Commercial</span>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-red-400/50 animate-pulse" />
                    <span className="font-mono text-[7px] text-white/15">REC</span>
                  </div>
                </div>
              </div>
              <p className="font-mono text-[8px] tracking-[0.25em] text-white/20 uppercase mt-3">
                AI-directed · No camera crew required
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col gap-16">
            <div className="space-y-8 text-lg text-white/55 font-light leading-relaxed">
              <p>Nexora AI Studio sits at the crossroads of machine intelligence and cinematic craft. We build AI-powered commercials, AI visuals, cinematic brand content, and premium frontend websites — without a camera crew.</p>
              <p>Today, our work is practical: AI-generated commercials, visual campaigns, and digital brand experiences delivered in days. Each project proves that intelligence and creativity can replace the traditional production pipeline.</p>
              <p>This studio work is the foundation. What we build today trains the tools, systems, and understanding we need to build the intelligent AI systems of tomorrow.</p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/[0.06]">
              {[
                { val: "48hrs", label: "From brief to delivery" },
                { val: "10×", label: "Faster than traditional" },
                { val: "0", label: "Cameras required" }
              ].map((stat, i) => (
                <div key={i} className={`flex flex-col ${i !== 0 ? "pl-8 border-l border-white/[0.06]" : ""}`}>
                  <span className="font-mono text-3xl md:text-4xl mb-3 font-light">{stat.val}</span>
                  <span className="text-xs text-white/40 uppercase tracking-widest leading-relaxed">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32 px-6 overflow-hidden" id="services">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-0 w-[480px] h-[380px] rounded-full blur-[120px] ambient-pulse" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.038), transparent 70%)' }} />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[320px] rounded-full blur-[100px] ambient-pulse" style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.055), transparent 70%)', animationDelay: "5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/[0.04] to-transparent" />
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-20">
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase block mb-4">SERVICES</span>
            <h2 className="text-5xl md:text-6xl font-light tracking-wide whitespace-pre-line">
              Built for brands{"\n"}that mean business.
            </h2>
          </motion.div>

          <div className="flex flex-col border-t border-white/[0.06]">
            {[
              {
                title: "AI Commercials",
                desc: "Cinematic video ads, produced entirely by AI. No set. No crew. No limits.",
                benefit: "DELIVERED IN 48HRS",
                number: "01"
              },
              {
                title: "AI Websites",
                desc: "Intelligent sites designed for conversion and built to scale. Launched in days, not months.",
                benefit: "LIVE IN 7 DAYS",
                number: "02"
              },
              {
                title: "AI Automation",
                desc: "End-to-end business automation — from lead capture to content and customer engagement.",
                benefit: "ALWAYS ON",
                number: "03"
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group flex flex-col md:flex-row md:items-center py-10 md:py-12 border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors duration-500 cursor-default px-4 -mx-4"
                data-testid={`service-row-${i}`}
              >
                <div className="w-16 md:w-40 mb-4 md:mb-0 flex items-center gap-3">
                  <span className="font-mono text-sm text-white/20">{service.number}</span>
                  {(() => {
                    const vis = serviceIcons[i];
                    const Icon = vis.icon;
                    return (
                      <div className={`w-8 h-8 rounded-lg border border-white/[0.07] flex items-center justify-center transition-all duration-500 ${vis.color} ${vis.glow} ${vis.border}`}>
                        <Icon className="w-3.5 h-3.5" strokeWidth={1.2} />
                      </div>
                    );
                  })()}
                </div>
                <div className="flex-1 md:pr-12">
                  <h3 className="text-2xl font-light tracking-wide mb-2">{service.title}</h3>
                  <p className="text-sm text-white/50 font-light max-w-sm leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-6 md:mt-0">
                  <span className="text-xs text-white/30 font-mono tracking-widest uppercase">{service.benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>



      {/* VIDEO MODAL 2 — CHICKEN TRANSFORMATION */}
      <AnimatePresence>
        {showVideoModal2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setShowVideoModal2(false)}
            data-testid="video-modal-2-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative flex flex-col bg-black border border-white/10 w-full max-w-sm md:max-w-md"
              style={{ maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header strip */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] flex-shrink-0">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase">002 — Portfolio Project</p>
                  <p className="text-sm font-light text-white/70 mt-0.5">Chicken Transformation Commercial</p>
                </div>
                <button
                  data-testid="video-modal-2-close"
                  onClick={() => setShowVideoModal2(false)}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 flex-shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* YouTube Short — 9:16 portrait embed */}
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  src="https://www.youtube.com/embed/ECBuQ9F1NzM?rel=0&modestbranding=1&autoplay=1&playsinline=1"
                  title="Chicken Transformation Commercial — AI Food Commercial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Footer strip */}
              <div className="px-5 py-3 border-t border-white/[0.06] flex-shrink-0">
                <span className="font-mono text-[9px] tracking-widest text-white/20 uppercase">AI Food Commercial · 2026</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* VIDEO MODAL 3 — ALPINE BURGER TRANSFORMATION */}
      <AnimatePresence>
        {showVideoModal3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setShowVideoModal3(false)}
            data-testid="video-modal-3-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative flex flex-col bg-black border border-white/10 w-full max-w-sm md:max-w-md"
              style={{ maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header strip */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] flex-shrink-0">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase">003 — Portfolio Project</p>
                  <p className="text-sm font-light text-white/70 mt-0.5">Alpine Burger Transformation</p>
                </div>
                <button
                  data-testid="video-modal-3-close"
                  onClick={() => setShowVideoModal3(false)}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 flex-shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* YouTube Short — 9:16 portrait embed */}
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  src="https://www.youtube.com/embed/qckLPPNp3F4?rel=0&modestbranding=1&autoplay=1&playsinline=1"
                  title="Alpine Burger Transformation — AI Food Commercial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Footer strip */}
              <div className="px-5 py-3 border-t border-white/[0.06] flex-shrink-0">
                <span className="font-mono text-[9px] tracking-widest text-white/20 uppercase">AI Food Commercial · Original Concept · 2026</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* VIDEO MODAL 4 — RENDANG EVOLUTION */}
      <AnimatePresence>
        {showVideoModal4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setShowVideoModal4(false)}
            data-testid="video-modal-4-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative flex flex-col bg-black border border-white/10 w-full max-w-sm md:max-w-md"
              style={{ maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header strip */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] flex-shrink-0">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase">004 — Portfolio Project</p>
                  <p className="text-sm font-light text-white/70 mt-0.5">Rendang Evolution</p>
                </div>
                <button
                  data-testid="video-modal-4-close"
                  onClick={() => setShowVideoModal4(false)}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 flex-shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* YouTube Short — 9:16 portrait embed */}
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  src="https://www.youtube.com/embed/21tYFyQmhBI?rel=0&modestbranding=1&autoplay=1&playsinline=1"
                  title="Rendang Evolution — AI Food Commercial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Footer strip */}
              <div className="px-5 py-3 border-t border-white/[0.06] flex-shrink-0">
                <span className="font-mono text-[9px] tracking-widest text-white/20 uppercase">AI Food Commercial · Original Concept · 2026</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setShowVideoModal(false)}
            data-testid="video-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative flex flex-col bg-black border border-white/10 w-full max-w-sm md:max-w-md"
              style={{ maxHeight: "90vh" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header strip */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] flex-shrink-0">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase">001 — Featured Project</p>
                  <p className="text-sm font-light text-white/70 mt-0.5">White Serpent Jewelry</p>
                </div>
                <button
                  data-testid="video-modal-close"
                  onClick={() => setShowVideoModal(false)}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300 flex-shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* YouTube Short — 9:16 portrait embed */}
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  src="https://www.youtube.com/embed/bIBEPEt40l4?rel=0&modestbranding=1&autoplay=1&playsinline=1"
                  title="White Serpent Jewelry — AI Luxury Commercial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Footer strip */}
              <div className="px-5 py-3 border-t border-white/[0.06] flex-shrink-0">
                <span className="font-mono text-[9px] tracking-widest text-white/20 uppercase">AI Luxury Jewelry Commercial · 2026</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PORTFOLIO */}
      <section className="py-32 px-6" id="portfolio">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-5xl md:text-6xl font-light tracking-wide mb-4">Selected Work</h2>
            <p className="text-white/40 text-xl font-light">A glimpse of the impossible.</p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-12 border-b border-white/[0.06] pb-8">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                data-testid={`portfolio-tab-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-light tracking-widest uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
              {(() => {
                const filtered = activeCategory === "All"
                  ? portfolioItems
                  : portfolioItems.filter((item) => item.category === activeCategory);
                const featured = filtered[0];
                const rest = filtered.slice(1);

                return (
                  <>
                    {/* Featured Card */}
                    {featured && (
                      <div
                        data-testid={`portfolio-card-${featured.id}`}
                        onClick={() => openProjectModal(featured.id)}
                        className="group relative aspect-square md:aspect-[21/8] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-[0_0_80px_rgba(255,255,255,0.06)] ring-1 ring-white/[0.07] hover:ring-white/[0.18]"
                      >
                        {/* Background image */}
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                        />
                        {/* Layered dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                        {/* Top row */}
                        <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                          <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">{featured.id} — Featured</span>
                          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/60 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                            {featured.category}
                          </span>
                        </div>
                        {/* Center play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/[0.12] group-hover:border-white/40 group-hover:scale-110 transition-all duration-500 opacity-60 group-hover:opacity-100">
                            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                          </div>
                        </div>
                        {/* Bottom info */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/50 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            ▶ Watch Project
                          </p>
                          <div className="flex justify-between items-end">
                            <div>
                              <h3 className="text-2xl md:text-4xl font-light tracking-wide text-white mb-1">{featured.title}</h3>
                              <p className="text-white/40 font-mono text-[11px] tracking-widest uppercase">{featured.year} · {featured.tag}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Rest Grid */}
                    {rest.length > 0 && (
                      <div className={`grid gap-4 ${rest.length === 1 ? "md:grid-cols-1" : rest.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
                        {rest.map((item) => (
                          <div
                            key={item.id}
                            data-testid={`portfolio-card-${item.id}`}
                            onClick={() => openProjectModal(item.id)}
                            className="group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-[0_0_60px_rgba(255,255,255,0.06)] ring-1 ring-white/[0.07] hover:ring-white/[0.18]"
                          >
                            {/* Background image */}
                            <img
                              src={item.image}
                              alt={item.title}
                              className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                            />
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />
                            {/* Top row */}
                            <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                              <span className="font-mono text-[9px] tracking-[0.3em] text-white/40 uppercase">{item.id}</span>
                              <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-white/55 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                {item.tag}
                              </span>
                            </div>
                            {/* Center play */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/[0.12] group-hover:border-white/40 group-hover:scale-110 transition-all duration-500 opacity-55 group-hover:opacity-100">
                                <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                              </div>
                            </div>
                            {/* Bottom info */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                              <p className="font-mono text-[9px] tracking-[0.4em] uppercase text-white/45 mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                ▶ Watch Project
                              </p>
                              <h3 className="text-lg md:text-xl font-light tracking-wide text-white">{item.title}</h3>
                              <p className="text-white/35 font-mono text-[10px] tracking-widest uppercase mt-1">{item.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {filtered.length === 0 && (
                      <div className="py-32 text-center text-white/20 font-light tracking-widest uppercase text-sm">
                        No projects yet
                      </div>
                    )}
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>

          {/* Category summary strip */}
          <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-white/[0.06] flex flex-wrap gap-8 justify-between items-center">
            <div className="flex gap-6 flex-wrap">
              {portfolioCategories.slice(1).map((cat) => (
                <button
                  key={cat}
                  data-testid={`portfolio-cat-link-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setActiveCategory(cat)}
                  className="text-[10px] font-mono tracking-widest uppercase text-white/30 hover:text-white/60 transition-colors duration-300"
                >
                  {cat} ({portfolioItems.filter(i => i.category === cat).length})
                </button>
              ))}
            </div>
            <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">
              {portfolioItems.length} Projects Total
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY NEXORA */}
      <section className="relative py-32 px-6 overflow-hidden" id="why-nexora">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[150px] ambient-pulse" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.035), rgba(80,50,255,0.035), transparent 70%)' }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/[0.10] to-transparent" />
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-20 text-center">
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase block mb-4">OUR APPROACH</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6">Why Nexora</h2>
            <p className="text-white/40 font-light text-lg max-w-xl mx-auto leading-relaxed">
              Real AI-powered creative work today. A foundation for intelligent systems tomorrow.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6 mb-14">
            {whyNexoraCards.map((card, i) => (
              <div
                key={card.title}
                className={`group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500 flex flex-col gap-6 ${cardGlows[i]}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.10] group-hover:border-white/[0.15] transition-all duration-500">
                  {card.icon === "sparkles" && <Sparkles className="w-5 h-5 text-white/60" strokeWidth={1.2} />}
                  {card.icon === "zap" && <Zap className="w-5 h-5 text-white/60" strokeWidth={1.2} />}
                  {card.icon === "film" && <Film className="w-5 h-5 text-white/60" strokeWidth={1.2} />}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-light tracking-wide text-white/90">{card.title}</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{card.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/[0.10] to-transparent group-hover:via-cyan-400/[0.30] transition-all duration-500 w-full" />
              </div>
            ))}
          </motion.div>

          {/* Bridge statement */}
          <motion.div variants={fadeUp} className="text-center mb-8 mt-2">
            <p className="text-white/22 text-sm font-light italic tracking-wide max-w-lg mx-auto leading-relaxed">
              "What we build today becomes the foundation for the intelligent systems we want to build tomorrow."
            </p>
          </motion.div>

          {/* CTA to About page */}
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 pt-2">
            <Link href="/about">
              <button className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/[0.12] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/20 transition-all duration-400 hover:shadow-[0_0_24px_rgba(100,80,255,0.10)]">
                <Sparkles className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70 transition-colors" strokeWidth={1.3} />
                <span className="text-xs font-light tracking-[0.2em] uppercase text-white/50 group-hover:text-white/80 transition-colors">
                  Discover the Vision
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white/60 transition-all duration-300 group-hover:translate-x-0.5" />
              </button>
            </Link>
            <p className="text-white/25 text-[11px] font-light tracking-wide">
              Explore the future of Nexora Labs and Project XORA.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* CLIENTS / MARQUEE */}
      <section className="py-24 border-y border-white/[0.06] overflow-hidden" id="clients">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="font-mono text-[10px] tracking-widest text-white/30 uppercase mb-4">Trusted By</h2>
          <p className="text-white/50 text-sm uppercase tracking-widest">The world's most ambitious brands.</p>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-24 py-4 shrink-0">
            {["LUMINA", "VANTARA", "ORION", "CELESTIA", "AURUM", "NEXON"].map((brand, i) => (
              <span key={i} className="text-2xl md:text-3xl font-light tracking-[0.2em] text-white/20 hover:text-white/60 transition-colors duration-500 cursor-default">
                {brand}
              </span>
            ))}
          </div>
          <div className="animate-marquee whitespace-nowrap flex items-center gap-24 py-4 shrink-0 absolute top-0">
            {["LUMINA", "VANTARA", "ORION", "CELESTIA", "AURUM", "NEXON"].map((brand, i) => (
              <span key={`dup-${i}`} className="text-2xl md:text-3xl font-light tracking-[0.2em] text-white/20 hover:text-white/60 transition-colors duration-500 cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-48 px-6 relative flex flex-col items-center justify-center text-center" id="contact">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 flex flex-col items-center"
        >
          <motion.h2 variants={fadeUp} className="text-[clamp(3rem,8vw,7rem)] font-light tracking-tight mb-8 leading-tight">
            <span className="block">Let's build something</span>
            <span className="block italic text-white/60">impossible.</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="font-mono text-white/30 text-xs tracking-widest mb-12 uppercase">
            Accepting new clients for Q3 2026.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a href="https://wa.me/628127578986" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                data-testid="contact-cta-btn"
                className="rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 h-14 px-10 text-sm tracking-widest uppercase font-semibold transition-all duration-500"
              >
                Book a Discovery Call
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* CONNECT WITH NEXORA */}
      <section className="relative py-32 px-6 bg-black border-t border-white/[0.04] overflow-hidden" id="connect">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(139,92,246,0.06),transparent)]" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          {/* Section label */}
          <motion.p variants={fadeUp} className="font-mono text-[10px] tracking-[0.35em] text-white/25 uppercase mb-6 text-center">
            Connect With Nexora
          </motion.p>

          {/* Headline */}
          <motion.h2 variants={fadeUp} className="text-[clamp(2rem,5vw,4rem)] font-light tracking-tight text-center mb-4 leading-tight">
            Let's Build Your Next<br />
            <span className="text-white/50 italic">AI Commercial</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p variants={fadeUp} className="text-white/40 text-center text-sm font-light max-w-md mx-auto mb-16 leading-relaxed">
            Follow our latest AI commercials and contact us directly for your next project.
          </motion.p>

          {/* Glassmorphic card */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8 md:p-12"
          >
            {/* Inner top rule */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">

              {/* Left — Primary CTA */}
              <div className="flex flex-col items-center lg:items-start gap-4 flex-shrink-0">
                <p className="font-mono text-[9px] tracking-[0.3em] text-white/25 uppercase">Direct Contact</p>
                <a
                  href="https://wa.me/628127578986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-black h-16 px-8 text-sm tracking-widest uppercase font-semibold transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(37,211,102,0.2)] hover:shadow-[0_0_60px_rgba(37,211,102,0.35)]"
                >
                  {/* WhatsApp SVG */}
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <p className="font-mono text-[9px] tracking-wider text-white/20">+62 812-7578-986</p>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px h-24 bg-white/[0.06]" />
              <div className="lg:hidden w-full h-px bg-white/[0.06]" />

              {/* Right — Social links */}
              <div className="flex flex-col items-center lg:items-start gap-5 flex-1 w-full lg:w-auto">
                <p className="font-mono text-[9px] tracking-[0.3em] text-white/25 uppercase">Follow Nexora</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/nexoralabs.id?igsh=ZjV6NHdnM2FubHBr&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 px-5 py-4 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Instagram className="w-4 h-4 text-white/50 group-hover:text-[#E1306C] transition-colors duration-300 flex-shrink-0" />
                    <div>
                      <p className="text-white/70 text-xs font-light group-hover:text-white transition-colors">Instagram</p>
                      <p className="font-mono text-[9px] text-white/25 tracking-wider">@nexoralabs.id</p>
                    </div>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@labsnexora?_r=1&_t=ZS-977FzQaQHWX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 px-5 py-4 transition-all duration-300 hover:scale-[1.02]"
                  >
                    {/* TikTok SVG */}
                    <svg className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-300 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                    </svg>
                    <div>
                      <p className="text-white/70 text-xs font-light group-hover:text-white transition-colors">TikTok</p>
                      <p className="font-mono text-[9px] text-white/25 tracking-wider">@labsnexora</p>
                    </div>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com/@nexoracreates029?si=kBFE9vbU6ffd84iN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 px-5 py-4 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Youtube className="w-4 h-4 text-white/50 group-hover:text-[#FF0000] transition-colors duration-300 flex-shrink-0" />
                    <div>
                      <p className="text-white/70 text-xs font-light group-hover:text-white transition-colors">YouTube</p>
                      <p className="font-mono text-[9px] text-white/25 tracking-wider">@nexoracreates029</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Inner bottom rule */}
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative px-6 py-12 border-t border-cyan-400/[0.08] bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[80px] ambient-pulse" style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.04), rgba(30,58,138,0.05), transparent 70%)' }} />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm font-light tracking-widest uppercase">NEXORA AI STUDIO</div>
            <div className="flex gap-8">
              {navItems.filter(i => i !== "Clients").map(item =>
                item === "About" ? (
                  <Link
                    key={item}
                    href="/about"
                    className="text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors"
                    data-testid="footer-link-about"
                  >
                    {item}
                  </Link>
                ) : (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors" data-testid={`footer-link-${item.toLowerCase()}`}>
                    {item}
                  </a>
                )
              )}
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors" data-testid="footer-social-twitter"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" data-testid="footer-social-linkedin"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" data-testid="footer-social-instagram"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>
          
          <div className="w-full h-px bg-white/[0.06]" />

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-widest font-mono">
            <div>© 2026 Nexora AI Studio. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
