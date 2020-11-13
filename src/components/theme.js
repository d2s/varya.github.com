import { grommet } from "grommet";
import { deepMerge } from "grommet/utils";

const theme = deepMerge(grommet, {
  name: "varya.me",
  rounding: 4,
  spacing: 24,
  defaultMode: "light",
  global: {
    colors: {
      brand: "#EC4E4B",
      background: "#FFFFFF",
      "background-contrast": "text-xxweak",
      text: "rgba(0, 0, 0, 0.85)",
      "text-strong": "rgba(0, 0, 0, 1)",
      "text-weak": "rgba(0, 0, 0, 0.65)",
      "text-xweak": "rgba(0, 0, 0, 0.45)",
      "text-xxweak": "rgba(0, 0, 0, 0.25)",
      "text-invert": "#ffffff",
      border: "text-xweak",
      control: "brand",
      accent: "#f8d179",
      neutral: "#85D8F3",
      focus: "neutral",

      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
    },
    font: {
      family: "Roboto Light",
    },
    active: {
      background: "active-background",
      color: "active-text",
    },
    hover: {
      background: "active-background",
      color: "active-text",
    },
    selected: {
      background: "selected-background",
      color: "selected-text",
    },
  },
  heading: {
    font: {
      family: "Roboto Black",
    },
  },
  paragraph: {
    extend: () => "text-align: justify",
  },
  button: {
    border: {
      radius: `5px`,
    },

    extend: ({ plain, theme }) =>
      plain
        ? `&:hover {
      color: ${theme.global.colors.brand};
      text-decoration: underline;
      background: transparent;
      }
    `
        : `font-weight: bold;
        color: ${theme.global.colors["text-invert"]}`,
  },
});

export default theme;
