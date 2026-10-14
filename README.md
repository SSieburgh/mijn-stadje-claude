# Mijn Stadje

Responsieve website voor de kinderboekenserie Mijn Stadje. De site is gebouwd met Next.js en kan rechtstreeks vanuit een GitHub-repository op Vercel worden gepubliceerd.

## Inhoud

- Homepage met klikbare stedenbanner en vier stadskaarten.
- Uitgebreide Amsterdam-pagina met boekpresentatie, acht verhaalbeats en praktische gegevens.
- Pagina’s voor Utrecht, Rotterdam en Den Haag met de status ‘in ontwikkeling’.
- Responsive ontwerp voor desktop, tablet en telefoon.
- Geen winkelwagen of eigen betaalomgeving.
- Amazon-knoppen staan bewust uitgeschakeld totdat het boek verkrijgbaar is.
- Cookiebanner + cookiebeleid-pagina, en klik-tracking op stadskeuze en Amazon-knoppen (zie "Tracking pixels" hieronder).

## Lokaal starten

Vereist: Node.js 20.9 of nieuwer.

```bash
npm install
npm run dev
```

Open daarna `http://localhost:3000`.

Controleer vóór publicatie ook de productiebuild:

```bash
npm run build
npm run start
```

## Naar GitHub uploaden

Maak op GitHub een lege repository aan en voer in deze projectmap uit:

```bash
git init
git add .
git commit -m "Eerste versie Mijn Stadje"
git branch -M main
git remote add origin https://github.com/JOUW-GEBRUIKERSNAAM/JOUW-REPOSITORY.git
git push -u origin main
```

Vervang de voorbeeld-URL door de URL van jouw eigen repository.

## Publiceren via Vercel

1. Ga naar `vercel.com/new`.
2. Koppel GitHub en selecteer de repository.
3. Vercel herkent automatisch het framework `Next.js`.
4. Laat Root Directory leeg wanneer deze projectmap de hoofdmap van de repository is.
5. Gebruik Build Command `npm run build` en laat Output Directory op automatisch staan.
6. Klik op Deploy.

Voor bezoekersstatistieken en advertentiemeting kun je twee environment variables instellen — zie hieronder bij "Tracking pixels (GA4 + Meta Pixel)". Zonder die twee variabelen werkt de site gewoon, alleen zonder tracking.

## Belangrijkste bestanden

- `app/page.tsx`: homepage.
- `app/amsterdam/page.tsx`: Amsterdam-pagina.
- `app/utrecht/page.tsx`: Utrecht-pagina.
- `app/rotterdam/page.tsx`: Rotterdam-pagina.
- `app/den-haag/page.tsx`: Den Haag-pagina.
- `app/site-components.tsx`: gedeelde navigatie, footer en stadscomponenten.
- `app/tracking-links.tsx`: de interactieve, klik-trackende onderdelen (stadslinks, `AmazonBuyButton`).
- `app/cookiebeleid/page.tsx`: de cookieverklaring.
- `app/globals.css`: volledige huisstijl en responsive opmaak.
- `public/assets`: de vijf originele headerafbeeldingen.

## Amazon-knop later activeren

De twee "Koop op Amazon"-knoppen op `app/amsterdam/page.tsx` gebruiken de gedeelde
`AmazonBuyButton`-component (`app/tracking-links.tsx`). Zonder URL tonen ze automatisch de
uitgeschakelde "Binnenkort te koop op Amazon"-placeholder; dat hoeft dus nergens los beheerd
te worden.

Zodra het boek verkrijgbaar is, vul je bovenin `app/amsterdam/page.tsx` één regel in:

```tsx
const AMAZON_URL: string | undefined = "JOUW-AMAZON-ASSOCIATES-URL";
```

Beide knoppen worden daardoor automatisch een werkende link — inclusief de klik-tracking
(zie "Welke events worden getrackt" hieronder), zonder dat je daar los iets voor hoeft te
doen. Werk op dat moment ook de begeleidende tekst en de status ‘Nu verkrijgbaar’ bij als
dat nodig is.

## Tracking pixels (GA4 + Meta Pixel)

De site heeft een cookiebanner (`app/analytics.tsx`) die pas ná toestemming van de bezoeker
Google Analytics (GA4) en de Meta Pixel laadt — verplicht onder de Nederlandse/Europese
cookieregels. Weigert iemand, dan wordt er niets geladen en niets getrackt.

Om de tracking daadwerkelijk te activeren, twee environment variables toevoegen in het
Vercel-project (Settings → Environment Variables) en opnieuw deployen:

| Naam | Waarde | Waar te vinden |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | bijv. `G-XXXXXXXXXX` | Google Analytics → Beheer → Gegevensstreams → jouw stream |
| `NEXT_PUBLIC_META_PIXEL_ID` | een reeks cijfers | Meta Events Manager → jouw pixel → Instellingen |

Zolang een van beide (of allebei) niet is ingesteld, laadt dat specifieke script simpelweg
niet — er gebeurt dan niets fout, er wordt alleen niets getrackt.

Bezoekers kunnen hun keuze altijd terugdraaien via de link "Cookie-instellingen" onderin
de footer. De pagina `/cookiebeleid` (`app/cookiebeleid/page.tsx`) beschrijft per cookie het
doel, de aanbieder en de bewaartermijn, en wordt vanuit zowel de cookiebanner als de footer
gelinkt.

### Welke events worden getrackt

Naast de automatische paginabezoeken (bij elke routewissel) sturen twee plekken in de site een
extra, specifiek event — alleen als er toestemming is gegeven:

| Actie | Waar in de code | GA4-event | Meta-event |
| --- | --- | --- | --- |
| Een stad aanklikken (stadskaart, panorama-link of mobiel menu) | `trackCityView()` in `app/analytics.tsx`, gebruikt door `TrackedCityLink`/`CityCard` in `app/tracking-links.tsx` | `select_content` (`content_name` = stad) | `ViewContent` (`content_name` = stad) |
| Klik op "Koop op Amazon" | `trackAmazonClick()` in `app/analytics.tsx`, gebruikt door `AmazonBuyButton` in `app/tracking-links.tsx` | `click_buy_amazon` (`content_name` = stad) | `Lead` (`content_name` = stad) |

Wil je een vergelijkbaar klikevent ergens anders toevoegen (bijvoorbeeld een toekomstig
e-mailaanmeldformulier voor Utrecht/Rotterdam/Den Haag), schrijf dan een nieuwe functie naar
hetzelfde patroon in `app/analytics.tsx` en roep die aan vanuit een component met
`"use client"` erboven — een gewone server component (zoals de meeste `page.tsx`-bestanden)
kan zelf geen `onClick` doorgeven aan een link of knop.
