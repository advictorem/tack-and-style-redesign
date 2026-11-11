import ContactCTA from "@/components/ContactCTA";
import EditorialIntro from "@/components/EditorialIntro";
import FounderQuote from "@/components/FounderQuote";
import Hero from "@/components/Hero";
import InstagramFeed from "@/components/InstagramFeed";
import JournalPreview from "@/components/JournalPreview";
import Philosophy from "@/components/Philosophy";
import Process from "@/components/Process";
import SelectedProjects from "@/components/SelectedProjects";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorialIntro />
      <SelectedProjects />
      <Services />
      <FounderQuote />
      <Philosophy />
      <Process />
      <JournalPreview />
      <InstagramFeed />
      <ContactCTA />
    </>
  );
}
