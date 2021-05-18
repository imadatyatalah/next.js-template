/* eslint-disable react/prop-types */
import React from "react";

import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        forcedTheme={Component.theme || undefined}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
