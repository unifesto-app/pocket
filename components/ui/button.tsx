import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bdadff] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[linear-gradient(135deg,#bdadff,#8666fa)] text-black hover:shadow-[0_0_24px_rgba(189,173,255,0.5)]",
        outline: "border border-[#bdadff] text-[#bdadff] hover:bg-[linear-gradient(135deg,#bdadff,#8666fa)] hover:text-black hover:border-transparent",
        ghost: "hover:bg-white/5 text-slate-300",
      },
      size: {
        default: "h-10 px-6 py-2.5",
        sm: "h-9 px-4 py-2",
        lg: "h-12 px-8 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
