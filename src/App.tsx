import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  PlayCircle, 
  Sparkles, 
  Factory, 
  Lightbulb,
  Circle 
} from "lucide-react";

const NAV_LINKS = ["EXPEDITIONS", "VESSELS", "TELEMETRY", "HERITAGE"];
const PARTNERS = ["AEON", "VELA", "APEX", "ORBIT", "ZENO"];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 pt-8 md:pt-margin-edge">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-edge flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-12 h-12 flex items-center justify-center liquid-glass-strong rounded-full"
          >
            <span className="font-serif text-2xl italic">A</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8 px-8 py-3 liquid-glass rounded-full">
            {NAV_LINKS.map((link, i) => (
              <a 
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`font-sans text-[10px] tracking-[0.2em] font-semibold transition-all duration-300 hover:text-white ${i === 0 ? 'text-white border-b border-white/40 pb-1' : 'text-on-surface-variant'}`}
              >
                {link}
              </a>
            ))}
          </nav>

          <motion.button 
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 bg-white text-black font-sans text-[10px] font-bold tracking-[0.2em] rounded-full"
          >
            CLAIM A SPOT
          </motion.button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover scale-110 brightness-75"
            >
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
            <motion.div 
              {...fadeInUp}
              className="inline-flex items-center gap-3 px-4 py-2 mb-8 liquid-glass rounded-full"
            >
              <span className="px-2 py-0.5 bg-white text-black text-[9px] font-bold rounded-full uppercase tracking-tighter">New</span>
              <span className="font-sans text-[10px] text-white tracking-[0.1em] uppercase italic opacity-80">Maiden Crewed Voyage to Mars Arrives 2026</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-5xl md:text-8xl italic mb-6 leading-[1.05] tracking-tight"
            >
              Venture Past Our Sky Across the Universe
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            >
              Experience the frontier of human exploration through Aetheris Interstellar. Our vessels redefine the boundaries of civilian spaceflight.
            </motion.p>

            <motion.div 
              {...stagger}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            >
              <motion.button 
                whileHover={{ scale: 1.02 }}
                className="px-10 py-5 liquid-glass-strong rounded-full font-sans text-[11px] text-white uppercase tracking-[0.3em] flex items-center gap-3 group transition-all"
              >
                Start Your Voyage
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
              
              <a href="#" className="font-sans text-[11px] text-white tracking-[0.3em] flex items-center gap-2 group uppercase opacity-80 hover:opacity-100 transition-opacity">
                <PlayCircle size={20} className="fill-white/10 group-hover:scale-110 transition-transform" />
                View Liftoff
              </a>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              {[
                { label: "TELEMETRY SYNC", value: "34.5 Min" },
                { label: "TRAJECTORY", value: "2.8B+" }
              ].map((stat) => (
                <motion.div 
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="liquid-glass p-6 rounded-[2rem] text-left border-l-2 border-l-white/20"
                >
                  <p className="font-sans text-[9px] tracking-[0.2em] text-on-surface-variant mb-2">{stat.label}</p>
                  <h3 className="font-serif text-3xl italic">{stat.value}</h3>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-12 w-full flex flex-col items-center gap-6">
            <div className="px-4 py-1 liquid-glass rounded-full text-[9px] tracking-[0.4em] uppercase text-white/40">
              Propulsion Partners
            </div>
            <div className="flex items-center gap-12 text-white/20 font-sans text-[10px] tracking-[0.3em] font-medium">
              {PARTNERS.map((partner) => (
                <span key={partner} className="hover:text-white/60 transition-colors cursor-default">{partner}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="relative min-h-screen w-full flex flex-col py-section-gap">
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover brightness-[0.2]"
            >
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative z-10 w-full max-w-container-max mx-auto px-6 md:px-margin-edge mb-24">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-sans text-[10px] text-white tracking-[0.5em] mb-4 block"
            >
              // CAPABILITIES
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl md:text-7xl italic leading-tight"
            >
              Production evolved
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full max-w-container-max mx-auto px-6 md:px-margin-edge grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <CapabilityCard 
              icon={<Sparkles size={20} />} 
              title="AI Scenery"
              tags={["Real-time", "Raytracing", "4K Sync", "AI Node"]}
              description="Procedural atmosphere generation and cinematic planetary rendering calibrated for deep-space immersion."
            />
            <CapabilityCard 
              icon={<Factory size={20} />} 
              title="Batch Production"
              tags={["Modular", "Scalable", "Swift", "Secure"]}
              description="Rapid prototyping and modular assembly of interstellar class hulls using high-clarity refraction materials."
            />
            <CapabilityCard 
              icon={<Lightbulb size={20} />} 
              title="Smart Lighting"
              tags={["Dynamic", "Spectral", "Adaptive", "Pure"]}
              description="Circadian rhythm management using liquid-glass optical waveguides to simulate stellar environments."
            />
          </motion.div>
        </section>
      </main>

      <footer className="w-full py-12 border-t border-white/5 relative z-10">
        <div className="flex flex-col md:row justify-between items-center gap-6 px-6 md:px-margin-edge w-full max-w-container-max mx-auto">
          <span className="font-sans text-[9px] tracking-[0.2em] text-white/30 text-center">
            © 2024 AETHERIS INTERSTELLAR. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-10">
            {["PRIVACY", "PROTOCOLS", "TERMINAL"].map((item) => (
              <a key={item} href="#" className="font-sans text-[9px] tracking-[0.2em] text-white/50 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function CapabilityCard({ icon, title, tags, description }: { icon: ReactNode, title: string, tags: string[], description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      className="liquid-glass p-10 rounded-3xl flex flex-col h-[500px] transition-all duration-700"
    >
      <div className="flex justify-between items-start mb-auto">
        <div className="w-12 h-12 liquid-glass-strong rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-wrap gap-2 justify-end max-w-[150px]">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[8px] uppercase tracking-wider text-white/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-serif text-4xl italic mb-4">{title}</h4>
        <p className="font-sans text-on-surface-variant font-light leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
