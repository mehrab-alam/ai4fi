import { useState } from "react";
import { generationConfig, planComparison, pricingPlans } from "../components/Pricing/pricingConfig";
import { ImageSlider } from "../components/Slider/Slider";
import { PlanCard } from "../components/Pricing/PlanCard";
import PlanFeatureList, { PlanFeatureRow } from "../components/Pricing/PlanFeatureList";

const PricingPage = () => {
  const [images, setImages] = useState(generationConfig.creditsPerImage * generationConfig.minImages);

  return (
    <div className="py-16 space-y-12">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r py-2 from-orange-500 to-purple-500 bg-clip-text text-transparent">
          Simple and Affordable <br /> Pricing Plans
        </h1>
      </div>

      <ImageSlider value={images} onChange={setImages} />

      <div className="flex flex-col items-center gap-16">
        <div className="flex justify-center gap-6 flex-wrap">
          {pricingPlans.map((plan, i) => (
            <div key={i} className="max-w-[calc(100vw/4)">
              <PlanCard key={plan.id} plan={plan} />
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold">Plan Comparison</h2>
        <div className="flex justify-center  flex-wrap">
          <PlanFeatureRow
            label={"Features"}
            text1={pricingPlans[1].name}
            text2={pricingPlans[2].name}
            text3={pricingPlans[3].name}
            className="text-lg font-semibold"
            firstRowBorderRadius={"rounded-tl-[8px]"}
            lastRowBorderRadius={"rounded-tr-[8px]"}
          />
          <PlanFeatureRow
            label={"Credits Included"}
            text1={`${Number(pricingPlans[1].creditsIncluded) * images} credits`}
            text2={`${Number(pricingPlans[2].creditsIncluded) * images} credits`}
            text3={`${Number(pricingPlans[3].creditsIncluded) * images} credits`}
          />
          {planComparison.map((section, i) => (
            <PlanFeatureList isLastItem={i === planComparison.length - 1} key={i} comparison={section} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PricingPage;
