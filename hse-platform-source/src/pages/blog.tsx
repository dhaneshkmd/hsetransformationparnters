import { Link } from "wouter";

export default function Blog() {
  const articles = [
    { title: "The Future of Process Safety in Energy", category: "Industry Insights", date: "Oct 12, 2023" },
    { title: "Building a Proactive Reporting Culture", category: "Leadership", date: "Sep 28, 2023" },
    { title: "Navigating ISO 45001 Transition", category: "Compliance", date: "Sep 15, 2023" },
    { title: "Lessons Learned: High Potential Incidents", category: "Case Studies", date: "Aug 30, 2023" },
    { title: "Digital Transformation in HSE", category: "Technology", date: "Aug 14, 2023" },
    { title: "Contractor Safety Management Best Practices", category: "Operations", date: "Jul 22, 2023" }
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <div className="mb-16">
        <h1 className="text-5xl font-display font-bold mb-6">Insights & Intelligence</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Expert perspectives on safety culture, regulatory changes, and operational excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <div key={i} className="bg-card border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-colors group cursor-pointer">
            <div className="h-48 bg-muted w-full relative">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-3 uppercase tracking-wider font-semibold">
                <span className="text-primary">{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                Read our latest analysis and discover actionable strategies to implement in your organization...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
