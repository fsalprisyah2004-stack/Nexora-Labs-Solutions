import { useState, useEffect } from "react";
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
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Services", "About", "Portfolio", "Clients", "Contact"];

const portfolioCategories = ["All", "AI Commercials", "AI Fashion Ads", "AI Product Ads", "AI Brand Campaigns"] as const;
type PortfolioCategory = typeof portfolioCategories[number];

const portfolioItems = [
  {
    id: "001",
    category: "AI Commercials" as PortfolioCategory,
    title: "Lumina — The Arrival",
    tag: "60s Spot",
    year: "2026",
    gradient: "from-blue-900/50 via-black to-black",
    featured: true,
  },
  {
    id: "002",
    category: "AI Commercials" as PortfolioCategory,
    title: "Vantara — Zero Hour",
    tag: "30s Spot",
    year: "2025",
    gradient: "from-indigo-900/40 via-neutral-900 to-black",
    featured: false,
  },
  {
    id: "003",
    category: "AI Fashion Ads" as PortfolioCategory,
    title: "Celestia — Autumn Collection",
    tag: "Editorial Film",
    year: "2026",
    gradient: "from-rose-900/40 via-neutral-900 to-black",
    featured: false,
  },
  {
    id: "004",
    category: "AI Fashion Ads" as PortfolioCategory,
    title: "Aurum — Black Edition",
    tag: "Lookbook Film",
    year: "2025",
    gradient: "from-amber-900/30 via-neutral-900 to-black",
    featured: false,
  },
  {
    id: "005",
    category: "AI Product Ads" as PortfolioCategory,
    title: "Orion — Product Launch",
    tag: "Hero Video",
    year: "2026",
    gradient: "from-emerald-900/40 via-neutral-900 to-black",
    featured: false,
  },
  {
    id: "006",
    category: "AI Product Ads" as PortfolioCategory,
    title: "Nexon — Object Study",
    tag: "CGI Spot",
    year: "2025",
    gradient: "from-cyan-900/30 via-neutral-900 to-black",
    featured: false,
  },
  {
    id: "007",
    category: "AI Brand Campaigns" as PortfolioCategory,
    title: "Vantara — The Next Chapter",
    tag: "Brand Film",
    year: "2026",
    gradient: "from-violet-900/40 via-neutral-900 to-black",
    featured: false,
  },
  {
    id: "008",
    category: "AI Brand Campaigns" as PortfolioCategory,
    title: "Lumina — Origin Story",
    tag: "Manifesto",
    year: "2025",
    gradient: "from-purple-900/40 via-neutral-900 to-black",
    featured: false,
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 selection:text-white overflow-hidden">
      
      {/* NAVIGATION */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 flex items-center justify-between px-6 py-5 ${
          scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent border-transparent"
        }`}
      >
        <a href="#" data-testid="nav-logo" className="text-sm font-light tracking-widest uppercase">
          NEXORA LABS
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
          Contact Us
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
            NEXORA LABS
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
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
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

      {/* SERVICES */}
      <section className="py-32 px-6" id="services">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4">What We Build</h2>
            <p className="text-white/40 text-xl font-light">Intelligence designed to perform.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { 
                title: "Generative Commercials", 
                desc: "Full AI-produced video spots. No cameras. No limits.", 
                icon: Film 
              },
              { 
                title: "Brand Identity AI", 
                desc: "Neural models trained on your visual language.", 
                icon: Sparkles 
              },
              { 
                title: "Real-Time Synthesis", 
                desc: "Live content generation, personalized per viewer.", 
                icon: Zap 
              },
              { 
                title: "Strategic Intelligence", 
                desc: "AI-driven campaign analysis and optimization.", 
                icon: BarChart 
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="group bg-neutral-950 border border-white/8 p-8 transition-all duration-500 hover:border-white/20 hover:bg-neutral-900/50 cursor-default"
                data-testid={`service-card-${i}`}
              >
                <service.icon className="w-8 h-8 text-white/60 mb-8" strokeWidth={1} />
                <h3 className="text-2xl font-light tracking-wide mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-32 px-6 bg-neutral-950 border-y border-white/5" id="about">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24"
        >
          <motion.div variants={fadeUp} className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase block mb-8">About</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight">
              We don't produce content. <br/><span className="text-white/40">We architect desire.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7 flex flex-col gap-16">
            <div className="space-y-8 text-lg md:text-xl text-white/60 font-light leading-relaxed">
              <p>Nexora Labs was founded at the intersection of machine learning and cinematic craft. We exist to give brands a superpower they've never had before.</p>
              <p>Our models are trained on decades of award-winning advertising. Our directors are former Hollywood creatives. Our engineers live at the frontier of generative AI.</p>
              <p>The result: commercials that feel completely human and cost a fraction of what you'd pay a production house.</p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              {[
                { val: "48hrs", label: "From brief to final render" },
                { val: "10×", label: "Faster than traditional production" },
                { val: "0", label: "Cameras on set" }
              ].map((stat, i) => (
                <div key={i} className={`flex flex-col ${i !== 0 ? "pl-8 border-l border-white/10" : ""}`}>
                  <span className="font-mono text-3xl md:text-4xl mb-2">{stat.val}</span>
                  <span className="text-xs text-white/40 uppercase tracking-widest leading-relaxed">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-32 px-6" id="portfolio">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4">Selected Work</h2>
            <p className="text-white/40 text-xl font-light">A glimpse of the impossible.</p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-12 border-b border-white/5 pb-8">
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
                        className="group relative aspect-square md:aspect-[21/9] bg-neutral-900 overflow-hidden cursor-pointer border border-transparent hover:border-white/10 transition-colors duration-700"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} opacity-70 group-hover:scale-105 transition-transform duration-[1.5s] ease-out`} />
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
                            className="group relative aspect-square md:aspect-video bg-neutral-900 overflow-hidden cursor-pointer border border-transparent hover:border-white/10 transition-colors duration-700"
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-70 group-hover:scale-105 transition-transform duration-[1.5s] ease-out`} />
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
          <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-8 justify-between items-center">
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

      {/* CLIENTS / MARQUEE */}
      <section className="py-24 border-y border-white/5 bg-neutral-950/50 overflow-hidden" id="clients">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(60,40,250,0.08),transparent_50%)] pointer-events-none" />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10"
        >
          <motion.h2 variants={fadeUp} className="text-[clamp(3rem,8vw,7rem)] font-light leading-[1] tracking-tight mb-8">
            <span className="block">Let's Build</span>
            <span className="block text-white/80">Something Impossible</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-white/40 text-sm font-light tracking-widest uppercase mb-12">
            We're accepting new clients for Q3 2026.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button 
              size="lg" 
              data-testid="contact-cta-btn"
              className="rounded-full bg-white text-black hover:bg-white/90 hover:scale-105 h-16 px-12 text-sm tracking-widest uppercase font-semibold transition-all duration-300"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 border-t border-white/5 bg-neutral-950">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm font-light tracking-widest uppercase">NEXORA LABS</div>
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
          
          <div className="w-full h-px bg-white/5" />

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-widest font-mono">
            <div>© 2026 Nexora Labs. All rights reserved.</div>
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
