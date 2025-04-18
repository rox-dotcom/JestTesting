import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Counter from "../03-ReactDom/Counter";

describe("Render counter", ()=>{
 
  test('counter increments and decrements when the buttons are clicked', () => {
      const {container} = render(<Counter />);
     
      const increment = container.querySelector("Increment");
      const decrement = container.querySelector("Decrement");
      const message = container.querySelector("h1");
      
      if(message){
        if (increment) {
          fireEvent.mouseEnter(increment);
          expect(message.textContent).toBe("Counter: 1");
        };
        if (decrement) {
          fireEvent.mouseEnter(decrement);
          expect(message.textContent).toBe("Counter: 0");
        }
      
    }
    })

    screen.debug();
})