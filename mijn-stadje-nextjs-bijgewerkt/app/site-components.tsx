import type { ReactNode } from "react";
import Link from "next/link";

type ActivePage = "home" | "amsterdam" | "utrecht" | "rotterdam" | "den-haag";

const navItems: Array<{ label: string; href: string; key: ActivePage }> = [
  { label: "Amsterdam", href: "/amsterdam", key: "amsterdam" },
  { label: "Utrecht", href: "/utrecht", key: "utrecht" },
  { label: "Rotterdam", href: "/rotterdam", key: "rotterdam" },
  { label: "Den Haag", href: "/den-haag", key: "den-haag" },
];

export function SiteShell({ children, active }: { children: ReactNode; active: ActivePage }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Mijn Stadje, naar de homepage">
          <span className="wordmark-mark" aria-hidden="true">×<br />×<br />×</span>
          <span>Mijn Stadje</span>
        </Link>

        <nav className="desktop-nav" aria-label="Hoofdnavigatie">
          {navItems.map((item) => (
            <Link className={active === item.key ? "active" : ""} key={item.key} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Open menu"><span /><span /><span /></summary>
          <nav aria-label="Mobiele navigatie">
            <Link href="/">Alle steden</Link>
            {navItems.map((item) => <Link key={item.key} href={item.href}>{item.label}</Link>)}
          </nav>
        </details>
      </header>

      {children}

      <footer className="site-footer">
        <div className="footer-title"><span>Mijn Stadje</span><small>Groot worden begint dichtbij.</small></div>
        <nav aria-label="Voetnavigatie">
          <Link href="/">Alle steden</Link>
          <Link href="/amsterdam">Amsterdam</Link>
          <Link href="/utrecht">Utrecht</Link>
          <Link href="/rotterdam">Rotterdam</Link>
          <Link href="/den-haag">Den Haag</Link>
        </nav>
        <p>© 2026 Mijn Stadje</p>
      </footer>
    </div>
  );
}

type City = {
  name: string;
  href: string;
  image: string;
  status: string;
  available: boolean;
  line: string;
};

export function CityCard({ city, index }: { city: City; index: number }) {
  return (
    <Link className={`city-card ${city.available ? "available" : ""}`} href={city.href}>
      <div className="city-card-image">
        <img src={city.image} alt={`Geïllustreerde titelbanner van Mijn Stadje ${city.name}`} loading="lazy" />
        <span className="city-index">0{index}</span>
      </div>
      <div className="city-card-copy">
        <div><h3>{city.name}</h3><p>{city.line}</p></div>
        <span className="city-status"><i />{city.status}</span>
      </div>
      <span className="card-arrow" aria-hidden="true">↗</span>
    </Link>
  );
}

export function CityHero({ image, city, status }: { image: string; city: string; status: string }) {
  return (
    <section className="city-hero" aria-label={`Mijn Stadje ${city}`}>
      <img src={image} alt={`Geïllustreerde titelbanner Mijn Stadje ${city}`} width="1875" height="839" />
      <div className="city-hero-meta">
        <Link href="/">← Alle steden</Link>
        <span><i />{status}</span>
      </div>
    </section>
  );
}

export function DevelopmentPage({
  city,
  image,
  note,
  active,
}: {
  city: string;
  image: string;
  note: string;
  active: "utrecht" | "rotterdam" | "den-haag";
}) {
  return (
    <SiteShell active={active}>
      <main>
        <CityHero image={image} city={city} status="In ontwikkeling" />
        <section className="development-section">
          <div className="development-stamp" aria-hidden="true"><span>wordt</span><strong>getekend</strong><span>met geduld</span></div>
          <div>
            <p className="eyebrow">Nog even niet uitstappen</p>
            <h1>Noah zoekt de mooiste route door {city}.</h1>
            <p>{note}</p>
            <p>
              Het boek is nog in ontwikkeling. De skyline staat alvast klaar; het verhaal
              moet alleen nog even zijn jas aantrekken.
            </p>
            <div className="button-row">
              <Link className="button primary" href="/">Terug naar alle steden</Link>
              <Link className="button secondary" href="/amsterdam">Bekijk Amsterdam</Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
