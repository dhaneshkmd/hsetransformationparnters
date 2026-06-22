import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Building2, Flame, Zap, Factory, Wrench, Server, Anchor, Train,
  GraduationCap, Shield, ClipboardCheck, BookOpen, LayoutDashboard,
  Users, FileText, CheckCircle, ChevronDown, ChevronUp
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: "easeOut" }
  }),
};

function AnimatedCount({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const sectorClients = [
  {
    icon: Building2,
    sector: "Aviation & Airport",
    color: "from-sky-500/20 to-sky-500/5",
    border: "border-sky-500/30",
    iconColor: "text-sky-400",
    clients: [
      "Adani Navi Mumbai International Airport",
      "Noida International Airport",
      "Airport Infrastructure Contractors",
      "Aviation Construction Contractors",
    ],
  },
  {
    icon: Flame,
    sector: "Oil & Gas",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    clients: [
      "ADNOC Group",
      "Shell Projects",
      "Petrofac",
      "JGC Corporation",
      "KBR",
      "Dow / Aramco Projects",
      "Oil & Gas EPC Contractors",
    ],
  },
  {
    icon: Zap,
    sector: "Power & Energy",
    color: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/30",
    iconColor: "text-yellow-400",
    clients: [
      "NTPC Limited",
      "NTPC Kayamkulam",
      "Power Generation Companies",
      "Energy Infrastructure Projects",
    ],
  },
  {
    icon: Factory,
    sector: "Manufacturing & Industrial",
    color: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/30",
    iconColor: "text-orange-400",
    clients: [
      "Jindal Steel",
      "Grasim Industries",
      "Havells India",
      "Blue Star",
      "Manufacturing Facilities",
      "Industrial Processing Plants",
    ],
  },
  {
    icon: Wrench,
    sector: "Infrastructure & Construction",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
    clients: [
      "Larsen & Toubro (L&T)",
      "Tata Projects",
      "Kalpataru Projects",
      "Infrastructure Development Contractors",
      "EPC Contractors",
      "Construction Companies",
    ],
  },
  {
    icon: Server,
    sector: "Data Centre",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
    clients: [
      "CTRLS Data Centres Ltd",
      "Critical Infrastructure Facilities",
      "Data Centre Operators",
    ],
  },
  {
    icon: Anchor,
    sector: "Ports, Logistics & Marine",
    color: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/30",
    iconColor: "text-teal-400",
    clients: [
      "Vizhinjam Port Project",
      "Port Operations Organizations",
      "Logistics Companies",
      "Marine Infrastructure Contractors",
    ],
  },
  {
    icon: Train,
    sector: "Rail & Metro",
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/30",
    iconColor: "text-indigo-400",
    clients: [
      "Chennai Metro Related Projects",
      "Metro Rail Contractors",
      "Rail Infrastructure Organizations",
    ],
  },
  {
    icon: GraduationCap,
    sector: "Training & Certification",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    clients: [
      "Safety Catch Safety Training & Consulting Pvt Ltd",
      "NEBOSH Training Programs",
      "IOSH Training Programs",
      "Professional Competency Development Programs",
    ],
  },
];

const deliverableCategories = [
  {
    icon: Shield,
    title: "High Risk Operations Training",
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    items: [
      "Confined Space Entry & Rescue",
      "Work at Height Safety",
      "Lifting & Rigging Operations",
      "Permit to Work (PTW) Systems",
      "Lockout Tagout (LOTO)",
    ],
  },
  {
    icon: Flame,
    title: "Process Safety & Industrial",
    color: "text-orange-400",
    border: "border-orange-500/30",
    items: [
      "Chemical Safety Management",
      "COSHH Awareness & Implementation",
      "Process Safety Fundamentals",
      "Fire Prevention & Emergency Response",
      "Incident Investigation & RCA",
      "Electrical Safety for Authorized Persons",
      "Contractor Safety Management",
      "Behaviour Based Safety (BBS)",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Risk Management Programs",
    color: "text-yellow-400",
    border: "border-yellow-500/30",
    items: [
      "Hazard Identification & Risk Assessment (HIRA)",
      "Job Safety Analysis (JSA)",
      "Risk Assessment Method Statements (RAMS)",
      "Bow Tie Risk Analysis",
      "Risk Based Inspection Principles",
      "Critical Risk Management",
      "Dynamic Risk Assessment",
    ],
  },
  {
    icon: Building2,
    title: "HSE Consulting Projects",
    color: "text-blue-400",
    border: "border-blue-500/30",
    items: [
      "HSE Management System Development",
      "ISO 45001 Implementation Support",
      "Integrated Management Systems",
      "Safety Culture Transformation Programs",
      "Compliance Audits",
      "Contractor HSE Assessment",
      "Emergency Preparedness Reviews",
      "Gap Analysis Studies",
      "Corporate HSE Framework Development",
    ],
  },
  {
    icon: BookOpen,
    title: "Professional Certification Materials",
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    items: [
      "NEBOSH International General Certificate (IGC)",
      "NEBOSH International Diploma (DI1, DI2, DI3)",
      "IOSH Managing Safely",
      "IOSH Working Safely",
      "Supervisor Development Programs",
      "Safety Officer Development Programs",
      "Safety Engineer Competency Programs",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Digital HSE Solutions",
    color: "text-purple-400",
    border: "border-purple-500/30",
    items: [
      "Digital HSE Dashboards",
      "AI-Assisted Safety Analytics",
      "Inspection Management Systems",
      "Digital Spot Check Platforms",
      "Training Competency Tracking Systems",
      "Risk Monitoring Dashboards",
      "Contractor Performance Dashboards",
    ],
  },
];

const industryProposals = [
  "Airport Infrastructure Projects",
  "Steel Manufacturing Industry",
  "Power Generation Sector",
  "Data Centre Operations",
  "Metro Rail Projects",
  "Infrastructure Development Projects",
  "Ports & Marine Projects",
  "Manufacturing Industries",
  "EPC Contractors",
  "Oil & Gas Operations",
];

const standards = ["ISO 45001", "OSHA", "ILO", "ADNOC COP", "NEBOSH", "IOSH"];

function CollapsibleCard({
  icon: Icon,
  title,
  clients,
  color,
  border,
  iconColor,
  gradient,
  index,
}: {
  icon: React.ElementType;
  title: string;
  clients: string[];
  color?: string;
  border: string;
  iconColor: string;
  gradient: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`bg-gradient-to-br ${gradient} border ${border} rounded-xl overflow-hidden`}
    >
      <button
        data-testid={`portfolio-sector-toggle-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-white/5 ${iconColor}`}>
            <Icon size={18} />
          </div>
          <span className="font-display font-semibold text-foreground">{title}</span>
          <span className="text-xs text-muted-foreground bg-white/5 px-2 py-0.5 rounded-full">
            {clients.length} clients
          </span>
        </div>
        {open ? <ChevronUp size={16} className="text-muted-foreground" /> : <ChevronDown size={16} className="text-muted-foreground" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="px-5 pb-5 space-y-2">
              {clients.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={13} className={`${iconColor} mt-0.5 shrink-0`} />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero banner */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible">
            <span className="inline-block text-xs font-button font-semibold tracking-widest text-primary uppercase mb-4 border border-primary/30 px-4 py-1.5 rounded-full bg-primary/5">
              Work Portfolio
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-tight"
          >
            Clients & Deliverables
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Specialized HSE training, consulting, and digital solutions delivered across Oil & Gas,
            Construction, Aviation, Manufacturing, Power, Data Centres, Ports, and Rail sectors.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: "Training Programs Developed", value: 300, icon: BookOpen },
            { label: "Study Materials Developed", value: 100, icon: FileText },
            { label: "Consulting Deliverables", value: 100, icon: ClipboardCheck },
            { label: "Presentation Slides", value: 10000, suffix: "+", icon: LayoutDashboard },
          ].map(({ label, value, icon: Icon, suffix = "+" }, i) => (
            <motion.div
              key={label}
              variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 text-center overflow-hidden group"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Icon size={22} className="text-primary mx-auto mb-3" />
              <div className="font-display text-3xl font-bold text-foreground mb-1">
                <AnimatedCount target={value} suffix={suffix} />
              </div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Clients by sector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <Users size={20} className="text-primary" />
            <h2 className="font-display text-3xl font-bold text-foreground">Clients & Organizations Served</h2>
          </div>
          <p className="text-muted-foreground ml-8">Click any sector to expand the client list.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectorClients.map((s, i) => (
            <CollapsibleCard
              key={s.sector}
              icon={s.icon}
              title={s.sector}
              clients={s.clients}
              border={s.border}
              iconColor={s.iconColor}
              gradient={s.color}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white/[0.02] border-y border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <ClipboardCheck size={20} className="text-accent" />
              <h2 className="font-display text-3xl font-bold text-foreground">Training & Consulting Deliverables</h2>
            </div>
            <p className="text-muted-foreground ml-8">
              Programs developed and delivered across high-risk industries worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverableCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`bg-background border ${cat.border} rounded-xl p-6 group hover:border-opacity-60 transition-all`}
              >
                <div className={`flex items-center gap-3 mb-4`}>
                  <div className={`p-2 rounded-lg bg-white/5 ${cat.color}`}>
                    <cat.icon size={18} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm leading-snug">{cat.title}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={13} className={`${cat.color} mt-0.5 shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry proposals & standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Training proposals */}
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText size={20} className="text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">Corporate Training Proposals</h2>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
              <p className="text-sm text-muted-foreground mb-5">
                Custom training proposals developed and delivered for organizations across:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industryProposals.map((p, i) => (
                  <motion.div
                    key={p}
                    variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {p}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Standards & coverage */}
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield size={20} className="text-accent" />
              <h2 className="font-display text-2xl font-bold text-foreground">Standards & Coverage</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6">
                <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                  Experience Coverage
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["India", "Middle East", "International Standards"].map((r) => (
                    <span key={r} className="text-sm bg-accent/10 text-accent border border-accent/20 px-3 py-1.5 rounded-full font-medium">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6">
                <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                  Standards Referenced
                </h3>
                <div className="flex flex-wrap gap-3">
                  {standards.map((s) => (
                    <span key={s} className="text-sm bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6">
                <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                  Industries Served
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Oil & Gas", "Construction", "Infrastructure", "Aviation", "Manufacturing", "Data Centres", "Power Generation", "Ports & Logistics"].map((ind) => (
                    <span key={ind} className="text-xs bg-white/5 text-muted-foreground border border-white/10 px-3 py-1 rounded-full">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#071A52] to-[#0B2E6B] border-t border-primary/20 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-display text-3xl font-bold text-white mb-4"
          >
            Ready to Be Our Next Success Story?
          </motion.h2>
          <motion.p
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-blue-200 mb-8"
          >
            Join industry leaders who trust HSE Transformation Partners for safety excellence.
          </motion.p>
          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              data-testid="portfolio-cta-contact"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3 rounded-lg font-button font-semibold transition-transform hover:scale-105"
            >
              Book a Consultation
            </a>
            <a
              href="https://wa.me/919846526915"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="portfolio-cta-whatsapp"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-3 rounded-lg font-button font-semibold transition-colors hover:bg-white/10"
            >
              WhatsApp Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
