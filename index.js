import { versions } from "pear";
import { html } from "htm/react";
import { createRoot } from "react-dom/client";
import App from "./src/containers/App";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const { app } = await versions();
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const root = createRoot(document.querySelector("#root"));
root.render(html`
  <${ThemeProvider} theme=${theme}>
    <${CssBaseline} />
      <${App} app="{app}" />
  </${ThemeProvider}>
`);
