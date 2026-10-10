import Link from "next/link";
import { CityCard, SiteShell } from "./site-components";

const cities = [
  {
    name: "Amsterdam",
    href: "/amsterdam",
    image: "/assets/amsterdam-header.webp",
    status: "Nu verkrijgbaar",
    available: true,
    line: "Aan de Amsterdamse grachten.",
  },
  {
    name: "Utrecht",
    href: "/utrecht",
    image: "/assets/utrecht-header.webp",
    status: "Binnenkort",
    available: false,
    line: "De Dom wijst straks de weg.",
  },
  {
    name: "Rotterdam",
    href: "/rotterdam",
    image: "/assets/rotterdam-header.webp",
    status: "Binnenkort",
    available: false,
    line: "Een stad die altijd vooruitkijkt.",
  },
  {
    name: "Den Haag",
    href: "/den-haag",
    image: "/assets/den-haag-header.webp",
    status: "Binnenkort",
    available: false,
    line: "Mooie stad achter de duinen.",
  },
];

const reasons = [
  ["01", "Een stad als kraamcadeau", "Voor ouders die liever een verhaal geven dan nóg een knuffeldoekje."],
  ["02", "Stevige hardcover", "Gemaakt voor kleine handen, enthousiaste vingers en vaak opnieuw beginnen."],
  ["03", "Groeit mee", "Eerst kijken en aanwijzen. Later herkennen, navertellen en zelf de stad in."],
  ["04", "Verzamel elke stad", "Eén vaste gids, steeds een nieuwe skyline. Mooi naast elkaar in de kast."],
];

export default function Home() {
  return (
    <SiteShell active="home">
      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-kicker" aria-hidden="true">
            <span>vier steden</span><i /><span>één kleine gids</span><i /><span>26 letters</span>
          </div>

          <div className="panorama-frame">
            <div className="panorama-scroll">
              <div className="panorama-art">
                <img
                  src="/assets/home-horizon.webp"
                  alt="Geïllustreerde horizon van Amsterdam, Utrecht, Den Haag en Rotterdam met de titel Mijn Stadje"
                  width="2172"
                  height="724"
                />
                <nav className="panorama-links" aria-label="Kies een stad in de illustratie">
                  {cities.map((city) => (
                    <Link key={city.name} href={city.href} aria-label={`Bekijk Mijn Stadje ${city.name}`}>
                      <span>Bekijk {city.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="mobile-city-links" aria-label="Stadpagina’s">
              {cities.map((city) => (
                <Link key={city.name} href={city.href}>{city.name}</Link>
              ))}
            </div>
          </div>

          <div className="hero-copy">
            <div>
              <p className="eyebrow">Een prentenboekenserie voor kleine stedelingen</p>
              <h1 id="hero-title">Elke stad verdient een eigen thuiskomstverhaal.</h1>
            </div>
            <div className="hero-intro">
              <p>
                Noah is vier, nieuwsgierig, zelfverzekerd en soms nét iets te zeker van zijn zaak.
                In elk boek neemt hij een peuter mee langs de plekken die een stad tot thuis maken.
              </p>
              <p>
                Amsterdam is als eerste aan de beurt. Utrecht, Rotterdam en Den Haag staan al
                ongeduldig in de rij.
              </p>
              <Link className="text-link" href="/amsterdam">Ontdek het Amsterdam-boek <span>↗</span></Link>
            </div>
          </div>
        </section>

        <section className="section city-picker" aria-labelledby="city-picker-title">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Waar begint jouw verhaal?</p>
              <h2 id="city-picker-title">Kies een stad</h2>
            </div>
            <p>Vier boeken, vier steden. Noah blijft gelukkig gewoon Noah.</p>
          </div>
          <div className="city-grid">
            {cities.map((city, index) => <CityCard key={city.name} city={city} index={index + 1} />)}
          </div>
        </section>

        <section className="section why-section" aria-labelledby="why-title">
          <div className="why-intro">
            <p className="eyebrow light">Waarom dit boek</p>
            <h2 id="why-title">Een boek dat blijft, ook als maat 50 allang niet meer past.</h2>
            <p>
              Voor op de commode, naast het bed en later vooraan in de boekenkast.
              Geen haast: de stad loopt niet weg.
            </p>
          </div>
          <ol className="reason-list">
            {reasons.map(([number, title, text]) => (
              <li key={number}>
                <span className="reason-number">{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section next-stop" aria-label="Volgende halte Amsterdam">
          <div>
            <p className="eyebrow">Eerste halte</p>
            <h2>Amsterdam van A tot Z</h2>
            <p>Van bakfiets tot Koningsdag, met precies genoeg stadse eigenwijsheid.</p>
          </div>
          <Link className="button primary" href="/amsterdam">Bekijk het boek <span aria-hidden="true">→</span></Link>
        </section>
      </main>
    </SiteShell>
  );
}
