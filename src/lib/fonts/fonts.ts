import { Oswald } from "next/font/google";
import { DM_Serif_Display, Roboto } from "next/font/google";
export const oswald = Oswald({ subsets: ["cyrillic"], weight: "700" });
export const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});
export const roboto = Roboto({
  subsets: ["cyrillic"],
});
