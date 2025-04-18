
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../03-ReactDom/Counter";

test("counter increments and decrements when buttons are clicked", () => {
    render(<Counter />);
  
    const increment = screen.getByText("Increment");
    const decrement = screen.getByText("Decrement");
    const message = screen.getByRole("heading");
  
    fireEvent.click(increment);
    //fireEvent.click(increment);
    expect(message.textContent).toBe("Counter: 1");
  
    fireEvent.click(decrement);
    expect(message.textContent).toBe("Counter: 0");
  });
  