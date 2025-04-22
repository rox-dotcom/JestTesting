//import * as React from 'react';
import { renderHook, act } from '@testing-library/react';
import useCounter from '../sharedComponent/useCounter';



describe('useCounter (custom hook)', () => {

  it('should allow customization of the initial count', () => {
    const { result } = renderHook((props) => useCounter(props), {
        initialProps: { initialCount: 0 },
      });

      expect(result.current.count).toBe(0); 
    });

    it('should allow customization of the step', () => {
        const { result } = renderHook((props) => useCounter(props), {
          initialProps: { step: 5 },
        });
      
        act(() => {
          result.current.increment();
        });
      
        expect(result.current.count).toBe(5);
    
    });

});

  

