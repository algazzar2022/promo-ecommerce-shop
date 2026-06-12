import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ProductGrid from "@/components/landing/ProductGrid";
import PromoBenefits from "@/components/landing/PromoBenefits";
import CTASection from "@/components/landing/CTASection";
import HydrateStore from "@/components/HydrateStore";
import PageLoader from "@/components/PageLoader";
import { createClient } from "@supabase/supabase-js";

async function getStoreData() {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SECRET_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data, error } = await supabase
      .from("config")
      .select("value")
      .eq("key", "app_store_state")
      .single();

    if (error || !data) return {};
    return data.value as Record<string, unknown>;
  } catch {
    return {};
  }
}

export default async function Home() {
  const initialData = await getStoreData();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <PageLoader />
      <HydrateStore initialData={initialData} />
      <HeroSection />
      <FeaturesSection />
      <ProductGrid />
      <PromoBenefits />
      <CTASection />
    </main>
  );
}
