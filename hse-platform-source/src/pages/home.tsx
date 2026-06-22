import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ShieldCheck, HardHat, Flame, Award, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function AnimatedCounter({ value, label }: { value: number, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-6xl font-display font-bold text-primary mb-2">
        {count}+
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight tracking-tight">
              Transforming Safety.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Empowering Performance.</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Guiding global organizations from mere compliance to operational excellence. Elite HSE consulting for high-stakes industries worldwide.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/contact" className="w-full sm:w-auto bg-accent text-accent-foreground px-8 py-4 rounded-md font-button font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(244,180,0,0.3)] hover:shadow-[0_0_30px_rgba(244,180,0,0.5)]">
                Book Consultation
              </Link>
              <Link href="/services" className="w-full sm:w-auto bg-white/5 border border-white/10 text-foreground px-8 py-4 rounded-md font-button font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                Request Proposal
              </Link>
              <a href="https://wa.me/919846526915" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto text-primary hover:text-primary/80 px-6 py-4 font-button font-medium text-lg transition-colors flex items-center justify-center gap-2">
                WhatsApp Now <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-card/50 border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <AnimatedCounter value={20} label="Years Experience" />
            <AnimatedCounter value={500} label="Projects Delivered" />
            <AnimatedCounter value={15} label="Countries Served" />
            <AnimatedCounter value={100} label="Global Clients" />
          </div>
        </div>
      </section>

      {/* Global Experience */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Global Experience</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">Trusted by Industry Leaders</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6 opacity-70">
            {['ADNOC', 'Shell', 'Petrofac', 'AECOM', 'JGC', 'KBR', 'Aramco'].map((client, i) => (
              <div key={i} className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors font-display font-bold text-xl text-muted-foreground hover:text-foreground">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative bg-card/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Core Competencies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">World-class solutions tailored for complex operational environments where failure is not an option.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShieldCheck size={32} />, title: "HSE Consulting", desc: "Strategic safety transformation and corporate governance frameworks." },
              { icon: <HardHat size={32} />, title: "Construction Safety", desc: "Mega-project risk management and comprehensive contractor oversight." },
              { icon: <Flame size={32} />, title: "Oil & Gas Safety", desc: "Process safety management for high-hazard and critical facilities." },
              { icon: <Award size={32} />, title: "ISO Services", desc: "Implementation and auditing for ISO 45001 & 14001 standards." },
              { icon: <Users size={32} />, title: "Leadership Development", desc: "Executive coaching to build robust, resilient safety cultures." }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-primary/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform relative z-10">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground mb-8 relative z-10 leading-relaxed">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors relative z-10">
                  Explore capabilities <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">The HSE Transformation Advantage</h2>
              <p className="text-xl text-muted-foreground mb-12">We don't just write policies; we engineer cultures. Our approach combines deep technical expertise with executive-level strategic insight.</p>
              
              <div className="space-y-6">
                {[
                  "Decades of experience in high-hazard industries",
                  "Bespoke strategies, never off-the-shelf templates",
                  "Focus on sustainable cultural transformation",
                  "Global reach with deep local regulatory knowledge"
                ].map((diff, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="text-accent shrink-0 mr-4 mt-1" size={24} />
                    <span className="text-lg text-foreground font-medium">{diff}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full border border-white/10 absolute -inset-8 opacity-20"></div>
              <div className="aspect-square rounded-full border border-primary/20 absolute -inset-4 opacity-40"></div>
              <div className="bg-card border border-white/10 rounded-3xl p-12 relative z-10 backdrop-blur-xl">
                <blockquote className="text-2xl font-display font-medium leading-relaxed text-foreground mb-8">
                  "Safety is not a department; it's a way of operating. We help leaders build resilient organizations where excellence is the baseline."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">HSE</div>
                  <div>
                    <div className="font-bold text-foreground">Leadership Team</div>
                    <div className="text-sm text-muted-foreground">HSE Transformation Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary/10 relative overflow-hidden border-t border-primary/20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-display font-bold text-foreground mb-8">Ready to Transform Your Safety Culture?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">Partner with us to protect your people, assets, and reputation globally. Let's build your roadmap to excellence.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="inline-block bg-primary text-primary-foreground px-10 py-5 rounded-md font-button font-bold text-lg hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(0,174,239,0.4)]">
              Schedule a Strategy Call
            </Link>
            <a href="https://wa.me/919846526915" target="_blank" rel="noopener noreferrer" className="inline-block bg-white/10 text-foreground px-10 py-5 rounded-md font-button font-bold text-lg hover:bg-white/20 transition-colors backdrop-blur-md">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
