/* Mock Modules */

/* Mock the function using jest.mock() and jest.fn().
Write four tests inside a describe block. Do not forget to use the beforeEach function to clear the mock function.
Mock the functions in the utils files, they are being used in the convertCase function.
Set up the mock functions before each test.

1. Test cases for the reverseString function
2. Test cases for the toLowerCase function
3. Test cases for the toUpperCase function
4. Test cases for the default case when it is unknown
5. Test cases for the empty string
*/
import { convertCase } from "./convertCase";
import * as utils from "./utils";

// 1. Mock del módulo completo
jest.mock("./utils", () => ({
  toUpperCase: jest.fn(),
  toLowerCase: jest.fn(),
  reverseString: jest.fn(),
}));

describe("convertCase with mocked utils", () => {
  const input = "TeSt";

  beforeEach(() => {
    jest.clearAllMocks(); // limpia llamadas entre tests
  });

  it("should call toUpperCase and return mocked value", () => {
    (utils.toUpperCase as jest.Mock).mockReturnValue("MOCKED-UPPER");

    const result = convertCase(input, "upper");

    expect(utils.toUpperCase).toHaveBeenCalledWith(input);
    expect(result).toBe("MOCKED-UPPER");
  });

  it("should call toLowerCase and return mocked value", () => {
    (utils.toLowerCase as jest.Mock).mockReturnValue("mocked-lower");

    const result = convertCase(input, "lower");

    expect(utils.toLowerCase).toHaveBeenCalledWith(input);
    expect(result).toBe("mocked-lower");
  });

  it("should call reverseString and return mocked value", () => {
    (utils.reverseString as jest.Mock).mockReturnValue("dEtSeM");

    const result = convertCase(input, "reverse");

    expect(utils.reverseString).toHaveBeenCalledWith(input);
    expect(result).toBe("dEtSeM");
  });

  it("should return original string when caseType is 'unknown'", () => {
    const result = convertCase(input, "unknown");
    expect(result).toBe(input);
  });

  it("should handle empty string correctly", () => {
    (utils.toUpperCase as jest.Mock).mockReturnValue("");

    const result = convertCase("", "upper");

    expect(utils.toUpperCase).toHaveBeenCalledWith("");
    expect(result).toBe("");
  });
});
