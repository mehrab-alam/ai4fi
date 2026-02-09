import { cn } from "../../services/utils";
export interface GenerationConfig {
  minImages: number;
  maxImages: number;
  selectedImages: number;
  step: number;
  creditsPerImage: number;
}

export interface Feature {
  id: string;
  label: string;
  included: boolean;
}

export interface PricingPlan {
  id: "silver" | "gold" | "platinum" | "features";
  name: string;
  description: string;
  price: number;
  popular?: boolean;
  currency: "INR" | "USD";
  highlighted?: boolean;
  disabled?: boolean;
  creditsIncluded: string | number;
  ctaText: string;
}

interface PlanCardProps {
  plan: PricingPlan;
  borderRadius?: string;
}

export function PlanCard({ plan, borderRadius }: PlanCardProps) {
  const getCurrencySymbol = (currency: string) => {
    switch (currency) {
      case "INR":
        return "₹";
      case "USD":
        return "$";
      default:
        return currency;
    }
  };
  return (
    <>
      {plan.id !== "features" && (
        <>
          <div
            className={cn(
              "rounded-xl relative border p-6 w-80 h-[250px] text-left   transition",
              plan.highlighted &&
                "border-purple-500 scale-105  bg-gradient-to-r  from-orange-500 to-purple-500 text-white ]",
              //   plan.disabled && "opacity-50 pointer-events-none",
              borderRadius ? borderRadius : "rounded-[30px]",
            )}
          >
            <div className="flex item-center justify-between">
              <div className="text-xl m-0  font-semibold">{plan.name}</div>

              {plan.popular && (
                <div className=" bg-[#000] text-[14px]  w-fit p-[5px_10px]  rounded-[30px] ">Most Popular</div>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-4">{plan.description}</p>

            <div className="flex items-baseline gap-1">
              <p className="text-4xl font-bold mt-4">
                {getCurrencySymbol(plan.currency)}
                {plan.price}
              </p>
              <span className={cn("text-lg text-gray-600", plan.highlighted && "text-[#eee]")}>/ month</span>
            </div>

            <button
              className={cn(
                "mt-4 w-full rounded-full py-2 text-sm font-medium",
                plan.highlighted ? "bg-white text-purple-600" : "border border-purple-400 text-purple-600",
              )}
            >
              {plan.ctaText}
            </button>
          </div>
        </>
      )}
      {plan.id == "features" && <></>}
    </>
  );
}
