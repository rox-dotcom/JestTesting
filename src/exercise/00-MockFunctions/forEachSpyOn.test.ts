/* Exercise 0: Test the function by using a spyOn function */

/* Mock the function using spyOn
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


import * as module from './forEach';
import { forEach } from './forEach';

describe('forEach with spyOn', () => {
  let mockFn: jest.SpyInstance;

  const inputArray = [0, 1, 4];

  beforeEach(() => {
    jest.clearAllMocks();
    // Espiamos y reemplazamos la implementación de mockedFunction
    mockFn = jest.spyOn(module, 'mockedFunction').mockImplementation((num: number) => num + 6);
  });

  it('1. First Test: should be called 3 times', () => {
    forEach(inputArray, module.mockedFunction);
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it('2. Second Test: should be called with the correct arguments', () => {
    forEach(inputArray, module.mockedFunction);
    expect(mockFn).toHaveBeenNthCalledWith(1, 0);
    expect(mockFn).toHaveBeenNthCalledWith(2, 1);
    expect(mockFn).toHaveBeenNthCalledWith(3, 4);
  });

  it('3. Third Test: arguments and results of first and second call', () => {
    forEach(inputArray, module.mockedFunction);

    expect(mockFn).toHaveBeenNthCalledWith(1, 0);
    expect(mockFn.mock.results[0].value).toBe(6); // 0 + 6

    expect(mockFn).toHaveBeenNthCalledWith(2, 1);
    expect(mockFn.mock.results[1].value).toBe(7); // 1 + 6
  });

  it('4. Fourth Test: third call argument and result is not 9', () => {
    forEach(inputArray, module.mockedFunction);

    expect(mockFn).toHaveBeenNthCalledWith(3, 4);
    expect(mockFn.mock.results[2].value).not.toBe(9); // 4 + 6 = 10
  });
});
