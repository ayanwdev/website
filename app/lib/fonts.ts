import { M_PLUS_1, Silkscreen } from "next/font/google";

export const mPlus1 = M_PLUS_1({
  subsets: ["latin"],
  variable: "--font-m-plus-1",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const silkScreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-silkscreen",
  weight: "400",
  display: "swap",
});
