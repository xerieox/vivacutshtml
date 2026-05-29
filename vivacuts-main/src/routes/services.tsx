import { createFileRoute } from "@tanstack/react-router";
import { Scissors, Baby, User, Sparkles, Wind, Heart } from "lucide-react";
import barberPole from "../assets/barber-pole.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Viva Cuts on the Square | Sunbury, OH Barber" },
      {
        name: "description",
        content:
          "Haircuts for men, women, and kids in Sunbury, Ohio. Classic cuts, fades, beard trims and more at Viva Cuts on the Square.",
      },
      { property: "og:title", content: "Services at Viva Cuts on the Square" },
      { property: "og:description", content: "Cuts, fades, beard trims and kids' cuts in Sunbury, Ohio." },
    ],
  }),
  component: ServicesPage,
});

const PRICE = "$21";
const services = [
  { icon: User, title: "Men's Haircut", desc: "A classic cut tailored to your style — clippers, scissors, or both.", price: PRICE },
  { icon: Scissors, title: "Fade & Taper", desc: "Crisp skin fades, low/mid/high tapers and modern blends.", price: PRICE },
  { icon: Baby, title: "Children's Cut", desc: "Patient, friendly service for kids of all ages — first cuts welcome.", price: PRICE },
  { icon: Sparkles, title: "Beard Trim & Lineup", desc: "Sharp lineups and shaped beards to finish off your look.", price: PRICE },
  { icon: Wind, title: "Senior Cut", desc: "A relaxed, classic cut for our regular gentlemen.", price: PRICE },
  { icon: Heart, title: "Women's Cut", desc: "Simple cuts and trims in a welcoming, no-pressure setting.", price: PRICE },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Services & Pricing</p>
            <h1 className="mt-3 font-display text-5xl font-bold text-navy md:text-6xl">One simple price: $21.</h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Whatever you're after — a clean fade, a quick trim, or a first haircut for your little one —
              every haircut is just $21. Honest pricing, every chair, every time.
            </p>
            <p className="mt-4 inline-block rounded-lg border border-primary/30 bg-accent/20 px-4 py-2 text-sm font-medium text-navy">
              😷 Please wear a facial mask if you are not fully vaccinated.
            </p>
          </div>
          <img
            src={barberPole}
            alt="Classic barber pole at Viva Cuts"
            loading="lazy"
            width={800}
            height={1000}
            className="mx-auto h-72 w-56 rounded-2xl object-cover shadow-warm md:h-96 md:w-72"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-accent/30 px-3 py-1 text-xs font-semibold text-navy">
                  {s.price}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-dashed border-border bg-secondary/40 p-8 text-center">
          <p className="font-display text-xl text-navy">
            Walk-ins are welcome. Call <a href="tel:+16145780867" className="font-bold text-primary hover:underline">(614) 578-0867</a> to check the wait or schedule ahead.
          </p>
        </div>
      </section>
    </>
  );
}
