import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Viva Cuts on the Square — Family Barber Shop in Sunbury, OH" },
      {
        name: "description",
        content:
          "Woman-owned, family-friendly barber shop on the square in Sunbury, Ohio. Haircuts for adults and kids. Call (614) 578-0867.",
      },
      { name: "author", content: "Viva Cuts on the Square" },
      { property: "og:title", content: "Viva Cuts on the Square — Family Barber Shop in Sunbury, OH" },
      { property: "og:description", content: "A website for Viva Cuts on the Square, a family-friendly barber shop in Sunbury, Ohio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Viva Cuts on the Square — Family Barber Shop in Sunbury, OH" },
      { name: "description", content: "A website for Viva Cuts on the Square, a family-friendly barber shop in Sunbury, Ohio." },
      { name: "twitter:description", content: "A website for Viva Cuts on the Square, a family-friendly barber shop in Sunbury, Ohio." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c56b7256-f635-47f7-ad27-c0df70872533/id-preview-1a337e35--49ce44fe-3002-4b32-9ba6-c3e389616b1a.lovable.app-1776740067430.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c56b7256-f635-47f7-ad27-c0df70872533/id-preview-1a337e35--49ce44fe-3002-4b32-9ba6-c3e389616b1a.lovable.app-1776740067430.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
