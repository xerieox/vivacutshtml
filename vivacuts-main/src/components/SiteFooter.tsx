import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="font-display text-2xl font-bold">Viva Cuts on the Square</h3>
          <p className="mt-3 text-sm text-cream/75">
            A family-friendly, woman-owned barber shop in the heart of Sunbury, Ohio. Haircuts for the whole family.
          </p>
          <a
            href="https://www.facebook.com/VIVACUTSONTHESQUARE/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-cream/80 hover:text-accent"
          >
            <Facebook className="h-4 w-4" /> Find us on Facebook
          </a>
          <p className="mt-4 rounded-lg border border-accent/40 bg-cream/5 p-3 text-xs text-cream/80">
            Please wear a facial mask if you are not fully vaccinated.
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="font-display text-lg font-semibold text-accent">Visit</h4>
          <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> 21 S Columbus St, Sunbury, OH 43074</p>
          <p className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-accent" /> <a href="tel:+16145780867" className="hover:text-accent">(614) 578-0867</a></p>
          <p className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-accent" /> Tue–Thu, 9 AM – 6 PM · Closed Fri–Mon</p>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="font-display text-lg font-semibold text-accent">Explore</h4>
          <Link to="/" className="block text-cream/80 hover:text-accent">Home</Link>
          <Link to="/services" className="block text-cream/80 hover:text-accent">Services</Link>
          <Link to="/about" className="block text-cream/80 hover:text-accent">About</Link>
          <Link to="/contact" className="block text-cream/80 hover:text-accent">Contact</Link>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Viva Cuts on the Square. Proudly woman-owned in Sunbury, Ohio.
      </div>
    </footer>
  );
}
