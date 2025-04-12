import * as React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  render,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import LoginSubmission from "../sharedComponent/LoginSubmission";


// Define Mock Hanlder
const server = setupServer(
  rest.post("/api/login", async (req, res, ctx) => {
    const { username, password } = await req.json();

    if (username === "admin" && password === "secret123") {
      return res(
        ctx.status(200),
        ctx.json({ username: "admin", message: "Login successful" })
      );
    } else {
      return res(
        ctx.status(401),
        ctx.json({ message: "Invalid username or password" })
      );
    }
  })
);


beforeAll(() => server.listen()); // Start the mock server before tests
afterEach(() => server.resetHandlers()); // Reset handlers after each test
afterAll(() => server.close()); // Stop the server after all tests

describe("LoginSubmission Component", () => {
    test("logs in successfully with correct credentials", async () => {
        render(<LoginSubmission />);
        const usernameInput = screen.getByLabelText(/username/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole("button", { name: "submit" });

        await userEvent.type(usernameInput, "admin");
        await userEvent.type(passwordInput, "secret123");
        await userEvent.click(loginButton);
    
        // Spinner appears
        await waitForElementToBeRemoved(() => screen.getByRole("status"));
    
        expect(await screen.findByText(/welcome/i)).toBeInTheDocument();
    });
    
    test("shows error when password is missing", async () => {
        render(<LoginSubmission />);
        const usernameInput = screen.getByLabelText(/username/i);
        const loginButton = screen.getByRole("button", { name: "submit" });
    
        await userEvent.type(usernameInput, "admin");
        await userEvent.click(loginButton);
    
        await waitForElementToBeRemoved(() => screen.getByRole("status"));
        expect(await screen.findByRole("alert")).toMatchInlineSnapshot(`
<div
  role="alert"
  style="color: red;"
>
  Invalid username or password
</div>
`);
    });
    
    test("shows error when username is missing", async () => {
        render(<LoginSubmission />);
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole("button", { name: "submit" });
    
        await userEvent.type(passwordInput, "secret125");
        await userEvent.click(loginButton);
    
        await waitForElementToBeRemoved(() => screen.getByRole("status"));
    
        expect(await screen.findByRole("alert")).toMatchInlineSnapshot(`
<div
  role="alert"
  style="color: red;"
>
  Invalid username or password
</div>
`);
    });
}); 
