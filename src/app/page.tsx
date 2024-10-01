import NavigationBar from "@/components/navigations/NavigationBar";
import MainSection from "@/components/sections/MainSection";
import OurLatestDealsSection from "@/components/sections/OurLatestDealsSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import HappyCustomerSection from "@/components/sections/HappyCustomersSection";
import Footer from "@/components/navigations/Footer";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <MainSection />
      <OurLatestDealsSection />
      <CategoriesSection />
      <BenefitsSection />
      <HappyCustomerSection />
      <Footer />
    </>
  );
}
