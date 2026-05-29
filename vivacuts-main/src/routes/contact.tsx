import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Hours — Viva Cuts on the Square | Sunbury, OH" },
      {
        name: "description",
        content:
          "Visit Viva Cuts on the Square at 21 S Columbus St, Sunbury, OH. Call (614) 578-0867. Open Tue–Sat.",
      },
      { property: "og:title", content: "Contact Viva Cuts on the Square" },
      { property: "og:description", content: "Hours, address, phone and directions for Viva Cuts in Sunbury, OH." },
    ],
  }),
  component: ContactPage,
});

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
  { day: "Thursday", time: "9:00 AM – 6:00 PM" },
  { day: "Friday", time: "Closed" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Visit Us</p>
        <h1 className="mt-3 font-display text-5xl font-bold text-navy md:text-6xl">
          Stop in & say hello.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Find us on the historic Sunbury square. Walk-ins welcome — give us a ring to check the wait.
        </p>
        <div className="mx-auto mt-6 max-w-xl rounded-xl border border-primary/30 bg-accent/20 px-5 py-3 text-sm font-medium text-navy">
          😷 Please wear a facial mask if you are not fully vaccinated.
        </div>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy">Address</h3>
                <p className="mt-1 text-muted-foreground">21 S Columbus St<br />Sunbury, OH 43074</p>
                <a
                  href="https://www.google.com/maps/place/Viva+cuts+on+the+square/@40.2425989,-82.8597947,207m/data=!3m1!1e3!4m9!1m2!2m1!1slocal!3m5!1s0x883859d26c8b44b7:0x83f7007cafad5b90"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  <Navigation className="h-4 w-4" /> Get directions
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy">Phone</h3>
                <a href="tel:+16145780867" className="mt-1 block text-2xl font-bold text-primary hover:underline">
                  (614) 578-0867
                </a>
                <p className="mt-1 text-sm text-muted-foreground">Call to check the wait or ask about a cut.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-navy">Hours</h3>
                <ul className="mt-3 divide-y divide-border text-sm">
                  {hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between py-2">
                      <span className="font-medium text-foreground">{h.day}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border shadow-warm">
          <iframe
            title="Viva Cuts on the Square location"
            src="https://www.google.com/maps?q=21+S+Columbus+St,+Sunbury,+OH+43074&output=embed"
            width="100%"
            height="100%"
            style={{ minHeight: 480, border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
