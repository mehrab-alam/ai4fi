import { FC } from "react";
import { cn } from "../../services/utils";
import { Check, X } from "lucide-react";
import { ComparisonSection } from "./pricingConfig";

export const PlanFeatureRow: FC<{
  label: string;
  text1: boolean | string | number;
  text2: boolean | string | number;
  text3: boolean | string | number;
  className?: string;
  firstRowBorderRadius?: string;
  lastRowBorderRadius?: string;
}> = ({ text1, text2, text3, label, className = "text-sm", firstRowBorderRadius, lastRowBorderRadius }) => {
  return (
    <div className="flex justify-center  flex-wrap">
      <div
        className={cn(
          "rounded-[0px] p-[15px] w-80 min-h-[60px] text-left transition border border-border border-b-0",
          "flex items-center gap-4 bg-muted/50",
          firstRowBorderRadius ? firstRowBorderRadius : "rounded-[0px]",
        )}
      >
        <div className="w-2 h-2 rounded-full bg-brand"></div>
        <div className="text-[18px] text-foreground font-medium">{label}</div>
      </div>
      <div
        className={cn(
          "rounded-[0px] border border-border p-[15px] flex items-center justify-center flex-col w-80 min-h-[60px] text-center transition border-l-0 border-b-0",
          className,
        )}
      >
        {(typeof text1 == "string" || typeof text1 == "number") && <div className={cn(className, "text-foreground")}>{text1}</div>}
        {typeof text1 == "boolean" && text1 && <Check className="text-green-500" size={20} />}
        {typeof text1 == "boolean" && !text1 && <X className="text-destructive" size={20} />}
      </div>
      <div
        className={cn(
          "rounded-[0px] border border-border p-[15px] flex items-center justify-center w-80 flex-col min-h-[60px] text-center transition border-l-0 border-b-0",
          className,
        )}
      >
        {(typeof text2 == "string" || typeof text2 == "number") && <div className={cn(className, "text-foreground")}>{text2}</div>}
        {typeof text2 == "boolean" && text2 && <Check className="text-green-500" size={20} />}
        {typeof text2 == "boolean" && !text2 && <X className="text-destructive" size={20} />}
      </div>
      <div
        className={cn(
          "rounded-[0px] border border-border p-[15px] flex items-center justify-center w-80 flex-col min-h-[60px] text-center transition border-l-0 border-b-0",
          className,
          lastRowBorderRadius ? lastRowBorderRadius : "rounded-[0px]",
        )}
      >
        {(typeof text3 == "string" || typeof text3 == "number") && <div className={cn(className, "text-foreground")}>{text3}</div>}
        {typeof text3 == "boolean" && text3 && <Check className="text-green-500" size={20} />}
        {typeof text3 == "boolean" && !text3 && <X className="text-destructive" size={20} />}
      </div>
    </div>
  );
};

const PlanFeatureList: FC<{ comparison: ComparisonSection; isLastItem: boolean }> = ({ comparison, isLastItem }) => {
  return (
    <div>
      <div className="flex items-center gap-2 border border-border border-b-0 p-4 bg-muted">
        <div className="w-[40px] h-[4px] bg-brand rounded-full"></div>
        <div className="text-lg font-bold text-foreground">{comparison.title}</div>
      </div>
      <div className={cn(isLastItem && "border-b border-border")}>
        {comparison.features.map((feature, i) => (
          <PlanFeatureRow
            key={i}
            label={feature.label}
            text1={feature.values.silver}
            text2={feature.values.gold}
            text3={feature.values.platinum}
            firstRowBorderRadius={isLastItem && i === comparison.features.length - 1 ? "rounded-bl-[8px]" : "rounded-[0px]"}
            lastRowBorderRadius={isLastItem && i === comparison.features.length - 1 ? "rounded-br-[8px]" : "rounded-[0px]"}
          />
        ))}
      </div>
    </div>
  );
};

export default PlanFeatureList;
