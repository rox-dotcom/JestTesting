// src/exercise/Exercise04to08/07-FormTesting/LoginForm.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';


test('should submit form with dynamic data', async () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);
    
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByText(/submit/i);
  
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  
    fireEvent.click(submitButton);
  
    expect(handleSubmit).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'testpassword',
    });
  });