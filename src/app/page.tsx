import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ProductGrid from "@/components/landing/ProductGrid";
import HajjBenefits from "@/components/landing/HajjBenefits";
import CTASection from "@/components/landing/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <ProductGrid />
      <HajjBenefits />
      <CTASection />
    </main>
  );
}
