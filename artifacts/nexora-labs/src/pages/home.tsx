import { useState, useEffect, useRef, useCallback } from "react";
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
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Services", "About", "Portfolio", "Clients", "Contact"];

const portfolioCategories = ["All", "AI Luxury Jewelry Commercial", "AI Commercials", "AI Fashion Ads", "AI Product Ads", "AI Brand Campaigns"] as const;
type PortfolioCategory = typeof portfolioCategories[number];

const portfolioItems = [
  {
    id: "001",
    category: "AI Luxury Jewelry Commercial" as PortfolioCategory,
    title: "White Serpent Jewelry",
    tag: "Luxury Commercial",
    year: "2026",
    gradient: "from-stone-700/40 via-neutral-900 to-black",
    featured: true,
  },
  {
    id: "002",
    category: "AI Commercials" as PortfolioCategory,
    title: "Vantara — Zero Hour",
    tag: "30s Spot",
    year: "2025",
    gradient: "from-indigo-900/20 via-black to-black",
    featured: false,
  },
  {
    id: "003",
    category: "AI Fashion Ads" as PortfolioCategory,
    title: "Celestia — Autumn Collection",
    tag: "Editorial Film",
    year: "2026",
    gradient: "from-rose-900/20 via-black to-black",
    featured: false,
  },
  {
    id: "004",
    category: "AI Fashion Ads" as PortfolioCategory,
    title: "Aurum — Black Edition",
    tag: "Lookbook Film",
    year: "2025",
    gradient: "from-amber-900/20 via-black to-black",
    featured: false,
  },
  {
    id: "005",
    category: "AI Product Ads" as PortfolioCategory,
    title: "Orion — Product Launch",
    tag: "Hero Video",
    year: "2026",
    gradient: "from-emerald-900/20 via-black to-black",
    featured: false,
  },
  {
    id: "006",
    category: "AI Product Ads" as PortfolioCategory,
    title: "Nexon — Object Study",
    tag: "CGI Spot",
    year: "2025",
    gradient: "from-cyan-900/20 via-black to-black",
    featured: false,
  },
  {
    id: "007",
    category: "AI Brand Campaigns" as PortfolioCategory,
    title: "Vantara — The Next Chapter",
    tag: "Brand Film",
    year: "2026",
    gradient: "from-violet-900/20 via-black to-black",
    featured: false,
  },
  {
    id: "008",
    category: "AI Brand Campaigns" as PortfolioCategory,
    title: "Lumina — Origin Story",
    tag: "Manifesto",
    year: "2025",
    gradient: "from-purple-900/20 via-black to-black",
    featured: false,
  },
];

const testimonials = [
  {
    quote: "Nexora cut our production timeline from 3 months to 3 days. The commercial outperformed everything we'd done before.",
    author: "Sarah K.",
    role: "CMO at Lumina"
  },
  {
    quote: "I've never seen anything like it. The AI understood our brand better than agencies we'd worked with for years.",
    author: "James R.",
    role: "Head of Marketing at Vantara"
  },
  {
    quote: "We launched a full brand campaign in a week. The results were extraordinary. We're never going back.",
    author: "Priya M.",
    role: "Founder at Celestia"
  }
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

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");
  const [showVideoModal, setShowVideoModal] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    testimonialTimerRef.current = setInterval(nextTestimonial, 5000);
    return () => {
      if (testimonialTimerRef.current) clearInterval(testimonialTimerRef.current);
    };
  }, [nextTestimonial]);
  
  const resetTimer = () => {
    if (testimonialTimerRef.current) clearInterval(testimonialTimerRef.current);
    testimonialTimerRef.current = setInterval(nextTestimonial, 5000);
  };

  const handleNextTestimonial = () => {
    nextTestimonial();
    resetTimer();
  };

  const handlePrevTestimonial = () => {
    prevTestimonial();
    resetTimer();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 selection:text-white overflow-hidden">
      
      {/* NAVIGATION */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 flex items-center justify-between px-6 py-5 ${
          scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent border-transparent"
        }`}
      >
        <a href="#" data-testid="nav-logo" className="text-sm font-light tracking-widest uppercase">
          NEXORA AI STUDIO
        </a>
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              data-testid={`nav-link-${item.toLowerCase()}`}
              className="text-xs font-light uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          data-testid="nav-contact-btn"
          className="rounded-full border-white/20 hover:bg-white hover:text-black text-xs px-5 h-9 font-light tracking-widest uppercase bg-transparent transition-all"
        >
          Book a Discovery Call
        </Button>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(60,40,250,0.05),transparent_60%)] pointer-events-none" />
        
        {/* Subtle mesh background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

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
          >
            <Button 
              data-testid="hero-cta"
              className="rounded-full border border-white/20 bg-white/5 backdrop-blur hover:bg-white hover:text-black h-14 px-8 text-sm tracking-widest uppercase font-light transition-all duration-500"
            >
              Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
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
      <section className="py-32 px-6" id="about">
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
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col gap-16">
            <div className="space-y-8 text-lg text-white/55 font-light leading-relaxed">
              <p>Nexora AI Studio was built at the crossroads of machine learning and cinematic craft — because the future of advertising doesn't need a camera crew.</p>
              <p>We train custom AI models on your brand's visual identity, then direct them like a Hollywood production house. The result is advertising that feels human, moves people, and gets made in days.</p>
              <p>We work with a small number of ambitious clients each quarter. If you're here, you're probably the right fit.</p>
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
      <section className="py-32 px-6" id="services">
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
                <div className="w-16 md:w-32 mb-4 md:mb-0">
                  <span className="font-mono text-sm text-white/20">{service.number}</span>
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

      {/* WHITE SERPENT JEWELRY — FEATURED PROJECT SHOWCASE */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black border-t border-white/[0.04]">
        {/* Cinematic background — layered gradients evoking gold, pearl, serpent scales */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/60 via-black to-black" />
          <div className="absolute inset-0 bg-gradient-to-tl from-yellow-950/20 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-800/10 via-transparent to-transparent" />
          {/* Subtle serpentine curve — CSS only */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <path d="M-100,450 C200,100 400,800 700,400 C1000,0 1200,700 1600,350" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M-100,500 C250,150 450,850 750,450 C1050,50 1250,750 1650,400" stroke="white" strokeWidth="0.8" fill="none" />
          </svg>
          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_100%)]" />
        </div>

        {/* Top-left label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute top-12 left-8 md:left-16"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">001 — Featured Project</span>
        </motion.div>

        {/* Top-right category badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="absolute top-12 right-8 md:right-16"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase border border-white/10 px-4 py-2">
            AI Luxury Jewelry Commercial
          </span>
        </motion.div>

        {/* Content — anchored bottom-left, Apple-style */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 px-8 md:px-16 pb-16 md:pb-24 max-w-4xl"
        >
          <motion.p variants={fadeUp} className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-6">
            2026
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-[clamp(2.5rem,7vw,6.5rem)] font-light leading-[0.9] tracking-[-0.01em] mb-8"
          >
            White Serpent<br />
            <span className="text-white/50">Jewelry</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/50 text-lg font-light leading-relaxed max-w-lg mb-10">
            A cinematic AI-generated luxury commercial featuring a white serpent, high-fashion styling, and premium visual storytelling. Where nature and opulence become one.
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-6">
            <Button
              data-testid="watch-project-btn"
              onClick={() => setShowVideoModal(true)}
              className="group rounded-full bg-white text-black hover:bg-white/90 h-14 px-8 text-sm tracking-widest uppercase font-light transition-all duration-500 hover:scale-105 flex items-center gap-3"
            >
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center flex-shrink-0">
                <Play className="w-3.5 h-3.5 ml-0.5" fill="currentColor" />
              </span>
              Watch Project
            </Button>

            <span className="text-white/20 text-xs font-mono tracking-widest uppercase">3m 22s</span>
          </motion.div>
        </motion.div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />
      </section>

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
              className="relative w-full max-w-5xl aspect-video bg-neutral-950 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Placeholder — replace src with real video URL when ready */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-2">
                    <Play className="w-6 h-6 text-white/60 ml-1" fill="currentColor" />
                  </div>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">White Serpent Jewelry</p>
                  <p className="text-white/20 text-xs font-light">Video coming soon — add your video URL to activate this player.</p>
                </div>
              </div>

              {/* Close button */}
              <button
                data-testid="video-modal-close"
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Project info strip */}
              <div className="absolute bottom-0 left-0 right-0 px-8 py-5 border-t border-white/10 flex justify-between items-center">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase mb-1">001 — Featured Project</p>
                  <p className="text-sm font-light text-white/70">White Serpent Jewelry</p>
                </div>
                <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase">AI Luxury Jewelry Commercial · 2026</span>
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
              className="flex flex-col gap-4"
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
                        className="group relative aspect-square md:aspect-[21/9] bg-black overflow-hidden cursor-pointer border border-white/[0.06] hover:border-white/20 transition-colors duration-700"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} opacity-40 group-hover:scale-105 transition-transform duration-[1.5s] ease-out`} />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10">
                            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute top-6 right-6">
                          <span className="font-mono text-[10px] tracking-widest uppercase text-white/30 bg-black/40 backdrop-blur px-3 py-1 border border-white/10">
                            {featured.category}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-white/50 font-mono text-[10px] tracking-widest uppercase mb-3">{featured.id} — FEATURED</p>
                          <div className="flex justify-between items-end">
                            <h3 className="text-2xl md:text-3xl font-light tracking-wide">{featured.title}</h3>
                            <span className="text-xs text-white/40 font-mono hidden md:block">{featured.year} // {featured.tag}</span>
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
                            className="group relative aspect-square md:aspect-video bg-black overflow-hidden cursor-pointer border border-white/[0.06] hover:border-white/20 transition-colors duration-700"
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:scale-105 transition-transform duration-[1.5s] ease-out`} />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              <div className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10">
                                <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                              </div>
                            </div>
                            <div className="absolute top-4 right-4">
                              <span className="font-mono text-[9px] tracking-widest uppercase text-white/30 bg-black/40 backdrop-blur px-2 py-1 border border-white/10">
                                {item.category}
                              </span>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              <p className="text-white/50 font-mono text-[10px] tracking-widest uppercase mb-2">{item.id} // {item.tag}</p>
                              <h3 className="text-lg md:text-xl font-light tracking-wide">{item.title}</h3>
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

      {/* TESTIMONIALS */}
      <section className="py-32 px-6" id="testimonials">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="mb-24">
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase block mb-4">TESTIMONIALS</span>
            <h2 className="text-4xl font-light tracking-wide">What our clients say.</h2>
          </motion.div>

          <motion.div variants={fadeUp} className="relative max-w-3xl mx-auto px-12 md:px-20 min-h-[300px] flex flex-col items-center justify-center">
            <button 
              onClick={handlePrevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-2"
              data-testid="testimonial-prev"
            >
              <ChevronLeft className="w-8 h-8 font-light" strokeWidth={1} />
            </button>

            <button 
              onClick={handleNextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-2"
              data-testid="testimonial-next"
            >
              <ChevronRight className="w-8 h-8 font-light" strokeWidth={1} />
            </button>

            <div className="mb-6 font-serif text-6xl text-white/10 leading-none">"</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <p className="text-xl md:text-2xl font-light text-white/80 italic leading-relaxed mb-8">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="text-sm font-mono text-white/40 tracking-widest uppercase mt-6">
                  {testimonials[currentTestimonial].author} — {testimonials[currentTestimonial].role}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-3 mt-12">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentTestimonial(idx);
                    resetTimer();
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${currentTestimonial === idx ? "bg-white" : "bg-white/20"}`}
                  data-testid={`testimonial-dot-${idx}`}
                />
              ))}
            </div>
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
            <Button 
              size="lg" 
              data-testid="contact-cta-btn"
              className="rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 h-14 px-10 text-sm tracking-widest uppercase font-semibold transition-all duration-500"
            >
              Book a Discovery Call
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 border-t border-white/[0.06] bg-black">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm font-light tracking-widest uppercase">NEXORA AI STUDIO</div>
            <div className="flex gap-8">
              {navItems.filter(i => i !== "Clients").map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors" data-testid={`footer-link-${item.toLowerCase()}`}>
                  {item}
                </a>
              ))}
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
