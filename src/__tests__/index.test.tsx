import React from "react";

import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Next Themes + Tailwind Dark Mode",
    });

    expect(heading).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    render(<Home />);

    expect(screen.getByTestId("home-page")).toMatchSnapshot();
  });
});
