import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../sharedComponent/theme";
import EasyButton from "../sharedComponent/EasyButton";

function createWrapper(themeValue) {
    return function Wrapper({ children }) {
      return <ThemeProvider initialTheme={themeValue}>{children}</ThemeProvider>;
    };
  }
  




  describe("EasyButton", () => {
    it("renders with light theme", () => {
      render(<EasyButton />, { wrapper: createWrapper("light") });
  
      expect(screen.getByRole("button")).toHaveStyle({ backgroundColor: "white" });
      expect(screen.getByRole("button")).toHaveStyle({ color: "black" });
    });
  
    it("renders with dark theme", () => {
      render(<EasyButton />, { wrapper: createWrapper("dark") });
  
      expect(screen.getByRole("button")).toHaveStyle({ backgroundColor: "black" });
      expect(screen.getByRole("button")).toHaveStyle({ color: "white" });
    });
  });
  