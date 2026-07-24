import Header from "./header";
import Hero from "./sections/hero";
import FeatureCards from "./sections/feature-cards";
import ProblemPanel from "./sections/problem-panel";
import HowItWorks from "./sections/how-it-works";
import WhoItsFor from "./sections/who-its-for";
import Science from "./sections/science";
import AppSection from "./sections/app-section";
import BandSection from "./sections/band-section";
import WaitlistSection from "./sections/waitlist-section";
import Faq from "./sections/faq";
import SiteFooter from "./sections/site-footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <Header />
      <Hero />
      <FeatureCards />
      <ProblemPanel />
      <HowItWorks />
      <WhoItsFor />
      <Science />
      <AppSection />
      <BandSection />
      <WaitlistSection />
      <Faq />
      <SiteFooter />
    </div>
  );
}
