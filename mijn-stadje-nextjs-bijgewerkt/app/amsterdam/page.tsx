import type { Metadata } from "next";
import Link from "next/link";
import { CityHero, SiteShell } from "../site-components";

export const metadata: Metadata = {
  title: "Amsterdam",
  description: "Mijn Stadje Amsterdam: een prentenboek waarin Noah peuters meeneemt door de hoofdstad.",
};

const spreads = [
  { src: "/assets/boek-amsterdam-b-bloemenmarkt.webp", alt: "B is van Bloemenmarkt: Noah wijst naar de bloemenstalletjes langs de gracht, vol tulpen en zonnebloemen", caption: "B is van Bloemenmarkt" },
  { src: "/assets/boek-amsterdam-f-fietsen.webp", alt: "F is van Fietsen: Noah fietst langs de gracht, de ooievaar fietst op een blauw fietsje met hem mee", caption: "F is van Fietsen" },
  { src: "/assets/boek-amsterdam-j-jordaan.webp", alt: "J is van Jordaan: Noah zwaait naar de buren op de stoep van een Jordaanhuisje, de ooievaar kijkt mee vanaf het dak", caption: "J is van Jordaan" },
  { src: "/assets/boek-amsterdam-l-leeuw.webp", alt: "L is van Leeuw: Noah staat in Artis bij het leeuwenverblijf, de ooievaar staat tussen de flamingo’s", caption: "L is van Leeuw" },
  { src: "/assets/boek-amsterdam-o-oranje.webp", alt: "O is van Oranje: Noah rent met een oranje vlaggetje langs de gracht op Koningsdag, vol boten en oranje feestgangers", caption: "O is van Oranje" },
  { src: "/assets/boek-amsterdam-r-ruiken.webp", alt: "R is van Ruiken: Noah snuffelt bij een bakkerij in de 9 straatjes, de ooievaar leest de krant op het terras", caption: "R is van Ruiken" },
  { src: "/assets/boek-amsterdam-t-terrasje.webp", alt: "T is van Terrasje: Noah en papa drinken koude limonade op een terras aan de gracht", caption: "T is van Terrasje" },
  { src: "/assets/boek-amsterdam-y-ij.webp", alt: "Y is van het IJ: Noah zwaait vanaf de pont over het IJ naar de meeuwen, de ooievaar staat naast hem", caption: "Y is van het IJ" },
];

export default function AmsterdamPage() {
  return (
    <SiteShell active="amsterdam">
      <main>
        <CityHero image="/assets/amsterdam-header.webp" city="Amsterdam" status="Boek 1 · verhaal compleet" />

        <section className="section amsterdam-intro">
          <div className="book-stage" aria-label="Omslag van Mijn Stadje Amsterdam">
            <div className="book-shadow" />
            <div className="book-cover">
              <img
                src="/assets/omslag-amsterdam.webp"
                alt="Omslag van Mijn Stadje Amsterdam: de ooievaar vliegt met een bundeltje boven de gracht en Noah zwaait vanaf de kade"
                width="900"
                height="1180"
              />
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
              <div><dt>Leeftijd</dt><dd>0–6 jaar</dd></div>
            </dl>
            <button className="button disabled" disabled>Binnenkort te koop op Amazon</button>
            <p className="amazon-note">
              Zodra het boek gedrukt is, verwijst deze knop naar Amazon. Aankopen verlopen volledig
              via Amazon; Mijn Stadje gebruikt dan het Amazon Associates-programma. Er is hier dus
              geen eigen kassa — ook Noah hoeft geen pincode te onthouden.
            </p>
          </div>
        </section>

        <section className="section gallery-section" aria-labelledby="gallery-title">
          <div className="gallery-head-row">
            <div className="section-heading">
              <p className="eyebrow">Een kijkje in het boek</p>
              <h2 id="gallery-title">Acht pagina’s uit het boek</h2>
              <p className="gallery-lead">Van de Bloemenmarkt tot het IJ: blader alvast door acht letters uit Mijn Stadje Amsterdam.</p>
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
