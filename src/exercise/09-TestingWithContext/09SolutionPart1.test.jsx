import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "./theme";
import EasyButton from "./EasyButton";

function Wrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;

}

const {renderer} = render(<EasyButton />, { wrapper: Wrapper });

renderer(<EasyButton theme={"dark"} />);

describe("EasyButton", () => {
    it("render with light theme")
});