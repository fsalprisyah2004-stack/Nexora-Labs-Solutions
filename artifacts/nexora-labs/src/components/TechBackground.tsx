import { motion } from "framer-motion";

const particles: { x: number; y: number; dur: number; delay: number; s: number; color: string; glow: string }[] = [
  { x: 6,  y: 5,  dur: 6.3, delay: 0,   s: 2,   color: "rgba(6,182,212,0.80)",  glow: "0 0 6px rgba(6,182,212,0.60)" },
  { x: 18, y: 28, dur: 8.1, delay: 1.2, s: 1.5, color: "rgba(99,102,241,0.70)", glow: "0 0 5px rgba(99,102,241,0.50)" },
  { x: 34, y: 14, dur: 7.4, delay: 0.5, s: 2,   color: "rgba(6,182,212,0.75)",  glow: "0 0 6px rgba(6,182,212,0.55)" },
  { x: 50, y: 52, dur: 9.2, delay: 2.1, s: 1.5, color: "rgba(255,255,255,0.45)", glow: "0 0 4px rgba(255,255,255,0.30)" },
  { x: 67, y: 8,  dur: 6.8, delay: 0.8, s: 2,   color: "rgba(6,182,212,0.80)",  glow: "0 0 7px rgba(6,182,212,0.60)" },
  { x: 82, y: 38, dur: 7.9, delay: 1.5, s: 1.5, color: "rgba(99,102,241,0.65)", glow: "0 0 5px rgba(99,102,241,0.45)" },
  { x: 12, y: 68, dur: 8.5, delay: 3.0, s: 2,   color: "rgba(6,182,212,0.75)",  glow: "0 0 6px rgba(6,182,212,0.55)" },
  { x: 44, y: 82, dur: 6.5, delay: 0.3, s: 1.5, color: "rgba(255,255,255,0.40)", glow: "0 0 4px rgba(255,255,255,0.25)" },
  { x: 71, y: 60, dur: 9.5, delay: 2.5, s: 2,   color: "rgba(6,182,212,0.70)",  glow: "0 0 6px rgba(6,182,212,0.50)" },
  { x: 28, y: 44, dur: 7.8, delay: 1.0, s: 1.5, color: "rgba(99,102,241,0.60)", glow: "0 0 5px rgba(99,102,241,0.40)" },
  { x: 88, y: 18, dur: 6.1, delay: 0.7, s: 2,   color: "rgba(6,182,212,0.85)",  glow: "0 0 7px rgba(6,182,212,0.65)" },
  { x: 55, y: 33, dur: 8.8, delay: 1.8, s: 1.5, color: "rgba(255,255,255,0.40)", glow: "0 0 4px rgba(255,255,255,0.25)" },
  { x: 4,  y: 88, dur: 7.2, delay: 3.5, s: 2,   color: "rgba(6,182,212,0.75)",  glow: "0 0 6px rgba(6,182,212,0.55)" },
  { x: 38, y: 72, dur: 9.6, delay: 0.9, s: 1.5, color: "rgba(99,102,241,0.65)", glow: "0 0 5px rgba(99,102,241,0.45)" },
  { x: 76, y: 90, dur: 7.0, delay: 2.2, s: 2,   color: "rgba(6,182,212,0.70)",  glow: "0 0 6px rgba(6,182,212,0.50)" },
  { x: 94, y: 55, dur: 8.4, delay: 1.3, s: 1.5, color: "rgba(255,255,255,0.45)", glow: "0 0 4px rgba(255,255,255,0.30)" },
];

export function TechBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      {/* ── Navy-blue atmospheric foundation ── */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: "65%",
          background:
            "radial-gradient(ellipse 160% 55% at 50% -5%, rgba(5,15,70,0.45), transparent 65%)",
        }}
      />

      {/* ── Large ambient blobs at key page sections ── */}

      {/* Hero — left cyan bloom */}
      <div
        className="absolute ambient-pulse"
        style={{
          top: "2%", left: "-6%",
          width: "60%", height: "55%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.14), rgba(30,58,138,0.10), transparent 68%)",
          filter: "blur(85px)",
        }}
      />

      {/* Hero — right deep-blue bloom */}
      <div
        className="absolute ambient-pulse"
        style={{
          top: "0%", right: "-10%",
          width: "55%", height: "50%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(30,58,138,0.20), rgba(6,182,212,0.06), transparent 70%)",
          filter: "blur(90px)",
          animationDelay: "4s",
        }}
      />

      {/* Mid-page — services / portfolio area */}
      <div
        className="absolute ambient-pulse"
        style={{
          top: "28%", left: "5%",
          width: "50%", height: "40%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.11), rgba(30,58,138,0.09), transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "2s",
        }}
      />

      {/* Mid-lower — why nexora / contact area */}
      <div
        className="absolute ambient-pulse"
        style={{
          top: "55%", right: "0%",
          width: "52%", height: "42%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(30,58,138,0.18), rgba(80,50,255,0.08), transparent 70%)",
          filter: "blur(90px)",
          animationDelay: "6s",
        }}
      />

      {/* Lower — footer area */}
      <div
        className="absolute ambient-pulse"
        style={{
          top: "78%", left: "18%",
          width: "55%", height: "30%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.10), rgba(30,58,138,0.12), transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "1s",
        }}
      />

      {/* ── Blue-tinted grid overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.055) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Horizontal light streaks ── */}
      <div
        className="absolute ambient-pulse"
        style={{
          top: "12%", left: 0, right: 0, height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.28) 28%, rgba(6,182,212,0.14) 72%, transparent 100%)",
          animationDuration: "9s",
        }}
      />
      <div
        className="absolute ambient-pulse"
        style={{
          top: "42%", left: 0, right: 0, height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(30,58,138,0.30) 35%, rgba(6,182,212,0.18) 65%, transparent 100%)",
          animationDuration: "13s",
          animationDelay: "5s",
        }}
      />
      <div
        className="absolute ambient-pulse"
        style={{
          top: "74%", left: 0, right: 0, height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.22) 45%, transparent 100%)",
          animationDuration: "11s",
          animationDelay: "2s",
        }}
      />

      {/* ── Floating particles ── */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.s}px`,
            height: `${p.s}px`,
            background: p.color,
            boxShadow: p.glow,
          }}
          animate={{ y: [-14, 14, -14], opacity: [0.18, 0.60, 0.18] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
