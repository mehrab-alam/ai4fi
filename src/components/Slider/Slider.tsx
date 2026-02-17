import * as Slider from "@radix-ui/react-slider";
import { generationConfig } from "../Pricing/pricingConfig";

interface ImageSliderProps {
  value: number;
  onChange: (value: number) => void;
}

function generateMarks(min: number, max: number, step: number) {
  const result: number[] = [];
  for (let v = min; v <= max; v += step) {
    result.push(v);
  }
  if (result[result.length - 1] !== max) {
    result.push(max);
  }
  return result;
}

function formatNumber(n: number) {
  if (n >= 1_000_000) return `${n / 1_000_000}M`;
  if (n >= 1000) return `${n / 1000}K`;
  return n.toString();
}

interface ImageSliderProps {
  value: number;
  onChange: (value: number) => void;
}

export function ImageSlider({ value, onChange }: ImageSliderProps) {
  const min = generationConfig.minImages;

  const max = generationConfig.maxImages;

  const marks = generateMarks(generationConfig.minImages, generationConfig.maxImages, generationConfig.step);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <p className="text-center text-sm text-foreground">Adjust your plan based on your business needs.</p>

      <div className="relative">
        <Slider.Root
          value={[value]}
          min={min}
          max={max}
          step={generationConfig.step}
          onValueChange={([v]) => onChange(v)}
          className="relative flex w-full items-center touch-none select-none"
        >
          <Slider.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
            <Slider.Range className="absolute h-full bg-brand rounded-full" />
          </Slider.Track>

          <Slider.Thumb className="relative flex items-center justify-center cursor-pointer w-5 h-5 rounded-full border-2 border-border bg-white shadow">
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs bg-brand text-white px-1.5 py-0.5 rounded whitespace-nowrap">
              {value >= max ? "Custom Plan" : formatNumber(value)}
            </div>
          </Slider.Thumb>
        </Slider.Root>

        {/* Dynamic Marks */}
        <div className="flex justify-between mt-2 text-xs text-foreground px-1">
          {marks.map((m, i) => (
            <span key={m}>
              {i === marks.length - 1 ? "Custom Plan" : formatNumber(m)}
            </span>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-foreground">
        1 image = <span className="text-foreground font-semibold">{generationConfig.creditsPerImage} credits</span>
      </p>
    </div>
  );
}
