import { motion } from "framer-motion";
import {
  Smartphone, MapPin, Clock, Camera, PenLine, Bell, LayoutDashboard,
  Cloud, ClipboardCheck, Leaf, ShieldCheck, Users, TrendingDown,
  Zap, BarChart3, CheckCircle, FileText, Flame, HardHat, Plug,
  Wrench, Shovel, Car, Trash2, AlertTriangle, Eye
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
  }),
};

const formCategories = [
  {
    icon: ClipboardCheck,
    title: "HSE Inspection Forms",
    color: "text-cyan-400",
    border: "border-cyan-500/25",
    bg: "from-cyan-500/10 to-cyan-500/5",
    items: ["Site Safety Inspection", "Supervisor Inspection", "Management Walkthrough", "Weekly Inspection", "Monthly Audit"],
  },
  {
    icon: Flame,
    title: "Permit to Work Systems",
    color: "text-orange-400",
    border: "border-orange-500/25",
    bg: "from-orange-500/10 to-orange-500/5",
    items: ["Hot Work Permit", "Confined Space Permit", "Work at Height Permit", "Excavation Permit", "Electrical Isolation Permit", "LOTO Verification Forms"],
  },
  {
    icon: Wrench,
    title: "Equipment Inspection Forms",
    color: "text-yellow-400",
    border: "border-yellow-500/25",
    bg: "from-yellow-500/10 to-yellow-500/5",
    items: ["Scaffolding Inspection", "Lifting Gear Inspection", "Crane Inspection", "Forklift Inspection", "Vehicle Inspection", "Power Tool Inspection"],
  },
  {
    icon: Leaf,
    title: "Environmental Forms",
    color: "text-emerald-400",
    border: "border-emerald-500/25",
    bg: "from-emerald-500/10 to-emerald-500/5",
    items: ["Waste Management Inspection", "Spill Reporting", "Environmental Monitoring", "ESG Data Collection"],
  },
  {
    icon: Eye,
    title: "Workforce Safety Forms",
    color: "text-purple-400",
    border: "border-purple-500/25",
    bg: "from-purple-500/10 to-purple-500/5",
    items: ["Toolbox Talks", "Safety Observation Reports", "Near Miss Reporting", "Incident Reporting", "Behaviour Based Safety Observations"],
  },
];

const features = [
  { icon: Zap, title: "Real-Time Data Capture", detail: "Data instantly available to management the moment it's submitted from site." },
  { icon: Smartphone, title: "Mobile Friendly", detail: "Works seamlessly on mobile phones, tablets, and desktop computers." },
  { icon: MapPin, title: "GPS Location Tracking", detail: "Capture exact inspection locations automatically with every submission." },
  { icon: Clock, title: "Timestamp Verification", detail: "Automatic date and time recording for every entry — tamper-proof audit trail." },
  { icon: Camera, title: "Photo Evidence", detail: "Attach photographs directly from site with each inspection record." },
  { icon: PenLine, title: "Digital Signatures", detail: "Electronic approval workflows replacing paper sign-offs entirely." },
  { icon: Bell, title: "Automated Notifications", detail: "Instant email and WhatsApp alerts for critical observations and overdue actions." },
  { icon: LayoutDashboard, title: "Dashboard Integration", detail: "Live KPI monitoring and trend reporting for management visibility." },
  { icon: Cloud, title: "Cloud Storage", detail: "Secure centralized records accessible from anywhere, at any time." },
  { icon: ClipboardCheck, title: "Audit Ready Records", detail: "Instant retrieval during client audits and regulatory inspections." },
];

const esgBenefits = [
  {
    icon: Leaf,
    title: "Environmental",
    color: "text-emerald-400",
    border: "border-emerald-500/25",
    bg: "from-emerald-500/10 to-emerald-500/5",
    points: ["Significant reduction in paper consumption", "Reduced printing costs", "Lower carbon footprint", "Support ESG reporting requirements"],
  },
  {
    icon: ShieldCheck,
    title: "Governance",
    color: "text-blue-400",
    border: "border-blue-500/25",
    bg: "from-blue-500/10 to-blue-500/5",
    points: ["Full audit trail", "Data integrity", "Improved compliance monitoring", "Better management oversight"],
  },
  {
    icon: Users,
    title: "Social",
    color: "text-purple-400",
    border: "border-purple-500/25",
    bg: "from-purple-500/10 to-purple-500/5",
    points: ["Increased workforce participation", "Faster reporting of hazards", "Improved communication", "Enhanced safety culture"],
  },
];

const businessBenefits = [
  { icon: TrendingDown, label: "Reduce admin workload", value: "Up to 80%" },
  { icon: Zap, label: "Faster reporting", value: "Real-time" },
  { icon: ClipboardCheck, label: "Compliance tracking", value: "Automated" },
  { icon: BarChart3, label: "Audit readiness", value: "Seconds" },
];

const dashboardKPIs = [
  "TRIR", "LTIFR", "Near Miss Trends", "Safety Observations",
  "PTW Statistics", "Training Compliance", "Contractor Performance",
  "ESG Indicators", "Leading & Lagging KPIs",
];

const industries = [
  "Oil & Gas", "Construction", "Manufacturing", "Power Plants",
  "Data Centres", "Ports & Logistics", "Infrastructure Projects",
  "EPC Contractors", "Aviation Projects",
];

const painPoints = [
  "Lost records", "Delayed reporting", "Manual data entry", "Poor traceability",
  "Compliance gaps", "High administrative costs", "Difficulty during audits",
];

export default function DigitalHSE() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
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
              Digital HSE Solutions
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-tight"
          >
            Digital HSE Forms &{" "}
            <span className="text-primary">ESG Compliance</span> Solutions
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Transform paper-based HSE systems into smart digital solutions — eliminating paperwork,
            improving compliance, and delivering real-time visibility of safety performance.
          </motion.p>
          <motion.div
            variants={fadeUp} custom={3} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              data-testid="digital-hse-cta-contact"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3 rounded-lg font-button font-semibold transition-transform hover:scale-105"
            >
              Request a Demo
            </a>
            <a
              href="https://wa.me/919846526915"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="digital-hse-cta-whatsapp"
              className="inline-flex items-center justify-center border border-primary/40 text-primary px-8 py-3 rounded-lg font-button font-semibold transition-colors hover:bg-primary/10"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Go Digital — pain points */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-8">
          <motion.h2
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-display text-2xl font-bold text-foreground mb-2"
          >
            Why Go Digital?
          </motion.h2>
          <motion.p
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-muted-foreground mb-6"
          >
            Traditional paper-based systems create serious operational and compliance risks:
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {painPoints.map((p, i) => (
              <motion.div
                key={p}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2.5"
              >
                <AlertTriangle size={13} className="text-red-400 shrink-0" />
                <span className="text-sm text-foreground">{p}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={fadeUp} custom={8} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-6 text-sm text-muted-foreground border-t border-red-500/10 pt-4"
          >
            Our digital solutions provide instant access to data, automated reporting, and complete audit trails — eliminating every one of these problems.
          </motion.p>
        </div>
      </section>

      {/* Business Benefits stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {businessBenefits.map(({ icon: Icon, label, value }, i) => (
            <motion.div
              key={label}
              variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 text-center group hover:border-primary/30 transition-all"
            >
              <Icon size={22} className="text-primary mx-auto mb-3" />
              <div className="font-display text-2xl font-bold text-foreground mb-1">{value}</div>
              <div className="text-xs text-muted-foreground">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Digital Forms Categories */}
      <section className="bg-white/[0.02] border-y border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <FileText size={20} className="text-primary" />
              <h2 className="font-display text-3xl font-bold text-foreground">Digital Forms Development</h2>
            </div>
            <p className="text-muted-foreground ml-8">
              We convert any existing HSE form, checklist, permit, or inspection record into a fully digital system.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {formCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`bg-gradient-to-br ${cat.bg} border ${cat.border} rounded-xl p-6`}
              >
                <div className={`flex items-center gap-3 mb-4`}>
                  <div className={`p-2 rounded-lg bg-white/5 ${cat.color}`}>
                    <cat.icon size={18} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm">{cat.title}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={12} className={`${cat.color} shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <Zap size={20} className="text-accent" />
            <h2 className="font-display text-3xl font-bold text-foreground">Key Platform Features</h2>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-background border border-white/10 rounded-xl p-5 group hover:border-accent/30 transition-all"
            >
              <div className="p-2 rounded-lg bg-accent/10 text-accent w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                <f.icon size={16} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ESG Benefits */}
      <section className="bg-white/[0.02] border-y border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">ESG & Sustainability Benefits</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Going digital doesn't just improve safety — it directly strengthens your Environmental, Social, and Governance reporting.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {esgBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`bg-gradient-to-br ${b.bg} border ${b.border} rounded-xl p-6`}
              >
                <div className={`flex items-center gap-3 mb-5`}>
                  <div className={`p-2 rounded-lg bg-white/5 ${b.color}`}>
                    <b.icon size={18} />
                  </div>
                  <h3 className="font-display font-bold text-foreground">{b.title}</h3>
                </div>
                <ul className="space-y-3">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={13} className={`${b.color} mt-0.5 shrink-0`} />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard KPIs + Industries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Dashboard KPIs */}
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <LayoutDashboard size={20} className="text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">Custom Dashboard Development</h2>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              We develop executive dashboards providing real-time visibility of your critical safety KPIs:
            </p>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {dashboardKPIs.map((kpi, i) => (
                  <motion.div
                    key={kpi}
                    variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="bg-white/5 border border-primary/15 rounded-lg px-3 py-2.5 text-sm text-foreground text-center font-medium"
                  >
                    {kpi}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Industries + Investment model */}
          <div className="space-y-6">
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <HardHat size={20} className="text-accent" />
                <h2 className="font-display text-2xl font-bold text-foreground">Industries We Serve</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="text-sm bg-accent/10 text-accent border border-accent/20 px-3 py-1.5 rounded-full font-medium"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6"
            >
              <h3 className="font-display font-bold text-foreground mb-3">One-Time Investment Model</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Unlike expensive enterprise software subscriptions, our solutions are developed as customized systems
                with a <span className="text-primary font-semibold">one-time implementation investment</span> and
                minimal ongoing maintenance costs — making digital transformation accessible for projects of any size.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6"
            >
              <h3 className="font-display font-bold text-foreground mb-2">Digital Transformation Services</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From a single checklist to a complete digitized HSE Management System — we can automate and
                digitize your entire safety process, scaled to your organization's needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#071A52] to-[#0B2E6B] border-t border-primary/20 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-display text-3xl font-bold text-white mb-4"
          >
            Ready to Go Paperless?
          </motion.h2>
          <motion.p
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-blue-200 mb-8"
          >
            Let us build a custom digital HSE system tailored to your operations — fast, affordable, and audit-ready from day one.
          </motion.p>
          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              data-testid="digital-hse-footer-cta-contact"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3 rounded-lg font-button font-semibold transition-transform hover:scale-105"
            >
              Request a Consultation
            </a>
            <a
              href="https://wa.me/919846526915"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="digital-hse-footer-cta-whatsapp"
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
