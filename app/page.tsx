import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionOverview from "@/components/SolutionOverview";
import TwoPathWorkflow from "@/components/TwoPathWorkflow";
import ProductPreview from "@/components/ProductPreview";
import FeatureBlocks from "@/components/FeatureBlocks";
import WhyItMatters from "@/components/WhyItMatters";
import Pricing from "@/components/Pricing";
import TrustSecurity from "@/components/TrustSecurity";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <SolutionOverview />
        <TwoPathWorkflow />
        <ProductPreview />
        <FeatureBlocks />
        <WhyItMatters />
        <Pricing />
        <TrustSecurity />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
