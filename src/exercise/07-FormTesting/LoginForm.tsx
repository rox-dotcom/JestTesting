// src/exercise/Exercise04to08/07-FormTesting/LoginForm.tsx

import React from 'react';

type Props = {
  onSubmit: (data: { username: string; password: string }) => void;
};

export default function LoginForm({ onSubmit }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" />

      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" />

      <button type="submit">Submit</button>
    </form>
  );
}
