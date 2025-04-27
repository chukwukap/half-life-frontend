import { Inter, Roboto, Poppins, Open_Sans } from "next/font/google";

/**
 * Primary font configuration
 * A modern, highly readable font designed for screens
 */
export const primaryFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
});

/**
 * Secondary font configuration
 * A clean, modern sans-serif font
 */
export const secondaryFont = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-secondary",
});

/**
 * Heading font configuration
 * A geometric sans-serif font with a modern touch
 */
export const headingFont = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

/**
 * Body font configuration
 * A humanist sans-serif typeface
 */
export const bodyFont = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

/**
 * Font class names for use in className prop
 */
export const fontClasses = {
  primary: primaryFont.variable,
  secondary: secondaryFont.variable,
  heading: headingFont.variable,
  body: bodyFont.variable,
};

/**
 * Font family names for use in CSS
 */
export const fontFamilies = {
  primary: "var(--font-primary)",
  secondary: "var(--font-secondary)",
  heading: "var(--font-heading)",
  body: "var(--font-body)",
};
