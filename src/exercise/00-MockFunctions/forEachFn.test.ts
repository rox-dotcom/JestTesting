/* Exercise 0: Test the function by using a mock function */

/* Mock the function using jest.fn().
Write four tests inside a describe block. Do not forget to use the beforeEach function to clear the mock function.
The mock function receives a prop of type number. The mocked function adds a 6 to the number.
1. First Test: 
The forEach function should be called 3 times
2. Second Test:
The forEach function should be called with the correct arguments.
3. Third Test:
Test the first argument of the first call to the function was 0 and the result is 6.
Test the first argument of the second call to the function was 1  and the result is 7.
4. Forth Test:
Test the first argument of the third call to the function was 4 and the result is not 9.
*/

import { forEach } from "./forEach";

describe("Testing for Each function", () =>{
  beforeEach(() => {
    jest.clearAllMocks();

  });

  it("Call 3 times", () =>{
    const mockCallback = jest.fn();
    forEach([1,2,3], mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(3);
  })

  it("Call with correct arguments", () =>{
    const mockCallback = jest.fn();
    forEach([1,2,3], mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(1);
    expect(mockCallback).toHaveBeenCalledWith(2);
    expect(mockCallback).toHaveBeenCalledWith(3);
  });

  it("Test the first and second call arguments", () => {
    const mockCallback = jest.fn();
  
    forEach([0, 1, 4], mockCallback);
  
    expect(mockCallback).toHaveBeenCalledTimes(3);
    expect(mockCallback).toHaveBeenNthCalledWith(1, 0);
    expect(mockCallback).toHaveBeenNthCalledWith(2, 1); 
  });
  
  it("Test the third call was with 4 and result is not 9", () => {
    const mockCallback = jest.fn((item) => item + 5); 
  
    forEach([0, 1, 4], mockCallback);
  
    expect(mockCallback).toHaveBeenNthCalledWith(3, 4); 
    expect(mockCallback.mock.results[2].value).not.toBe(9); 
  });
  
  
});
