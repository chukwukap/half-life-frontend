import { Inter, Roboto, Poppins, Open_Sans } from "next/font/google";

/**
 * Inter font configuration
 * A modern, highly readable font designed for screens
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Roboto font configuration
 * A clean, modern sans-serif font
 */
export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

/**
 * Poppins font configuration
 * A geometric sans-serif font with a modern touch
 */
export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

/**
 * Open Sans font configuration
 * A humanist sans-serif typeface
 */
export const openSans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

/**
 * Font class names for use in className prop
 */
export const fontClasses = {
  inter: inter.variable,
  roboto: roboto.variable,
  poppins: poppins.variable,
  openSans: openSans.variable,
};

/**
 * Font family names for use in CSS
 */
export const fontFamilies = {
  inter: "var(--font-inter)",
  roboto: "var(--font-roboto)",
  poppins: "var(--font-poppins)",
  openSans: "var(--font-open-sans)",
};
