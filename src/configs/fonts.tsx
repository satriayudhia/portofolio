import { Roboto_Slab, Poppins } from "next/font/google";

export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
