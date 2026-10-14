import type { Metadata } from "next";
import { SiteShell } from "../site-components";

export const metadata: Metadata = {
  title: "Cookiebeleid",
  description: "Welke cookies Mijn Stadje gebruikt, waarvoor, en hoe je je keuze kunt wijzigen.",
};

export default function CookiebeleidPage() {
  return (
    <SiteShell active="home">
      <main className="legal-page">
        <h1>Cookiebeleid</h1>
        <p className="legal-updated">Laatst bijgewerkt: 14 oktober 2026</p>

        <p>
          Mijn Stadje gebruikt op deze site alleen cookies en vergelijkbare technieken (zoals
          lokale opslag in je browser) voor bezoekersstatistieken en advertentiemeting. Niets
          daarvan wordt geladen voordat jij daar toestemming voor geeft via de melding onderin
          de pagina — zie hieronder precies wat, van wie, en hoelang.
        </p>

        <h2>Welke cookies gebruiken we</h2>
        <table>
          <thead>
            <tr>
              <th>Naam / doel</th>
              <th>Categorie</th>
              <th>Van</th>
              <th>Bewaartermijn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Je cookiekeuze onthouden</td>
              <td>Noodzakelijk</td>
              <td>Mijn Stadje (deze site zelf)</td>
              <td>Totdat je je keuze wijzigt</td>
            </tr>
            <tr>
              <td><code>_ga</code>, <code>_ga_*</code> — bezoekersstatistieken (Google Analytics)</td>
              <td>Statistieken</td>
              <td>Google Ireland Limited</td>
              <td>Tot 2 jaar</td>
            </tr>
            <tr>
              <td><code>_fbp</code> — advertentiemeting (Meta Pixel)</td>
              <td>Marketing</td>
              <td>Meta Platforms Ireland Limited</td>
              <td>Tot 90 dagen</td>
            </tr>
          </tbody>
        </table>

        <h2>Waarvoor gebruiken we ze</h2>
        <p>
          <strong>Statistieken (Google Analytics):</strong> we zien hiermee hoeveel mensen de
          site bezoeken, welke stadspagina’s het meest bekeken worden en welke route bezoekers
          door de site volgen. IP-adressen worden hierbij geanonimiseerd.
        </p>
        <p>
          <strong>Marketing (Meta Pixel):</strong> we zien hiermee of een bezoek via Facebook of
          Instagram tot interesse in een boek leidt, en kunnen later mensen die de site al
          kenden opnieuw bereiken met een advertentie. Er wordt geen betaalgegeven of
          bestelinformatie gedeeld — aankopen verlopen volledig via Amazon, buiten deze site om.
        </p>

        <h2>Hoe werkt toestemming</h2>
        <p>
          Zolang je geen keuze hebt gemaakt, staat er een melding onderin je scherm en wordt er
          niets van het bovenstaande geladen. Kies je voor “Weigeren”, dan verandert er niets:
          er wordt dan nooit statistiek- of marketingcode geladen. Kies je voor “Accepteren”, dan
          worden Google Analytics en de Meta Pixel pas vanaf dat moment actief.
        </p>

        <h2>Je keuze wijzigen</h2>
        <p>
          Je kunt je keuze op elk moment aanpassen via “Cookie-instellingen” onderin de footer
          van elke pagina. Daarmee wordt de melding opnieuw getoond en kun je een andere keuze
          maken.
        </p>

        <h2>Vragen</h2>
        <p>
          Dit cookiebeleid gaat specifiek over cookies en vergelijkbare technieken. Een volledige
          privacyverklaring voor Mijn Stadje volgt nog; dit beleid wordt bijgewerkt zodra die
          gereed is.
        </p>
      </main>
    </SiteShell>
  );
}
