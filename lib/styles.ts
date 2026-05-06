import type { CSSProperties } from "react";

/** Brand gradient applied as text fill — use as style={gradientText} */
export const gradientText: CSSProperties = {
  background: "linear-gradient(135deg, #fff462, #ffb700)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/** Brand gradient value (for use in background/border inline styles) */
export const brandGradient = "linear-gradient(135deg, #fff462, #ffb700)";
