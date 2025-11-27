import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero-section';
import ServicesIntro from '@/components/sections/services-intro';
import ProcessSteps from '@/components/sections/process-steps';
import WhoWeAre from '@/components/sections/who-we-are';
import ExpertiseSection from '@/components/sections/expertise-section';
import InternshipIntro from '@/components/sections/internship-intro';
import InternshipOfferings from '@/components/sections/internship-offerings';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesIntro />
        <ProcessSteps />
        <WhoWeAre />
        <ExpertiseSection />
        <InternshipIntro />
        <InternshipOfferings />
      </main>
      <Footer />
    </>
  );
}