# Mijn Stadje

Responsieve website voor de kinderboekenserie Mijn Stadje. De site is gebouwd met Next.js en kan rechtstreeks vanuit een GitHub-repository op Vercel worden gepubliceerd.

## Inhoud

- Homepage met klikbare stedenbanner en vier stadskaarten.
- Uitgebreide Amsterdam-pagina met boekpresentatie, acht verhaalbeats en praktische gegevens.
- Pagina’s voor Utrecht, Rotterdam en Den Haag met de status ‘in ontwikkeling’.
- Responsive ontwerp voor desktop, tablet en telefoon.
- Geen winkelwagen of eigen betaalomgeving.
- Amazon-knoppen staan bewust uitgeschakeld totdat het boek verkrijgbaar is.

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

Voor deze website zijn geen environment variables nodig.

## Belangrijkste bestanden

- `app/page.tsx`: homepage.
- `app/amsterdam/page.tsx`: Amsterdam-pagina.
- `app/utrecht/page.tsx`: Utrecht-pagina.
- `app/rotterdam/page.tsx`: Rotterdam-pagina.
- `app/den-haag/page.tsx`: Den Haag-pagina.
- `app/site-components.tsx`: gedeelde navigatie, footer en stadscomponenten.
- `app/globals.css`: volledige huisstijl en responsive opmaak.
- `public/assets`: de vijf originele headerafbeeldingen.

## Amazon-knop later activeren

In `app/amsterdam/page.tsx` staan twee uitgeschakelde knoppen:

```tsx
<button className="button disabled" disabled>
  Binnenkort te koop op Amazon
</button>
```

Vervang elke knop zodra het boek beschikbaar is door een link met jouw definitieve Amazon Associates-URL:

```tsx
<a
  className="button primary"
  href="JOUW-AMAZON-ASSOCIATES-URL"
  target="_blank"
  rel="sponsored noopener noreferrer"
>
  Koop op Amazon
</a>
```

Werk op dat moment ook de begeleidende tekst en de status ‘Nu verkrijgbaar’ bij als dat nodig is.
