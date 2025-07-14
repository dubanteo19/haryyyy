import { useEffect } from "react";
import { AboutSection } from "./home/AboutSection";
import { ContactSection } from "./home/ContactSection";
import { HeroSection } from "./home/HeroSection";
import WorksSection from "./home/WorksSection";
import { ProductsSection } from "./home/ProductsSections";

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
    </div>
  );
};
