import type { Metadata } from "next";
import Link from "next/link";
import { CityHero, SiteShell } from "../site-components";

export const metadata: Metadata = {
  title: "Amsterdam",
  description: "Mijn Stadje Amsterdam: een prentenboek waarin Noah peuters meeneemt door de hoofdstad.",
};

const beats = [
  ["B", "Duizend kleuren op het water", "Bloemenmarkt"],
  ["F", "Tringeling, rakelings langs het water", "Fietsen langs de gracht"],
  ["J", "Buurman zwaait, buurvrouw lacht", "De Jordaan"],
  ["L", "Hij brult zo hard dat de bladeren trillen", "Artis"],
  ["O", "Overal vlaggetjes, overal boten", "Koningsdag"],
  ["R", "Het ruikt zoet in de negen straatjes", "9 straatjes"],
  ["T", "Koude limonade op een warme dag", "Terrasje aan de gracht"],
  ["Y", "Wind in zijn haar, meeuwen om hem heen", "Het IJ"],
];

const spreads = [
  { src: "/assets/gallery-centraal.webp", alt: "Noah en de ooievaar tussen de geparkeerde fietsen bij Amsterdam Centraal", caption: "Aankomst bij Centraal" },
  { src: "/assets/gallery-bike.webp", alt: "Noah fietst langs de gracht, de ooievaar op een fiets ernaast", caption: "Fietsen langs de gracht" },
  { src: "/assets/hero-bridge.webp", alt: "Noah steekt een Amsterdamse gracht over via een stenen brug, met woonboten, tulpen en een overvliegende ooievaar", caption: "Over de brug naar huis" },
  { src: "/assets/gallery-cafe.webp", alt: "Noah kijkt naar gebak in een etalage, de ooievaar leest de krant op het terras", caption: "Gebak kijken bij het buurttentje" },
  { src: "/assets/gallery-fleamarket.webp", alt: "Noah bekijkt platen op de vlooienmarkt, de ooievaar past hoeden", caption: "Grasduinen op de vlooienmarkt" },
  { src: "/assets/gallery-chinatown.webp", alt: "Noah loopt door een straat met lampionnen, de ooievaar eet onderweg iets lekkers", caption: "Dim sum happen onderweg" },
  { src: "/assets/gallery-bedroom.webp", alt: "Noah wordt wakker terwijl de ooievaar met een baby over de gracht vliegt", caption: "Thuiskomen" },
];

export default function AmsterdamPage() {
  return (
    <SiteShell active="amsterdam">
      <main>
        <CityHero image="/assets/amsterdam-header.webp" city="Amsterdam" status="Boek 1 · verhaal compleet" />

        <section className="section amsterdam-intro">
          <div className="book-stage" aria-label="Conceptcover van Mijn Stadje Amsterdam">
            <div className="book-shadow" />
            <div className="book-cover">
              <span className="cover-label">conceptcover</span>
              <img src="/assets/noah-hero.webp" alt="Noah op de conceptcover van Mijn Stadje Amsterdam" />
              <div className="cover-footer"><span>Mijn Stadje Amsterdam</span><b>3 ×</b></div>
            </div>
          </div>

          <div className="book-intro-copy">
            <p className="eyebrow">Boek één · Amsterdam</p>
            <h1>De stad is groot. Noah weet gelukkig precies waar hij heen moet.</h1>
            <p className="lead">
              In <em>Mijn Stadje Amsterdam</em> trekt Noah eropuit langs alles wat de hoofdstad
              herkenbaar, druk, groen en heerlijk eigenwijs maakt. Van bakfiets tot brug en van
              markt tot thuiskomen.
            </p>
            <p>
              Het verhaal is gemaakt om samen te bekijken en steeds opnieuw te lezen. Voor baby’s
              is er veel te zien; voor peuters valt er steeds meer te herkennen. En voor voorlezers
              zijn er genoeg details om bij de tiende keer nog iets nieuws te ontdekken.
            </p>
            <dl className="book-facts">
              <div><dt>Formaat</dt><dd>210 × 279 mm (staand)</dd></div>
              <div><dt>Uitvoering</dt><dd>Stevige hardcover</dd></div>
              <div><dt>Leeftijd</dt><dd>0–3 jaar</dd></div>
            </dl>
            <button className="button disabled" disabled>Binnenkort te koop op Amazon</button>
            <p className="amazon-note">
              Zodra het boek gedrukt is, verwijst deze knop naar Amazon. Aankopen verlopen volledig
              via Amazon; Mijn Stadje gebruikt dan het Amazon Associates-programma. Er is hier dus
              geen eigen kassa — ook Noah hoeft geen pincode te onthouden.
            </p>
          </div>
        </section>

        <section className="section story-route" aria-labelledby="route-title">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Acht letters uit de 26</p><h2 id="route-title">Van A tot Z door de stad</h2></div>
            <p>Het boek telt 26 letterspreads, elk met een eigen plek in Amsterdam — hier alvast acht voorproefjes.</p>
          </div>
          <ol className="beat-grid">
            {beats.map(([number, kicker, title]) => (
              <li key={number}>
                <span>{number}</span>
                <div><small>{kicker}</small><h3>{title}</h3></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section gallery-section" aria-labelledby="gallery-title">
          <div className="gallery-head-row">
            <div className="section-heading">
              <p className="eyebrow">Een kijkje in het boek</p>
              <h2 id="gallery-title">Acht stadsmomenten, elk met zijn eigen sfeer</h2>
              <p className="gallery-lead">Van de bakfiets bij Centraal tot de vlooienmarkt en het buurttentje — een paar spreads uit het Amsterdam-boek.</p>
            </div>
            <div className="stork-tip">
              <img src="/assets/stork-mascot.webp" alt="De ooievaar uit Mijn Stadje, met een zonnebril op de vlooienmarkt" />
              <p>Spot &apos;m? De ooievaar verstopt zich op bijna elke pagina — een klein zoekplaatje voor onderweg.</p>
            </div>
          </div>
          <div className="gallery-grid">
            {spreads.map((spread) => (
              <figure key={spread.src}>
                <img src={spread.src} alt={spread.alt} loading="lazy" />
                <figcaption>{spread.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section amazon-panel">
          <div>
            <p className="eyebrow light">Nog één klein hoofdstuk</p>
            <h2>Het verhaal is af. De drukpers warmt op.</h2>
            <p>Straks wordt het boek door Amazon gedrukt, betaald en verzonden. Deze site blijft lekker licht reizen.</p>
          </div>
          <div className="amazon-action">
            <button className="button disabled light" disabled>Binnenkort te koop op Amazon</button>
            <Link className="text-link light-link" href="/">Bekijk ook de volgende steden →</Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
