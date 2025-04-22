//import * as React from 'react';
import { render, act } from '@testing-library/react';
import useCounter from '../sharedComponent/useCounter';

type CounterHookProps = {
  initialCount?: number;
  step?: number;
};

function setup(props?: CounterHookProps) {
  const result = { current: null as ReturnType<typeof useCounter> | null };

  function TestComponent() {
    result.current = useCounter(props);
    return null;
  }

  render(<TestComponent />);
  return result;
}

describe('useCounter (custom hook)', () => {

  it('should allow customization of the initial count', () => {
    const result = setup({ initialCount: 7 });
    expect(result.current!.count).toBe(7);
  });

  it('should allow customization of the step', () => {
    const result = setup({ initialCount: 0, step: 5 });
    act(() => {
      result.current!.increment();
    });
    expect(result.current!.count).toBe(5);
  });

  
});

