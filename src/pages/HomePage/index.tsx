import { FC } from "react";
import CTASection from "./sections/Cta";
import DemoSection from "./sections/Demo";
import FeaturedGallery from "./sections/FeaturedGallery";
import Features from "./sections/Features";

import AboutUs from "./sections/AboutUs";
// import HeroSection2 from "./sections/HeroSection2";
import TrialRoom from "./sections/KeyFeatureItems";
import KeyFeatures from "./sections/KeyFeatures";
import VideoShowcase from "./sections/VideoShowcase";
import AiFashionHero from "./sections/AiFashionHero";
import ProductPhotoshootSection from "./sections/AIFeatures";
import SayGoodBySection from "./sections/SayGoodBy";
import VirtualTrialHighlight from "./sections/TestFeature";
import LifestyleStudioSection from "./sections/TestFeature";
import ProductPhotographySection from "./sections/TestFeature";
import AdGeneratorSection from "./sections/TestFeature";

const HomePage: FC = () => {
	return (
		<div>
			<AiFashionHero />
			{/* <HeroSection2 /> */}
			<SayGoodBySection />
			{/* <KeyFeatures /> */}
			{/* <VirtualTrialHighlight />/ */}
			{/* <LifestyleStudioSection /> */}
			{/* <ProductPhotographySection /> */}
			<AdGeneratorSection />
			<DemoSection />
			<Features />
			<FeaturedGallery />
			<AboutUs />
			<CTASection />
		</div>
	);
};

export default HomePage;
