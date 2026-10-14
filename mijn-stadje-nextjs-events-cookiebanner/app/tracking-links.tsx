"use client";

// Alle plekken waar een klik ook een trackingevent moet versturen (GA4 +
// Meta Pixel) staan hier samen in één "use client"-bestand. De pagina's
// zelf (page.tsx, amsterdam/page.tsx, enz.) zijn gewone server components;
// alleen deze interactieve snippets hebben een client-component nodig, want
// event handlers zoals onClick kunnen niet rechtstreeks vanuit een server
// component aan next/link's <Link> worden doorgegeven.

import type { ReactNode } from "react";
import Link from "next/link";
import { trackAmazonClick, trackCityView } from "./analytics";

type City = {
  name: string;
  href: string;
  image: string;
  status: string;
  available: boolean;
  line: string;
};

/** Generieke stad-link met klik-tracking (event 2) — gebruikt door CityCard
 *  hieronder, en door de panorama-/mobiele stedenlinks op de homepage. */
export function TrackedCityLink({
  href,
  cityName,
  className,
  ariaLabel,
  children,
}: {
  href: string;
  cityName: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
}) {
  return (
    <Link className={className} href={href} aria-label={ariaLabel} onClick={() => trackCityView(cityName)}>
      {children}
    </Link>
  );
}

export function CityCard({ city, index }: { city: City; index: number }) {
  return (
    <TrackedCityLink className={`city-card ${city.available ? "available" : ""}`} href={city.href} cityName={city.name}>
      <div className="city-card-image">
        <img src={city.image} alt={`Geïllustreerde titelbanner van Mijn Stadje ${city.name}`} loading="lazy" />
        <span className="city-index">0{index}</span>
      </div>
      <div className="city-card-copy">
        <div><h3>{city.name}</h3><p>{city.line}</p></div>
        <span className="city-status"><i />{city.status}</span>
      </div>
      <span className="card-arrow" aria-hidden="true">↗</span>
    </TrackedCityLink>
  );
}

// Eén herbruikbare "Koop op Amazon"-knop voor alle boekpagina's. Zonder
// `href` (nu, voor elk boek) is dit gewoon de uitgeschakelde placeholder van
// vroeger. Vul je straks een echte Amazon-link in (zie README.md, "Amazon-
// knop later activeren"), dan wordt het automatisch een werkende link die
// bij elke klik ook meteen het Lead/click_buy_amazon-event meestuurt naar
// Meta Pixel en GA4 — daar hoeft dan niets meer voor te worden aangepast.
export function AmazonBuyButton({
  city,
  href,
  variant,
}: {
  city: string;
  href?: string;
  variant?: "light";
}) {
  if (!href) {
    return (
      <button className={`button disabled${variant === "light" ? " light" : ""}`} disabled>
        Binnenkort te koop op Amazon
      </button>
    );
  }

  return (
    <a
      className="button primary"
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      onClick={() => trackAmazonClick(city)}
    >
      Koop op Amazon
    </a>
  );
}
