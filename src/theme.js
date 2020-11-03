import { createStrictContext } from "./strictContext";

const defaultTheme = {
  name: "light",
  bg: "#fff",
  hoverBg: "#f7f7f7",
  heading: "#000",
  subheading: "#678",
  body: "#111",
  links: "#27a",
  border: "#eee"
};

const darkTheme = {
  name: "dark",
  bg: "#123",
  hoverBg: "#172e45",
  heading: "#fff",
  subheading: "#89a",
  body: "#fff",
  links: "#39e",
  border: "#345"
};
const [ThemeProvider, useTheme] = createStrictContext({ name: "Theme" });
export { defaultTheme, darkTheme, ThemeProvider, useTheme };
