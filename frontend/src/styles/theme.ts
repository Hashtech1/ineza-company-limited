export const themeTokens = {
  color: {
    ink: "#101815",
    moss900: "#1D331A",
    moss700: "#2E5126",
    moss500: "#4A7F3D",
    clay500: "#D68A3C",
    sand: "#F7F3EA",
    bone: "#FDFBF6",
  },
  font: {
    display: "'Fraunces', serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  radius: {
    md: "0.75rem",
    lg: "1.25rem",
  },
} as const;

export type ThemeTokens = typeof themeTokens;
