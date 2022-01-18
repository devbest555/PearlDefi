import { Colors } from "./types";

// https://www.pixilart.com/palettes/nightclub-590

export const baseColors = {
  failure: "#00be91",
  primary: "#2BAFFF",   // this color changes the unlock wallet and connect button
  // this color also affects the font color for wallet connect
  // this color also changes the font color on the top of the Farms page
  // this color also highlights the menu position on the left
  // this color also colors the multiplier button on the farms
  primaryBright: "#009a98", // this changes the above buttons when hovered over
  primaryDark: "#001d2a",
  secondary: "#38C5F8",   // text for farm info on dark mode. Title color for dark mode.
  success: "#9af089",
  warning: "#f2ff66",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#38C5F8",  // color of font on front page
  background: "#000000",  // main background of website
  backgroundDisabled: "#061428",
  contrast: "#FFFFFF",
  invertedContrast: "#1C74EE",
  input: "#134FA3",  // used for background of buttons on farms
  primaryDark: "#2BAFFF",
  tertiary: "#134997",  // color when hover over menu items
  // also wallet menu button items
  text: "#31FFFF",
  textDisabled: "#38C5F8",
  textSubtle: "#38C5F8",  // text on active and inactive button. also colors active button.
  // also color for menu text
  borderColor: "#061428",
  card: "#041020",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #061428 0%, #31FFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#000000",
  backgroundDisabled: "#061428",
  contrast: "#FFFFFF",
  invertedContrast: "#1C74EE",
  input: "#134FA3",
  tertiary: "#134997",
  text: "#31FFFF",
  textDisabled: "#38C5F8",
  textSubtle: "#38C5F8",
  borderColor: "#061428",
  card: "#041020",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #061428 0%, #31FFFF 100%)",
  },
};
