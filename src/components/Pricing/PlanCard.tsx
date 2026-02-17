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
          style={{
            borderRadius:30
          }}
            className={cn(
              !plan.highlighted && " glass-card rounded-[30px]",
              
              "rounded-[8px] relative border p-6 w-80 h-[250px] text-left transition border-border",
              plan.highlighted && "bg-brand text-white border-brand scale-110",
              borderRadius ? borderRadius : "rounded-[30px]",
            )}
          >
            <div className="flex item-center justify-between">
              <div className="text-xl m-0 font-semibold">{plan.name}</div>

              {plan.popular && (
                <div className={cn("bg-foreground text-background text-[14px] w-fit p-[5px_10px] rounded-[30px]", plan.highlighted && "bg-background text-foreground")}>Most Popular</div>
              )}
            </div>
            <p className={cn("text-sm text-muted-foreground mt-4", plan.highlighted && "text-white/80")}>{plan.description}</p>

            <div className="flex items-baseline gap-1">
              <p className={cn("text-4xl font-bold mt-4", plan.highlighted && "text-white")}>
                {getCurrencySymbol(plan.currency)}
                {plan.price}
              </p>
              <span className={cn("text-lg text-muted-foreground", plan.highlighted && "text-white/80")}>/ month</span>
            </div>

            <button
              className={cn(
                "mt-4 w-full rounded-full py-2 text-sm font-medium transition-all active:scale-[0.98]",
                plan.highlighted ? "bg-background text-foreground hover:bg-background/90" : "bg-brand text-white hover:opacity-90",
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
