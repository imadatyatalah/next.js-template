/* eslint-disable react/prop-types */
import React from "react";

import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";

import SEO from "../../next-config.config";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        forcedTheme={Component.theme || undefined}
      >
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
