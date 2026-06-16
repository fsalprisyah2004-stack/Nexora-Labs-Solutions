import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Cpu,
  Globe,
  CircleDot,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Services", "About", "Portfolio", "Clients", "Contact"];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const missionItems = [
  "Build useful AI-powered digital tools.",
  "Create premium and responsive websites using AI-assisted frontend workflows.",
  "Develop intelligent assistants that help users work smarter.",
  "Explore AI systems for finance, business, coding, creativity, productivity, and research.",
  "Make complex technology easier to understand and use.",
  "Help people turn hidden ideas into real projects.",
  "Build digital experiences that are modern, cinematic, and practical.",
];

const xoraCapabilities = [
  { icon: "zap", label: "Finance analysis" },
  { icon: "zap", label: "Stock and crypto insights" },
  { icon: "cpu", label: "Business planning" },
  { icon: "cpu", label: "Coding and website development" },
  { icon: "globe", label: "Videography and video editing" },
  { icon: "sparkles", label: "AI image and animation generation" },
  { icon: "brain", label: "Research and learning" },
  { icon: "globe", label: "Smart home control" },
  { icon: "cpu", label: "Computer and mobile device assistance" },
  { icon: "sparkles", label: "Content creation and uploading" },
  { icon: "zap", label: "Productivity and task management" },
];

function XoraIcon({ icon }: { icon: string }) {
  const cls = "w-3 h-3 text-white/40 flex-shrink-0";
  if (icon === "zap") return <Zap className={cls} strokeWidth={1.3} />;
  if (icon === "cpu") return <Cpu className={cls} strokeWidth={1.3} />;
  if (icon === "brain") return <Brain className={cls} strokeWidth={1.3} />;
  if (icon === "globe") return <Globe className={cls} strokeWidth={1.3} />;
  return <Sparkles className={cls} strokeWidth={1.3} />;
}

function NavLink({ item }: { item: string }) {
  if (item === "About") {
    return (
      <Link
        href="/about"
        className="text-xs font-light uppercase tracking-widest text-white transition-colors duration-300"
      >
        {item}
      </Link>
    );
  }
  return (
    <a
      href={`/#${item.toLowerCase()}`}
      className="text-xs font-light uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300"
    >
      {item}
    </a>
  );
}

export default function About() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 selection:text-white">

      {/* NAV */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 flex items-center justify-between px-6 py-5 ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link href="/" className="text-sm font-light tracking-widest uppercase">
          NEXORA AI STUDIO
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <NavLink key={item} item={item} />
          ))}
        </div>
        <a
          href="https://wa.me/628127578986"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-white/20 hover:bg-white hover:text-black text-xs px-5 h-9 font-light tracking-widest uppercase bg-transparent transition-all"
          >
            Book a Discovery Call
          </Button>
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Background radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(80,60,255,0.07),transparent_65%)] pointer-events-none" />

        {/* AI VISUAL — glowing orb + rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none select-none">
          {/* Outer pulsing ring 1 */}
          <motion.div
            className="absolute inset-0 rounded-full border border-white/[0.04]"
            animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Outer pulsing ring 2 */}
          <motion.div
            className="absolute inset-[60px] rounded-full border border-white/[0.06]"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.15, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
          {/* Mid ring */}
          <motion.div
            className="absolute inset-[120px] rounded-full border border-white/[0.08]"
            animate={{ scale: [1, 1.04, 1], opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
          {/* Inner ring */}
          <motion.div
            className="absolute inset-[180px] rounded-full border border-purple-500/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          {/* Core glow */}
          <div className="absolute inset-[210px] rounded-full bg-[radial-gradient(circle,rgba(100,80,255,0.18),rgba(40,20,180,0.08),transparent_70%)]" />
          {/* Center orb */}
          <div className="absolute inset-[230px] rounded-full bg-[radial-gradient(circle,rgba(140,120,255,0.22),rgba(80,60,255,0.10),transparent_80%)] blur-[2px]" />

          {/* Orbital dot 1 */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-[240px] h-[240px] -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/40 shadow-[0_0_6px_2px_rgba(180,160,255,0.4)]" />
          </motion.div>
          {/* Orbital dot 2 */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-[180px] h-[180px] -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400/60 shadow-[0_0_4px_1px_rgba(160,120,255,0.5)]" />
          </motion.div>

          {/* Grid lines — subtle */}
          <div
            className="absolute inset-0 rounded-full opacity-[0.03]"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,0.8) 28px, rgba(255,255,255,0.8) 29px), repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(255,255,255,0.8) 28px, rgba(255,255,255,0.8) 29px)",
            }}
          />
        </div>

        {/* Hero text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp}>
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase block mb-6">
              NEXORA LABS — ABOUT
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.9] mb-8"
          >
            About<br />
            <span className="text-white/50">Nexora Labs</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/40 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            An AI-focused digital lab built to explore the future of artificial
            intelligence, creative technology, frontend development, and
            intelligent digital systems.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link href="/">
              <button className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/[0.10] bg-transparent hover:bg-white/[0.05] hover:border-white/20 transition-all duration-400 text-white/40 hover:text-white/80">
                <ArrowRight className="w-3.5 h-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5" />
                <span className="text-[11px] font-light tracking-[0.2em] uppercase">Back to Home</span>
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* SECTION 1 — What is Nexora Labs */}
      <section className="py-28 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start"
        >
          <motion.div variants={fadeUp}>
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/25 uppercase block mb-6">
              01 — IDENTITY
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide leading-snug">
              What is<br />Nexora Labs?
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <p className="text-white/50 font-light leading-relaxed">
              Nexora Labs is a future artificial intelligence company and digital
              innovation lab focused on building AI-powered tools, premium
              websites, intelligent assistants, and creative digital systems.
            </p>
            <p className="text-white/50 font-light leading-relaxed">
              The goal of Nexora Labs is to use artificial intelligence to help
              people move faster, think clearer, build better, and turn ideas
              into real digital products.
            </p>
            <p className="text-white/50 font-light leading-relaxed">
              Nexora Labs combines AI-assisted frontend development, creative
              direction, visual storytelling, automation, and experimental AI
              systems into one long-term vision.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div className="w-full h-px bg-white/[0.05]" />

      {/* SECTION 2 — Our Vision */}
      <section className="py-28 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start"
        >
          <motion.div variants={fadeUp} className="md:order-2">
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/25 uppercase block mb-6">
              02 — VISION
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide leading-snug">
              Our Vision
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="md:order-1 flex flex-col gap-5">
            <p className="text-white/50 font-light leading-relaxed">
              The vision of Nexora Labs is to build intelligent digital systems
              that make advanced technology easier for everyone to use.
            </p>
            <p className="text-white/50 font-light leading-relaxed">
              We believe that AI can help humans unlock ideas that were once
              difficult, expensive, or impossible to execute.
            </p>
            <p className="text-white/50 font-light leading-relaxed">
              Nexora Labs exists to explore a future where people can build
              websites, analyze information, create videos, design visuals,
              manage tasks, and make better decisions with the help of
              intelligent AI assistants.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div className="w-full h-px bg-white/[0.05]" />

      {/* SECTION 3 — Our Mission */}
      <section className="py-28 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-16 text-center">
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/25 uppercase block mb-6">
              03 — MISSION
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Our Mission
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-sm"
          >
            <ul className="flex flex-col gap-5">
              {missionItems.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <CheckCircle
                    className="w-4 h-4 text-white/25 flex-shrink-0 mt-0.5"
                    strokeWidth={1.3}
                  />
                  <span className="text-white/55 font-light text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 4 — XORA Vision (full-width highlight) */}
      <section className="py-28 px-6 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80,50,255,0.06),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 border-y border-white/[0.05] pointer-events-none" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-7xl mx-auto relative"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16 text-center">
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/25 uppercase block mb-6">
              04 — LONG-TERM AI VISION
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-6">
              The XORA Vision
            </h2>
            <p className="text-white/40 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              XORA is the long-term AI assistant vision by Nexora Labs — imagined
              as a real-life intelligent assistant inspired by futuristic AI
              systems like Jarvis. An AI agent that can understand commands,
              analyze information, assist with daily work, and connect with
              digital devices.
            </p>
          </motion.div>

          {/* XORA name badge */}
          <motion.div variants={fadeUp} className="flex justify-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.04] border border-white/[0.10] backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-purple-400/70 animate-pulse" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/70">
                PROJECT XORA — IN DEVELOPMENT
              </span>
            </div>
          </motion.div>

          {/* Capabilities grid */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto mb-12"
          >
            {xoraCapabilities.map((cap) => (
              <div
                key={cap.label}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
              >
                <XoraIcon icon={cap.icon} />
                <span className="text-white/50 text-xs font-light tracking-wide">
                  {cap.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-center text-white/30 font-light text-sm max-w-xl mx-auto leading-relaxed"
          >
            XORA is not only designed to answer questions. The long-term dream is
            for XORA to become a practical digital partner that can help users
            plan, analyze, build, edit, organize, and execute ideas.
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION 5 — Human Ideas Amplified */}
      <section className="py-28 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start"
        >
          <motion.div variants={fadeUp}>
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/25 uppercase block mb-6">
              05 — PHILOSOPHY
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide leading-snug">
              Human Ideas,<br />Amplified by AI
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <p className="text-white/50 font-light leading-relaxed">
              Many people have powerful ideas, but they do not always have the
              tools, time, or technical skills to bring those ideas to life.
              Nexora Labs believes AI can change that.
            </p>
            <p className="text-white/50 font-light leading-relaxed">
              With the right AI assistant, ideas that once felt impossible can
              become possible. A person who cannot code can start building. A
              person who cannot edit videos can start creating. A person who
              cannot analyze complex data can start understanding it.
            </p>
            <p className="text-white/50 font-light leading-relaxed">
              Nexora Labs wants to be part of that future.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <div className="w-full h-px bg-white/[0.05]" />

      {/* SECTION 6 — Current Status */}
      <section className="py-28 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeUp} className="mb-16 text-center">
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/25 uppercase block mb-6">
              06 — STATUS
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Current Status
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="max-w-2xl mx-auto text-center flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.10] bg-white/[0.03] mx-auto">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400/70 animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">
                Early Development & Concept Stage
              </span>
            </div>
            <p className="text-white/50 font-light leading-relaxed">
              Nexora Labs and XORA are currently in the early development and
              concept stage. Project XORA is a long-term AI agent vision — it is
              not presented as a finished product yet.
            </p>
            <p className="text-white/50 font-light leading-relaxed">
              The project will be developed step by step through learning,
              experimentation, frontend development, AI workflows, automation,
              and future product development.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(60,40,220,0.05),transparent_60%)] pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/25 uppercase">
            SEE WHAT WE BUILD
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide">
            Explore the Portfolio
          </h2>
          <p className="text-white/40 font-light leading-relaxed">
            See our AI-powered commercials, brand campaigns, and cinematic
            digital content.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="/#portfolio">
              <button className="group flex items-center gap-2 rounded-full h-12 px-8 text-xs tracking-[0.2em] uppercase font-light border border-white/25 bg-white/[0.06] backdrop-blur-sm hover:bg-white hover:text-black hover:border-white transition-all duration-500 text-white">
                Explore Portfolio
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </a>
            <Link href="/">
              <button className="group flex items-center gap-2 rounded-full h-12 px-8 text-xs tracking-[0.2em] uppercase font-light border border-white/[0.10] bg-transparent hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 text-white/55 hover:text-white">
                <ArrowRight className="w-3.5 h-3.5 rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5" />
                Back to Home
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 border-t border-white/[0.06] bg-black">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-sm font-light tracking-widest uppercase">
              NEXORA AI STUDIO
            </div>
            <div className="flex gap-8 flex-wrap justify-center">
              {navItems.filter((i) => i !== "Clients").map((item) =>
                item === "About" ? (
                  <Link
                    key={item}
                    href="/about"
                    className="text-xs text-white hover:text-white uppercase tracking-widest transition-colors"
                  >
                    {item}
                  </Link>
                ) : (
                  <a
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    className="text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/nexoralabs.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-white/[0.06]" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/30 uppercase tracking-widest font-mono">
            <div>© 2026 Nexora AI Studio. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/60 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white/60 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
