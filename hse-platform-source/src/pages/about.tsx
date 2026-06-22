import { motion } from "framer-motion";
import {
  Briefcase, GraduationCap, Award, Star, Globe2, CheckCircle,
  Shield, BarChart3, Users, Cpu, FileSearch, BookOpen, Lightbulb
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
  }),
};

const expertise = [
  {
    icon: Shield,
    title: "HSE Management Systems & Regulatory Compliance",
    detail: "ISO 45001, ADNOC COP, OSHA, ILO, UK HSE — development, implementation, and audit alignment",
  },
  {
    icon: FileSearch,
    title: "Risk Management & High-Risk Operations Control",
    detail: "HIRA, JSA, RAMS, PTW, LOTO, Confined Space Entry, Work at Height, Lifting Operations",
  },
  {
    icon: Lightbulb,
    title: "Incident Investigation & Performance Improvement",
    detail: "RCA, CAPA, safety analytics, and continuous improvement strategies",
  },
  {
    icon: BarChart3,
    title: "Audits, Compliance & Assurance",
    detail: "Internal/external audits, regulatory compliance frameworks, HSE system effectiveness",
  },
  {
    icon: Users,
    title: "Training, Capability Development & Safety Leadership",
    detail: "Competency-based training, PSM, emergency response, workforce development, safety culture",
  },
  {
    icon: Cpu,
    title: "Digital HSE Systems & Data-Driven Solutions",
    detail: "Power BI dashboards, digital reporting, automation, AI-assisted risk assessment tools",
  },
  {
    icon: Briefcase,
    title: "Stakeholder & Project HSE Management",
    detail: "Client interface, contractor management, multi-site coordination, EPC project safety integration",
  },
];

const careerTimeline = [
  {
    period: "Nov 2025 – Present",
    role: "Senior HSE Consultant (Freelance)",
    company: "Safety Catch Training and Consultancy Pvt. Ltd.",
    location: "India",
    highlights: [
      "Developed 13 comprehensive EHS training modules for Blue Star, including presentations, workbooks, and trainer guides aligned with EMPG standards",
      "Transformed 900+ training slides into scenario-based, competency-driven learning programs",
      "Restructured NEBOSH International Diploma & IGC training content, reviewing 800+ pages aligned with updated guidelines",
      "Developed ISO management system training programs (ISO 9001, ISO 14001, ISO 45001) with audit and operational excellence frameworks",
      "Designed technical training proposals for Kalpataru Projects, Veolia, SEIT, and Blue Star",
    ],
  },
  {
    period: "Sept 2024 – Nov 2025",
    role: "HSE Engineer | Acting HSE Manager",
    company: "NBTC – Hail & Ghasha Onshore Project (ADNOC / Tecnimont)",
    location: "Abu Dhabi, UAE",
    highlights: [
      "Performed responsibilities of Acting HSE Manager, establishing project HSE systems aligned with ADNOC Codes of Practice",
      "Managed and coordinated 50+ HSE Officers across multiple construction work fronts",
      "Developed and implemented HSE Plans, risk assessments, JSA/HIRA, and emergency response plans",
      "Controlled PTW systems for high-risk activities including lifting, confined space, and work at height",
      "Improved ADNOC HSE Assurance Audit score from 75% to 82% in one quarter",
    ],
  },
  {
    period: "July 2020 – Aug 2024",
    role: "HSE Technical Consultant (Office & Remote)",
    company: "Safety Catch Training and Consultancy Pvt. Ltd.",
    location: "India",
    highlights: [
      "Provided HSE consultancy and safety training for industrial and construction sector clients",
      "Designed and developed NEBOSH International Diploma (DI1–DI3) course modules",
      "Conducted HSE audits, hazard identification, and risk assessments with CAPA implementation",
      "Developed Safety Management Systems, procedures, and compliance frameworks for client organizations",
    ],
  },
  {
    period: "June 2018 – June 2020",
    role: "HSSE Coordinator",
    company: "Al-Hassan Engineering Co. SAOG (Petrofac Project)",
    location: "Oman",
    highlights: [
      "Delivered HSE training to 1,300+ employees, improving workforce safety compliance",
      "Achieved 20 million man-hours without Lost Time Injury (LTI)",
      "Developed and implemented Risk Assessments, JSA, and safety procedures",
      "Supported process safety and environmental compliance across project operations",
    ],
  },
  {
    period: "Feb 2018 – Mar 2018",
    role: "HSSE Coordinator – Shutdown Operations",
    company: "Qatar National Facility (Shell QNFS)",
    location: "Qatar",
    highlights: [
      "Supervised field HSE activities during shutdown and turnaround operations",
      "Verified PTW systems and LOTO procedures for confined space, hot work, and equipment isolation",
      "Performed site inspections, toolbox talks, and emergency preparedness coordination",
    ],
  },
  {
    period: "Mar 2017 – May 2017",
    role: "HSE Coordinator – Shutdown Operations",
    company: "Hertel (Shell Sec Coil Project)",
    location: "Qatar",
    highlights: [
      "Supervised HSE activities during shutdown and decommissioning works",
      "Conducted Stand Down meetings and Toolbox Talks to communicate shutdown hazards",
      "Monitored high-risk PTW-controlled work, coordinating with supervisors and contractors",
    ],
  },
  {
    period: "Sep 2015 – Feb 2017",
    role: "SH&E Coordinator",
    company: "AECOM Middle East – Hamad Port Project",
    location: "Qatar",
    highlights: [
      "Monitored HSE performance of 26 contractors across multiple construction work fronts",
      "Reviewed 550+ contractor Risk Assessments and Method Statements (RAMS)",
      "Conducted site inspections, HSE audits, and compliance reviews",
    ],
  },
  {
    period: "Jun 2014 – Jun 2015",
    role: "HSE Supervisor",
    company: "Arabian International Company – SADARA Chemical Plant (Dow / Aramco Project)",
    location: "Saudi Arabia",
    highlights: [
      "Supervised HSE activities during construction and commissioning at the SADARA chemical plant",
      "Developed a Training Matrix to manage workforce competency across job roles",
      "Achieved 95% reduction in dropped-object incidents",
    ],
  },
  {
    period: "Apr 2012 – Apr 2014",
    role: "HSE Officer",
    company: "Consolidated Contracting Company (CCC) – Barzan Gas Project (JGC / RasGas)",
    location: "Qatar",
    highlights: [
      "Monitored construction and installation activities for compliance with RasGas safety standards",
      "Performed risk assessments and JSA for construction activities",
      "Conducted incident reporting, investigations, and corrective actions",
    ],
  },
  {
    period: "Apr 2011 – Feb 2012",
    role: "HSE Advisor",
    company: "Powertech Engineering LLC – PDO (Petroleum Development Oman) Project",
    location: "Oman",
    highlights: [
      "Provided HSE advisory support for oil & gas operations aligned with PDO standards",
      "Delivered training on PHA, HAZOP, FMEA, SIS, SIL, and Mechanical Integrity",
    ],
  },
  {
    period: "Feb 2007 – Mar 2011",
    role: "Industrial Safety Officer",
    company: "Al-Babtain Power & Telecommunication Co. – Heavy Steel Manufacturing",
    location: "Saudi Arabia",
    highlights: [
      "Supervised safety operations in heavy steel manufacturing and galvanizing facilities",
      "Conducted risk assessments for galvanizing plants, CNC machining, and fabrication yards",
      "Delivered IMS awareness training and workplace safety programs",
    ],
  },
  {
    period: "Mar 2006 – Jan 2007",
    role: "Safety Officer",
    company: "BESL – JBIC Water Distribution Project",
    location: "India",
    highlights: [
      "Implemented HSE policies for water distribution construction activities",
      "Conducted site inspections, Toolbox Talks, and safety briefings",
    ],
  },
  {
    period: "Sep 2005 – Dec 2005",
    role: "Safety Officer",
    company: "Furnace Fabrica (India) Ltd – IFFCO Project",
    location: "Paradeep, India",
    highlights: [
      "Implemented site HSE plans and safety procedures aligned with client safety standards",
      "Supervised PTW, site inspections, and PPE compliance",
    ],
  },
];

const education = [
  {
    degree: "Postgraduate Diploma in HSE Management",
    institution: "University of South Wales, United Kingdom (In-Campus)",
    year: "2024",
    type: "postgrad",
  },
  {
    degree: "BSc Occupational Health & Safety – International Diploma (Level 6)",
    institution: "Clovers Safety Solutions, India",
    year: "2016",
    type: "degree",
  },
  {
    degree: "Diploma in Fire & Safety Engineering",
    institution: "TÜV Rheinland NIFE Academy, Kochi, India",
    year: "2006",
    type: "diploma",
  },
  {
    degree: "Bachelor of Commerce (B.Com)",
    institution: "Mahatma Gandhi University, India",
    year: "2004",
    type: "degree",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "MCC Computer Education, India",
    year: "2002",
    type: "diploma",
  },
];

const certifications = [
  {
    title: "NEBOSH International General Certificate in OHS (IGC)",
    body: "Arbrit Safety Solutions, India",
    year: "2010",
  },
  {
    title: "ISO Lead Auditor Certification (ISO 9001 / ISO 14001 / ISO 45001)",
    body: "BSI – British Standards Institution, Kochi",
    year: "2013",
  },
  {
    title: "Graduate Member – IOSH (GradIOSH)",
    body: "Institution of Occupational Safety and Health, United Kingdom",
    year: "2016",
  },
  {
    title: "Certified Master Trainer",
    body: "EOSH – European Occupational Safety & Health, United Kingdom",
    year: "2024",
  },
  {
    title: "Advanced Prompt Engineering Certification",
    body: "Indian Institute of Technology (IIT) Madras",
    year: "2025",
  },
];

const achievements = [
  "Acting HSE Manager for the NBTC Hail & Ghasha Onshore Project (ADNOC), leading project HSE leadership and operational safety management",
  "Developed and secured approval for 43 JSAs, Road Safety Procedures, and Emergency Response Plans with zero non-conformances during ADNOC audits",
  "Improved Tecnimont OHS audit compliance from 66% to 85% and ADNOC HSE Assurance Audit score from 75% to 82% within one quarter",
  "Led 17+ incident investigations and root cause analyses, implementing CAPA to enhance workforce safety performance",
  "Achieved 20 million man-hours without Lost Time Injury (LTI) at Al-Hassan Engineering (Petrofac Project)",
  "Reviewed and approved 550+ RAMS during the Hamad Port Project (AECOM), ensuring safe construction operations",
  "Developed NEBOSH International Diploma (DI1–DI3) training content, MSME-approved Construction Safety Program, and ESG & Sustainability courses",
  "Led development of 13 competency-based safety training modules for Blue Star, transforming traditional PPT training into practical assessment-based systems",
  "Implemented AI-assisted tools and digital HSE systems including JSA/HIRA automation and Power BI safety dashboards",
];

const languages = [
  { lang: "English", level: "Fluent" },
  { lang: "Hindi", level: "Fluent" },
  { lang: "Malayalam", level: "Native" },
  { lang: "Tamil", level: "Conversational" },
  { lang: "Arabic", level: "Working Knowledge" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible">
            <span className="inline-block text-xs font-button font-semibold tracking-widest text-primary uppercase mb-4 border border-primary/30 px-4 py-1.5 rounded-full bg-primary/5">
              About the Founder
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="visible"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
          >
            Dhanesh K. Manoharan
          </motion.h1>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" animate="visible"
            className="text-base text-muted-foreground max-w-3xl leading-relaxed"
          >
            HSE professional with 20+ years of experience across Oil & Gas, EPC construction, shutdown, and manufacturing
            environments, supporting major international clients including ADNOC, Shell, Petrofac, AECOM, JGC, KBR, and
            Dow/Aramco. Evolved from site-based roles into a specialist in HSE systems development, risk management
            frameworks, and competency-based training solutions. Demonstrated expertise in designing and implementing HSE
            Management Systems, risk assessment methodologies (HIRA/JSA/RAMS), and compliance frameworks aligned with
            ADNOC COP, OSHA, ILO, and ISO 45001. Experienced in integrating digital HSE tools, data-driven reporting,
            and AI-assisted process optimization to support sustainable and scalable safety performance.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <h2 className="text-2xl font-display font-bold text-primary mb-4 relative z-10">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              To transform organizational safety culture from compliance-driven to excellence-driven — embedding
              world-class HSE practices into the operational DNA of every client we serve.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <h2 className="text-2xl font-display font-bold text-accent mb-4 relative z-10">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              To be the most trusted HSE transformation partner for organizations worldwide — recognized as the benchmark
              for safety leadership, operational integrity, and digital HSE innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="bg-white/[0.02] border-y border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <Shield size={20} className="text-primary" />
              <h2 className="font-display text-3xl font-bold text-foreground">Core Expertise</h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-background border border-white/10 rounded-xl p-5 group hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm mb-1 leading-snug">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <Star size={20} className="text-accent" />
            <h2 className="font-display text-3xl font-bold text-foreground">Key Achievements</h2>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex items-start gap-3 bg-gradient-to-br from-accent/5 to-transparent border border-accent/15 rounded-xl p-4"
            >
              <CheckCircle size={15} className="text-accent mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Career Timeline */}
      <section className="bg-white/[0.02] border-y border-white/5 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-2">
              <Briefcase size={20} className="text-primary" />
              <h2 className="font-display text-3xl font-bold text-foreground">Career Timeline</h2>
            </div>
            <p className="text-muted-foreground ml-8">20+ years across Oil & Gas, Construction, and Industrial sectors</p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            <div className="space-y-8">
              {careerTimeline.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="relative pl-14"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>

                  <div className="bg-background border border-white/10 rounded-xl p-5 hover:border-primary/30 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-foreground text-base">{item.role}</h3>
                        <p className="text-primary text-sm font-medium mt-0.5">{item.company}</p>
                        <p className="text-muted-foreground text-xs mt-0.5">{item.location}</p>
                      </div>
                      <span className="text-xs font-button font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5 mt-3">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap size={20} className="text-primary" />
              <h2 className="font-display text-3xl font-bold text-foreground">Education</h2>
            </motion.div>
            <div className="space-y-4">
              {education.map((ed, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-5 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                    <BookOpen size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-foreground text-sm leading-snug">{ed.degree}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{ed.institution}</p>
                  </div>
                  <span className="text-xs font-button font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {ed.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Award size={20} className="text-accent" />
              <h2 className="font-display text-3xl font-bold text-foreground">Professional Certifications</h2>
            </motion.div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-5 flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 text-accent flex items-center justify-center shrink-0">
                    <Award size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-foreground text-sm leading-snug">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{cert.body}</p>
                  </div>
                  <span className="text-xs font-button font-bold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-white/[0.02] border-t border-white/5 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <Globe2 size={20} className="text-primary" />
            <h2 className="font-display text-3xl font-bold text-foreground">Languages</h2>
          </motion.div>
          <div className="flex flex-wrap gap-4">
            {languages.map((l, i) => (
              <motion.div
                key={l.lang}
                variants={fadeUp} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="bg-background border border-white/10 rounded-xl px-6 py-4 flex flex-col items-center gap-1 min-w-[120px]"
              >
                <span className="font-display font-bold text-foreground">{l.lang}</span>
                <span className="text-xs text-primary font-medium">{l.level}</span>
              </motion.div>
            ))}
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
            Partner with 20+ Years of HSE Expertise
          </motion.h2>
          <motion.p
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-blue-200 mb-8"
          >
            From ADNOC and Shell to AECOM and Petrofac — trusted by the industry's most demanding clients.
          </motion.p>
          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              data-testid="about-cta-contact"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3 rounded-lg font-button font-semibold transition-transform hover:scale-105"
            >
              Book a Consultation
            </a>
            <a
              href="https://wa.me/919846526915"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="about-cta-whatsapp"
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
