import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

interface Props {
  value: number[];
  onChange: (value: number[]) => void;
  className?: string;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  Props
>(({ value, onChange, className, ...props }, ref) => {
  const handleSliderChange = (newValue: number[]) => {
    onChange(newValue);
  };
  const [thumbHovered, setThumbHovered] = React.useState(false);

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      value={value}
      onValueChange={handleSliderChange}
      onMouseEnter={() => setThumbHovered(true)} 
      onMouseLeave={() => setThumbHovered(false)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range className="absolute h-full bg-primary" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={`block h-2 w-2 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${thumbHovered ? 'h-3 w-3' : ''}`} />
    </SliderPrimitive.Root>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
