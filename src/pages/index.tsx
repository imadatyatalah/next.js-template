import React, { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import { NextSeo } from "next-seo";

const Home = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <NextSeo title="Home" />

      <section data-testid="home-page">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-gray-100">
            Next Themes + Tailwind Dark Mode
          </h1>

          <button
            className="px-4 py-2 mt-16 font-semibold text-white bg-black rounded-md dark:text-black dark:bg-white"
            onClick={() => {
              setTheme(resolvedTheme === "light" ? "dark" : "light");
            }}
          >
            Change Theme
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
