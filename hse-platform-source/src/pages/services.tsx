import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Flame, Award, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Strategic HSE Consulting",
      subs: ["Corporate HSE Strategy", "Safety Culture Assessments", "Risk Management Frameworks", "Regulatory Compliance", "Incident Investigation"]
    },
    {
      icon: <HardHat size={40} />,
      title: "Construction Safety",
      subs: ["Project Safety Plans", "Contractor Management", "Site Inspections", "Lifting Operations Safety", "Fall Protection"]
    },
    {
      icon: <Flame size={40} />,
      title: "Oil & Gas Process Safety",
      subs: ["HAZOP/HAZID Facilitation", "Process Safety Management", "Emergency Response Planning", "Permit to Work Systems", "Asset Integrity"]
    },
    {
      icon: <Award size={40} />,
      title: "ISO Management Systems",
      subs: ["ISO 45001 Implementation", "ISO 14001 Environmental", "Internal Auditing", "Gap Analysis", "Certification Support"]
    },
    {
      icon: <Users size={40} />,
      title: "Safety Leadership",
      subs: ["Executive Coaching", "Visible Felt Leadership", "Behavioral Based Safety", "Supervisory Training", "Performance Metrics"]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions designed for complex, high-risk environments.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="bg-primary/10 text-primary p-6 rounded-2xl shrink-0">
                {service.icon}
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">{service.title}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.subs.map((sub, j) => (
                    <li key={j} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 shrink-0"></span>
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
