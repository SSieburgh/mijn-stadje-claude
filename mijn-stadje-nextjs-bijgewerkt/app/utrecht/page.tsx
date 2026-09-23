import type { Metadata } from "next";
import { DevelopmentPage } from "../site-components";

export const metadata: Metadata = { title: "Utrecht", description: "Mijn Stadje Utrecht is in ontwikkeling." };

export default function UtrechtPage() {
  return <DevelopmentPage city="Utrecht" image="/assets/utrecht-header.webp" active="utrecht" note="De Domtoren houdt overzicht terwijl Noah uitzoekt welke werfkelder de beste echo heeft." />;
}
