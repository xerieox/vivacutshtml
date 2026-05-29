import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, MapPin, Star } from "lucide-react";
import heroShop from "../assets/hero-shop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Viva Cuts on the Square | Woman-Owned Barber in Sunbury" },
      {
        name: "description",
        content:
          "Learn about Viva Cuts on the Square, a woman-owned family barber shop on the historic square in Sunbury, Ohio.",
      },
      { property: "og:title", content: "About Viva Cuts on the Square" },
      { property: "og:description", content: "Woman-owned, family-friendly barber shop in Sunbury, OH." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center md:px-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Story</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-navy md:text-6xl">
            A hometown shop, run with heart.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Viva Cuts on the Square is a woman-owned barbershop tucked right on the historic Sunbury
            square. We opened our doors with a simple promise: great haircuts in a warm, welcoming
            place where everyone — kids, parents, grandparents — feels at home.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From a child's very first haircut to a sharp grown-up fade, we treat every chair like it's
            our most important one of the day. Because around here, you're not a customer — you're a
            neighbor.
          </p>
        </div>
        <img
          src={heroShop}
          alt="Inside Viva Cuts on the Square in Sunbury, OH"
          loading="lazy"
          width={1600}
          height={1100}
          className="rounded-2xl shadow-warm"
        />
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <h2 className="text-center font-display text-4xl font-bold text-navy md:text-5xl">What we believe in</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Heart, title: "Warm Welcome", text: "A homey, small-town atmosphere where you can relax and chat." },
              { icon: Users, title: "Everyone's Welcome", text: "Cuts for the whole family — adults, kids, and seniors alike." },
              { icon: Star, title: "Quality That Shows", text: "4.9-star service from neighbors who keep coming back." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/30 text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center md:px-6">
        <MapPin className="mx-auto h-8 w-8 text-primary" />
        <h2 className="mt-4 font-display text-3xl font-bold text-navy md:text-4xl">
          Right on the Sunbury Square
        </h2>
        <p className="mt-4 text-muted-foreground">
          21 S Columbus St, Sunbury, OH 43074. Stop in and see us — there's almost always a fresh
          conversation happening alongside a fresh cut.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition-transform hover:scale-105"
        >
          Get directions →
        </Link>
      </section>
    </>
  );
}
