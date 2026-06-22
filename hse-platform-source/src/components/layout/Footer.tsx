import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display font-bold text-2xl text-primary mb-4">HSE Transformation Partners</h2>
            <p className="text-muted-foreground max-w-sm mb-6">
              Transforming Safety. Empowering Performance. A global safety transformation consultancy helping organizations move from mere compliance to operational excellence.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Training', 'Contact'].map(item => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: hsetranspartners808@gmail.com</li>
              <li>WhatsApp: +919846526915</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HSE Transformation Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
