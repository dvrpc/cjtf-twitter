import { render } from "preact";
import { useState, useEffect } from "preact/hooks";
import { darkTheme, defaultTheme, ThemeProvider } from "./theme";

import "tailwindcss/dist/base.min.css";

import Container from "./components/Container";

const timeline_name = "Central Jersey Transportation Forum";
const screen_name = "CJTF_NJ";

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("theme")) {
      setTheme({ light: defaultTheme, dark: darkTheme }[params.get("theme")]);
    } else {
      const customTheme = {
        bg: params.get("bg"),
        hoverBg: params.get("hoverbg"),
        heading: params.get("heading"),
        subheading: params.get("subheading"),
        body: params.get("body"),
        links: params.get("links"),
        border: params.get("border"),
      };
      for (const prop in customTheme) {
        !customTheme[prop] && delete customTheme[prop];
      }
      Object.keys(customTheme).length &&
        setTheme((theme) => ({
          ...theme,
          ...customTheme,
          name: "custom",
        }));
    }
  }, []);

  useEffect(async () => {
    const data = await fetch(
      "https://www.dvrpc.org/asp/cjtf/twitter.aspx?all=true"
    );
    const json = await data.json();
    setTweets(json);
  }, []);
  console.log({ theme });
  return (
    <ThemeProvider value={theme}>
      <Container
        timeline_name={timeline_name}
        screen_name={screen_name}
        tweets={tweets}
      />
    </ThemeProvider>
  );
};

if (typeof window !== "undefined") render(<App />, document.body);
