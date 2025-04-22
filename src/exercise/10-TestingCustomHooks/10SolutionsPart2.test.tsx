import { render, act } from '@testing-library/react';
import useCounter from '../sharedComponent/useCounter';

let result: ReturnType<typeof useCounter>;

function TestComponent(props: { initialCount?: number; step?: number }) {
    result = useCounter(props);
    return null;
  }


describe('useCounter', () => {
    it('initializes count with default values', () => {
        render(<TestComponent />);
        expect(result.count).toBe(0);
      });
    
      it('initializes count with custom initialCount and step', () => {
        render(<TestComponent initialCount={5} step={2} />);
        expect(result.count).toBe(5);
      });
    
      it('increments the count', () => {
        render(<TestComponent initialCount={0} step={2} />);
        act(() => {
          result.increment();
        });
        expect(result.count).toBe(2);
      });
    
      it('decrements the count', () => {
        render(<TestComponent initialCount={5} step={3} />);
        act(() => {
          result.decrement();
        });
        expect(result.count).toBe(2);
      });
});