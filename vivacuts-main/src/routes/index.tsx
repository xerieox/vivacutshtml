import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Scissors, Baby, Users, Sparkles, MapPin, Phone, Clock } from "lucide-react";
import heroShop from "../assets/hero-shop.jpg";
import kidsCut from "../assets/kids-cut.jpg";
import shop1 from "../assets/google/shop-1.jpg";
import shop2 from "../assets/google/shop-2.jpg";
import shop3 from "../assets/google/shop-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Viva Cuts on the Square — Family Barber Shop in Sunbury, OH" },
      {
        name: "description",
        content:
          "Woman-owned, family-friendly barber shop on the square in Sunbury, Ohio. 4.9★ on Google. Walk-ins welcome.",
      },
      { property: "og:title", content: "Viva Cuts on the Square — Sunbury, OH" },
      { property: "og:description", content: "Haircuts for the whole family in Sunbury, Ohio." },
    ],
  }),
  component: Home,
});

const reviews = [
  { quote: "Very homey small-town atmosphere.", name: "Google Review" },
  { quote: "Couldn't be happier with the quality of service.", name: "Google Review" },
  { quote: "Great price, even better haircut.", name: "Google Review" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroShop}
            alt="Cozy interior of Viva Cuts barbershop"
            className="h-full w-full object-cover"
            width={1600}
            height={1100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/65 to-navy/30" />
        </div>
        <div className="relative mx-auto flex min-h-[600px] max-w-6xl flex-col justify-center px-4 py-24 md:px-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cream backdrop-blur">
            <Sparkles className="h-3 w-3 text-accent" /> Woman-Owned · Sunbury, Ohio
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[1.05] text-cream md:text-7xl">
            Haircuts for the <span className="text-accent">whole family</span>, on the square.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-cream/85">
            Welcome to Viva Cuts on the Square — a warm, family-friendly barber shop in the heart of
            historic Sunbury. Great cuts, fair prices, and that hometown feel.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+16145780867"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" /> Call (614) 578-0867
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-6 py-3 text-sm font-semibold text-cream backdrop-blur transition-colors hover:bg-cream/20"
            >
              View Services
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-3 text-cream/90">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm">
              <span className="font-semibold">4.9</span> · 47+ Google reviews
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Users, title: "Family-Friendly", text: "Cuts for adults & children in a welcoming, no-fuss space." },
            { icon: Scissors, title: "Skilled Stylists", text: "Classic cuts, modern fades, beard trims and everything in between." },
            { icon: Baby, title: "Great with Kids", text: "Patient, gentle service that makes first haircuts a great memory." },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story strip */}
      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-6">
          <img
            src={kidsCut}
            alt="A child smiling during a haircut at Viva Cuts"
            loading="lazy"
            width={1200}
            height={900}
            className="rounded-2xl shadow-warm"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Story</p>
            <h2 className="mt-3 text-4xl font-bold text-navy md:text-5xl">A small-town shop with a big heart.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Right on the Sunbury square, Viva Cuts is the woman-owned neighborhood barbershop where
              everyone — from toddlers to grandparents — feels right at home. We take pride in great
              haircuts at honest prices, served with conversation and a smile.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              More about us →
            </Link>
          </div>
        </div>
      </section>

      {/* Real photos from our shop */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Step inside</p>
          <h2 className="mt-2 text-4xl font-bold text-navy md:text-5xl">Straight from the shop</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            A peek at Viva Cuts on the Square — real photos from our neighbors and guests.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[shop1, shop2, shop3].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Viva Cuts on the Square photo ${i + 1}`}
              loading="lazy"
              className="h-72 w-full rounded-2xl object-cover shadow-soft transition-transform hover:-translate-y-1"
            />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What folks are saying</p>
          <h2 className="mt-2 text-4xl font-bold text-navy md:text-5xl">Loved by our neighbors</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.quote} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-xl leading-snug text-navy">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
        <div
          className="overflow-hidden rounded-3xl p-10 text-center shadow-warm md:p-16"
          style={{ background: "var(--gradient-warm)" }}
        >
          <h2 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Stop in & say hello.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Walk-ins welcome. Find us right on the square in downtown Sunbury.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-2 backdrop-blur">
              <MapPin className="h-4 w-4" /> 21 S Columbus St
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-4 py-2 backdrop-blur">
              <Clock className="h-4 w-4" /> Tue–Thu 9–6
            </span>
            <a
              href="tel:+16145780867"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2 font-semibold text-navy hover:bg-accent"
            >
              <Phone className="h-4 w-4" /> (614) 578-0867
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
