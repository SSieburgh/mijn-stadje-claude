"use client";

import Link from "next/link";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

// Vul deze twee waarden in als Vercel Environment Variables (Project Settings →
// Environment Variables), niet hier in de code:
//   NEXT_PUBLIC_GA_MEASUREMENT_ID   → jouw GA4 Measurement ID, bijv. G-XXXXXXXXXX
//   NEXT_PUBLIC_META_PIXEL_ID       → jouw Meta Pixel ID, een reeks cijfers
// Zolang een van beide niet is ingesteld, wordt dat specifieke script simpelweg
// niet geladen — er gebeurt dan niets fout, er wordt alleen niets getrackt.
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const CONSENT_KEY = "mijnstadje-consent";
const REOPEN_EVENT = "mijnstadje:open-cookie-settings";

type Consent = "granted" | "denied" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function readConsent(): Consent {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

// --- Events, los van de automatische pageviews hierboven -----------------
// Deze twee functies worden door andere componenten aangeroepen (CityCard,
// de stadlinks op de homepage, en straks de "Koop op Amazon"-knop zodra die
// een echte link heeft). Ze doen zelf niets als er geen toestemming is
// gegeven: gtag/fbq bestaan dan simpelweg nog niet op window, dus de if's
// hieronder voorkomen alleen een foutmelding, ze "omzeilen" geen toestemming.

/** Iemand klikt op een stad (homepage-kaart, panorama-link of mobiel menu). */
export function trackCityView(cityName: string) {
  if (typeof window === "undefined") return;
  if (GA_ID && window.gtag) {
    window.gtag("event", "select_content", { content_type: "stad", content_name: cityName });
  }
  if (META_PIXEL_ID && window.fbq) {
    window.fbq("track", "ViewContent", { content_name: cityName, content_category: "stad" });
  }
}

/** Iemand klikt op "Koop op Amazon" (pas actief zodra die knop een echte link heeft). */
export function trackAmazonClick(cityName: string) {
  if (typeof window === "undefined") return;
  if (GA_ID && window.gtag) {
    window.gtag("event", "click_buy_amazon", { content_type: "boek", content_name: cityName });
  }
  if (META_PIXEL_ID && window.fbq) {
    window.fbq("track", "Lead", { content_name: cityName, content_category: "boek_koopintentie" });
  }
}

// Vuurt bij elke routewissel (App Router doet dit client-side, zonder page
// reload) een page_view door aan GA4 en een PageView aan de Meta Pixel — dat
// gebeurt anders niet vanzelf.
function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = searchParams?.toString() ? `${pathname}?${searchParams}` : pathname;
    if (GA_ID && window.gtag) window.gtag("event", "page_view", { page_path: url });
    if (META_PIXEL_ID && window.fbq) window.fbq("track", "PageView");
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  const [consent, setConsentState] = useState<Consent>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setConsentState(readConsent());
    setHydrated(true);

    const reopen = () => {
      window.localStorage.removeItem(CONSENT_KEY);
      setConsentState(null);
    };
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  function choose(value: "granted" | "denied") {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsentState(value);
  }

  return (
    <>
      {consent === "granted" && (
        <>
          {GA_ID && (
            <>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
              <Script id="ga4-init" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  window.gtag = gtag;
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { anonymize_ip: true });`}
              </Script>
            </>
          )}

          {META_PIXEL_ID && (
            <>
              <Script id="meta-pixel-init" strategy="afterInteractive">
                {`!function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${META_PIXEL_ID}');
                  fbq('track', 'PageView');`}
              </Script>
              <noscript>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  height="1"
                  width="1"
                  style={{ display: "none" }}
                  src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                  alt=""
                />
              </noscript>
            </>
          )}

          <Suspense fallback={null}>
            <PageviewTracker />
          </Suspense>
        </>
      )}

      {hydrated && consent === null && (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookievoorkeuren">
          <p>
            We gebruiken alleen cookies voor bezoekersstatistieken (Google Analytics) en
            advertentiemeting (Meta Pixel) — nooit voor iets anders, en alleen als jij dat goedvindt.
            Lees ons <Link href="/cookiebeleid">cookiebeleid</Link> voor de details, of kies hieronder.
          </p>
          <div className="cookie-banner-actions">
            <button className="cookie-choice decline" type="button" onClick={() => choose("denied")}>
              Weigeren
            </button>
            <button className="cookie-choice accept" type="button" onClick={() => choose("granted")}>
              Accepteren
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function CookieSettingsLink() {
  return (
    <button
      type="button"
      className="cookie-settings-link"
      onClick={() => window.dispatchEvent(new Event(REOPEN_EVENT))}
    >
      Cookie-instellingen
    </button>
  );
}
