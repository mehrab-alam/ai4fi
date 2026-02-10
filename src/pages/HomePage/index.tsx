import { FC } from "react";
import CTASection from "./sections/Cta";
import DemoSection from "./sections/Demo";
import FeaturedGallery from "./sections/FeaturedGallery";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import AboutUs from "./sections/AboutUs";
import HeroSection2 from "./sections/HeroSection2";
import TrialRoom from "./sections/TrialRoom";


const HomePage: FC = () => {
  
  return (
    <div>
      <HeroSection2 />
      <TrialRoom/>
      <HowItWorks />
      <DemoSection />
      <Features />
      <FeaturedGallery />
      <AboutUs />
      {/* <TestimonialsSection /> */}
      <CTASection />
    </div>
  );
};

export default HomePage;
