import type { Metadata } from "next";
import { DevelopmentPage } from "../site-components";

export const metadata: Metadata = { title: "Den Haag", description: "Mijn Stadje Den Haag is in ontwikkeling." };

export default function DenHaagPage() {
  return <DevelopmentPage city="Den Haag" image="/assets/den-haag-header.webp" active="den-haag" note="Tussen het Binnenhof en de zee zoekt Noah uit waar de stad het hardst waait. Puur onderzoek, natuurlijk." />;
}
