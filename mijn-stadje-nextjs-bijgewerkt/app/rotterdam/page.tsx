import type { Metadata } from "next";
import { DevelopmentPage } from "../site-components";

export const metadata: Metadata = { title: "Rotterdam", description: "Mijn Stadje Rotterdam is in ontwikkeling." };

export default function RotterdamPage() {
  return <DevelopmentPage city="Rotterdam" image="/assets/rotterdam-header.webp" active="rotterdam" note="Noah test alvast of je over de Erasmusbrug sneller vooruitkomt met grote of juist kleine stappen." />;
}
