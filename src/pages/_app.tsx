import React from "react";
import type { AppProps } from "next/app";

import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";

import SEO from "next-seo.config";

import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
