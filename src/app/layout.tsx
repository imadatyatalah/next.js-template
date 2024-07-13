import type { Metadata } from "next";

import ThemeProvider from "@/components/theme/theme-provider";
import { inter } from "@/styles/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "Next.js Template",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
