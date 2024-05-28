import { html } from "htm/react";
import { useState, useEffect } from "react";
import useUser from "../hooks/use-user";
import { Box, CircularProgress, Typography } from "@mui/material";

export default ({ app }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { loaded: isUserLoaded } = useUser();

  useEffect(() => {
    const isAllLoaded = isUserLoaded;
    if (!isAllLoaded) return;
    setIsLoaded(true);
  }, [isUserLoaded]);

  if (!isLoaded) {
    return html`
      <${Box}
        sx=${{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <${CircularProgress} sx=${{ marginBottom: "20px" }} />
        <${Typography} variant="h3"> Loading </${Typography}>
      </${Box}>
    `;
  }
  return html`
    <${Box} sx=${{ p: 4 }}>
      <p>
        Welcome to the starting point for Devs Who Can't Code! This is a simple 
        app that doesn't do anything yet. Use it as a starting point for your 
        project.
        <br />
        Find on 
        <a href="https://github.com/HopeTS/devs-who-cant-code-starter.git">
          GitHub
        </a>.
      </p>
    </${Box}>
  `;
};
