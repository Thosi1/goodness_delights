import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  steps: string[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: Props) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="Form progress">
      {steps.map((label, i) => {
        const state = i < currentStep ? "done" : i === currentStep ? "current" : "upcoming";
        return (
          <li key={label} className="flex items-center gap-2">
            <span
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-body text-xs font-semibold",
                state === "done" && "bg-gold-500 text-brown-900",
                state === "current" && "bg-brown-700 text-white",
                state === "upcoming" && "bg-blush-100 text-brown-400"
              )}
              aria-current={state === "current" ? "step" : undefined}
            >
              {state === "done" ? <Check className="h-4 w-4" /> : i + 1}
            </span>
            <span
              className={cn(
                "font-body text-sm",
                state === "upcoming" ? "text-brown-400" : "text-brown-700"
              )}
            >
              {label}
            </span>
            {i < steps.length - 1 && <span className="mx-1 h-px w-6 bg-blush-200 sm:w-10" />}
          </li>
        );
      })}
    </ol>
  );
}
